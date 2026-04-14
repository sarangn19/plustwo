import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { X, Mic, Square, Volume2, HomeIcon } from '../components/Icons'
import { modules } from '../data/digestionModules'
import Mascot from '../components/Mascot'

function SpeakQuestion({ user, setUser }) {
  const { moduleId, levelId, questionIndex } = useParams()
  const navigate = useNavigate()
  
  const module = modules.find(m => m.id === moduleId)
  const level = module?.levels.find(l => l.id === levelId)
  const questions = level?.questions || []
  const currentQIndex = parseInt(questionIndex) || 0
  const question = questions[currentQIndex]
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [feedback, setFeedback] = useState(null)
  
  const recognitionRef = useRef(null)

  if (!question) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <button className="close-btn" onClick={() => navigate(-1)}>
            <X size={24} />
          </button>
        </div>
        <div className="no-questions">Question not found</div>
      </div>
    )
  }

  const startRecording = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser')
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognitionRef.current = new SpeechRecognition()
    recognitionRef.current.continuous = true
    recognitionRef.current.interimResults = true
    recognitionRef.current.lang = 'en-US'

    recognitionRef.current.onresult = (event) => {
      let finalTranscript = ''
      let interim = ''
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript
        } else {
          interim += event.results[i][0].transcript
        }
      }
      
      if (finalTranscript) {
        setTranscript(prev => prev + ' ' + finalTranscript.trim())
      }
      setInterimTranscript(interim)
    }

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
    }

    recognitionRef.current.start()
    setIsRecording(true)
  }

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
    setIsRecording(false)
    analyzeAnswer()
  }

  const analyzeAnswer = () => {
    const lowerTranscript = transcript.toLowerCase()
    const matchedKeywords = question.keywords.filter(kw => 
      lowerTranscript.includes(kw.toLowerCase())
    )
    
    const score = matchedKeywords.length / question.keywords.length
    
    if (score >= 0.5) {
      setFeedback({ 
        correct: true, 
        message: 'Great explanation!',
        xp: 25
      })
      setUser({
        ...user,
        xp: user.xp + 25
      })
    } else {
      setFeedback({ 
        correct: false, 
        message: 'Try including these concepts: ' + question.keywords.slice(0, 4).join(', '),
        xp: 0
      })
    }
    setShowResult(true)
  }

  const handleContinue = () => {
    // Reset state for next question
    setTranscript('')
    setInterimTranscript('')
    setShowResult(false)
    setFeedback(null)
    
    // Simply go to next sequential question
    const nextIndex = currentQIndex + 1
    
    if (nextIndex < questions.length) {
      const nextQuestion = questions[nextIndex]
      if (nextQuestion.type === 'voice') {
        navigate(`/speak/${moduleId}/${levelId}/${nextIndex}`)
      } else {
        navigate(`/quiz/${moduleId}/${levelId}/${nextIndex}`)
      }
    } else {
      // Level complete
      if (!user.completedLevels.includes(levelId)) {
        setUser({
          ...user,
          completedLevels: [...user.completedLevels, levelId]
        })
      }
      navigate(`/module/${moduleId}`)
    }
  }

  const speakHint = () => {
    const utterance = new SpeechSynthesisUtterance(question.hint)
    utterance.rate = 0.9
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
          <button className="close-btn" onClick={() => navigate(-1)} title="Back">
            <X size={24} />
          </button>
          <button className="home-btn" onClick={() => navigate('/')} title="Home">
            <HomeIcon size={22} />
          </button>
        </div>
        <span className="question-type">SPEAKING EXERCISE</span>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Question */}
      <div className="speak-question-section">
        <h2 className="speak-prompt">{question.question}</h2>
        
        <button className="hint-btn" onClick={speakHint}>
          <Volume2 size={18} />
          <span>Hint</span>
        </button>
      </div>

      {/* Mascot */}
      <div className="speak-mascot">
        <Mascot mood={isRecording ? 'listening' : showResult ? (feedback?.correct ? 'happy' : 'sad') : 'neutral'} />
      </div>

      {/* Transcript Display - Always visible when recording or has content */}
      <div className="transcript-section">
        {(transcript || interimTranscript) && (
          <div className="transcript-box">
            <p className="final-text">{transcript}</p>
            {interimTranscript && (
              <p className="interim-text">{interimTranscript}</p>
            )}
          </div>
        )}
        {!transcript && !interimTranscript && !showResult && (
          <div className="transcript-placeholder">
            <p>Tap the microphone and speak your answer...</p>
          </div>
        )}
      </div>

      {/* Recording Button */}
      {!showResult && (
        <div className="record-section">
          <button 
            className={`record-btn ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
          >
            {isRecording ? <Square size={32} fill="white" /> : <Mic size={32} />}
          </button>
          <span className="record-label">
            {isRecording ? 'Tap to stop' : 'Tap to record'}
          </span>
        </div>
      )}

      {/* Feedback */}
      {showResult && (
        <div className={`feedback-bar ${feedback.correct ? 'correct' : 'wrong'}`}>
          <div className="feedback-content">
            <div className="feedback-text">{feedback.message}</div>
            {feedback.correct && <div className="xp-earned">+{feedback.xp} XP!</div>}
          </div>
          <button 
            className={`next-btn ${feedback.correct ? 'correct' : 'wrong'}`}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  )
}

export default SpeakQuestion
