import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { X, Heart, Check, XCircle } from '../components/Icons'
import { modules } from '../data/digestionModules'
import Mascot from '../components/Mascot'

function Quiz({ user, setUser }) {
  const { moduleId, levelId, questionIndex } = useParams()
  const navigate = useNavigate()
  
  const module = modules.find(m => m.id === moduleId)
  const level = module?.levels.find(l => l.id === levelId)
  const questions = level?.questions || []
  const currentQIndex = parseInt(questionIndex) || 0
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null)
    setShowResult(false)
    setIsCorrect(false)
    setUserAnswer('')
  }, [questionIndex, moduleId, levelId])

  const question = questions[currentQIndex]

  const handleOptionSelect = (option) => {
    if (showResult) return
    setSelectedOption(option)
  }

  const handleInputChange = (e) => {
    if (showResult) return
    setUserAnswer(e.target.value)
  }

  const handleCheck = () => {
    let correct = false
    
    if (question.type === 'mcq') {
      if (!selectedOption) return
      correct = selectedOption.correct
    } else if (question.type === 'input') {
      if (!userAnswer.trim()) return
      const normalizedAnswer = userAnswer.toLowerCase().trim()
      correct = question.acceptableAnswers.some(ans => 
        normalizedAnswer.includes(ans.toLowerCase()) || ans.toLowerCase().includes(normalizedAnswer)
      )
    }
    
    setIsCorrect(correct)
    setShowResult(true)
    
    if (!correct) {
      setUser({ ...user, hearts: Math.max(0, user.hearts - 1) })
    }
  }

  const handleNext = () => {
    const remainingQuestions = questions.slice(currentQIndex + 1)
    const nextVoiceIndex = remainingQuestions.findIndex(q => q.type === 'voice')
    const nextRegularIndex = remainingQuestions.findIndex(q => q.type !== 'voice')
    
    let nextIndex = -1
    let nextType = null
    
    if (nextVoiceIndex !== -1 && (nextRegularIndex === -1 || nextVoiceIndex <= nextRegularIndex)) {
      nextIndex = currentQIndex + 1 + nextVoiceIndex
      nextType = 'voice'
    } else if (nextRegularIndex !== -1) {
      nextIndex = currentQIndex + 1 + nextRegularIndex
      nextType = 'quiz'
    }
    
    if (nextIndex !== -1) {
      if (nextType === 'voice') {
        navigate(`/speak/${moduleId}/${levelId}/${nextIndex}`)
      } else {
        navigate(`/quiz/${moduleId}/${levelId}/${nextIndex}`)
      }
    } else {
      // Level complete
      const completedAll = questions.every((q, i) => {
        if (q.type === 'mcq' || q.type === 'input') return true
        return false
      })
      
      if (completedAll && !user.completedLevels.includes(levelId)) {
        setUser({
          ...user,
          xp: user.xp + (level?.xp || 15),
          completedLevels: [...user.completedLevels, levelId]
        })
      }
      navigate(-1)
    }
  }

  if (!question) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <button className="close-btn" onClick={() => navigate(-1)}>
            <X size={24} />
          </button>
        </div>
        <div className="no-questions">No questions available</div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <button className="close-btn" onClick={() => navigate(-1)}>
          <X size={24} />
        </button>
        <div className="progress-bar quiz-progress">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="hearts">
          <Heart size={20} fill="#ff4b4b" color="#ff4b4b" />
          <span>{user.hearts}</span>
        </div>
      </div>

      {/* Question */}
      <div className="question-section">
        <div className={`difficulty-badge ${question.difficulty}`}>
          {question.difficulty === 'basic' ? '🟩 Basic' : 
           question.difficulty === 'trap' ? '🟥 Trap' : 
           question.difficulty === 'neet' ? '🧠 NEET' : 'Mixed'}
        </div>
        <h2 className="question-text">{question.question}</h2>
        
        {question.type === 'mcq' && (
          <div className="options-list">
            {question.options.map((option) => (
              <button
                key={option.id}
                className={`option-btn ${
                  selectedOption?.id === option.id ? 'selected' : ''
                } ${
                  showResult && option.correct ? 'correct' : ''
                } ${
                  showResult && selectedOption?.id === option.id && !option.correct ? 'wrong' : ''
                }`}
                onClick={() => handleOptionSelect(option)}
                disabled={showResult}
              >
                <span className="option-letter">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
                {showResult && option.correct && <Check size={20} className="result-icon correct" />}
                {showResult && selectedOption?.id === option.id && !option.correct && 
                  <XCircle size={20} className="result-icon wrong" />}
              </button>
            ))}
          </div>
        )}
        
        {question.type === 'input' && (
          <div className="input-question">
            <input
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              placeholder="Type your answer..."
              disabled={showResult}
              className="answer-input"
            />
            {showResult && (
              <div className={`input-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect ? '✓ Correct!' : `✗ Answer: ${question.answer}`}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Feedback / Next */}
      {showResult && (
        <div className={`feedback-bar ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="feedback-content">
            <div className="feedback-text">
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </div>
            {!isCorrect && (
              <div className="explanation">{question.explanation}</div>
            )}
          </div>
          <button 
            className={`next-btn ${isCorrect ? 'correct' : 'wrong'}`}
            onClick={handleNext}
          >
            {currentQIndex < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}

      {/* Check Button */}
      {!showResult && (
        <div className="check-bar">
          <button 
            className={`check-btn ${selectedOption || (question.type === 'input' && userAnswer.trim()) ? 'active' : ''}`}
            onClick={handleCheck}
            disabled={!selectedOption && !(question.type === 'input' && userAnswer.trim())}
          >
            Check
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
