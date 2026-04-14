import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, HomeIcon, BookOpen, CheckCircle, XCircle, RefreshCw, Trophy } from '../components/Icons'
import { getPlusOneChapters, getPlusTwoChapters, getChapterQuestions } from '../data/biologyChapters'
import Mascot, { CelebrationEffect } from '../components/Mascot'

const subjects = [
  { id: 'physics', name: 'Physics', icon: '⚡', color: '#f59e0b', comingSoon: true },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: '#3b82f6', comingSoon: true },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#22c55e', comingSoon: false }
]

const ACTIVE_CHAPTER_ID = 'p1-ch16' // Digestion and Absorption

function Practice() {
  const navigate = useNavigate()
  const [step, setStep] = useState('subject') // subject, chapter, quiz
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [activeTab, setActiveTab] = useState('plus-one')
  
  // Quiz state
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizComplete, setQuizComplete] = useState(false)

  const plusOneChapters = getPlusOneChapters()
  const plusTwoChapters = getPlusTwoChapters()
  const chapters = activeTab === 'plus-one' ? plusOneChapters : plusTwoChapters

  const handleSubjectSelect = (subject) => {
    if (subject.comingSoon) return
    setSelectedSubject(subject)
    setStep('chapter')
  }

  const handleChapterSelect = (chapter) => {
    if (chapter.id !== ACTIVE_CHAPTER_ID) return
    setSelectedChapter(chapter)
    setStep('quiz')
    resetQuiz()
  }

  const resetQuiz = () => {
    setCurrentQIndex(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizComplete(false)
  }

  const questions = selectedChapter ? getChapterQuestions(selectedChapter.id) : []
  const currentQuestion = questions[currentQIndex]

  const handleOptionSelect = (option) => {
    if (showResult) return
    setSelectedOption(option)
  }

  const handleCheck = () => {
    if (!selectedOption) return
    
    const isCorrect = selectedOption.correct
    if (isCorrect) setScore(s => s + 1)
    
    setAnswers([...answers, {
      question: currentQuestion.question,
      selected: selectedOption.text,
      correct: isCorrect,
      correctAnswer: currentQuestion.options.find(o => o.correct)?.text
    }])
    
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(c => c + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRetry = () => {
    resetQuiz()
  }

  // Subject Selection Step
  if (step === 'subject') {
    return (
      <div className="practice-container">
        {/* Header */}
        <div className="practice-header">
          <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
            <button className="back-btn" onClick={() => navigate('/')} title="Back">
              <ArrowLeft size={24} />
            </button>
            <button className="home-btn" onClick={() => navigate('/')} title="Home">
              <HomeIcon size={22} />
            </button>
          </div>
          <h2>Practice MCQs</h2>
          <div style={{ width: 80 }}></div>
        </div>

        <div className="practice-content">
          <motion.div 
            className="practice-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="practice-icon-large">📝</div>
            <h1>Practice Mode</h1>
            <p>Test your knowledge with MCQs</p>
          </motion.div>

          <motion.h3 
            className="select-subject-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Select Subject
          </motion.h3>

          <div className="subject-grid-practice">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                className={`subject-practice-card ${subject.comingSoon ? 'disabled' : ''} ${selectedSubject?.id === subject.id ? 'selected' : ''}`}
                style={{ '--subject-color': subject.color }}
                onClick={() => handleSubjectSelect(subject)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!subject.comingSoon ? { scale: 1.03 } : {}}
                whileTap={!subject.comingSoon ? { scale: 0.98 } : {}}
              >
                <span className="subject-emoji-large">{subject.icon}</span>
                <h3>{subject.name}</h3>
                {subject.comingSoon && <span className="soon-badge">Soon</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Chapter Selection Step
  if (step === 'chapter') {
    return (
      <div className="practice-container">
        {/* Header */}
        <div className="practice-header">
          <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
            <button className="back-btn" onClick={() => setStep('subject')} title="Back">
              <ArrowLeft size={24} />
            </button>
            <button className="home-btn" onClick={() => navigate('/')} title="Home">
              <HomeIcon size={22} />
            </button>
          </div>
          <h2>{selectedSubject.name} Chapters</h2>
          <div style={{ width: 80 }}></div>
        </div>

        <div className="practice-content">
          {/* Class Tabs */}
          <div className="class-tabs-practice">
            <button 
              className={activeTab === 'plus-one' ? 'active' : ''}
              onClick={() => setActiveTab('plus-one')}
            >
              Plus One
            </button>
            <button 
              className={activeTab === 'plus-two' ? 'active' : ''}
              onClick={() => setActiveTab('plus-two')}
            >
              Plus Two
            </button>
          </div>

          <div className="chapters-practice-list">
            {chapters.map((chapter, index) => {
              const isActive = chapter.id === ACTIVE_CHAPTER_ID
              
              return (
                <motion.div
                  key={chapter.id}
                  className={`chapter-practice-item ${!isActive ? 'locked' : ''}`}
                  onClick={() => handleChapterSelect(chapter)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={isActive ? { x: 5 } : {}}
                >
                  <div className="chapter-practice-number">{index + 1}</div>
                  <div className="chapter-practice-info">
                    <h4>{chapter.title}</h4>
                    <p>{chapter.topics.slice(0, 2).join(', ')}...</p>
                  </div>
                  {!isActive && <span className="practice-soon">Soon</span>}
                  {isActive && <span className="practice-available">✓ Available</span>}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Quiz Complete
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className="practice-container">
        {percentage >= 70 && <CelebrationEffect />}
        
        {/* Header */}
        <div className="practice-header">
          <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
            <button className="back-btn" onClick={() => setStep('chapter')} title="Back">
              <ArrowLeft size={24} />
            </button>
            <button className="home-btn" onClick={() => navigate('/')} title="Home">
              <HomeIcon size={22} />
            </button>
          </div>
          <h2>Practice Complete!</h2>
          <div style={{ width: 80 }}></div>
        </div>

        <div className="practice-content">
          <motion.div 
            className="quiz-complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="result-icon-large">
              {percentage >= 70 ? '🏆' : percentage >= 40 ? '👍' : '💪'}
            </div>
            
            <h1 className="result-title">
              {percentage >= 70 ? 'Excellent!' : percentage >= 40 ? 'Good Job!' : 'Keep Practicing!'}
            </h1>
            
            <div className="score-display">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
            
            <div className="percentage-badge" style={{ 
              background: percentage >= 70 ? '#22c55e' : percentage >= 40 ? '#f59e0b' : '#ef4444'
            }}>
              {percentage}%
            </div>

            <div className="quiz-summary">
              <h3>Summary</h3>
              {answers.map((ans, i) => (
                <div key={i} className={`answer-item ${ans.correct ? 'correct' : 'wrong'}`}>
                  <span className="answer-icon">{ans.correct ? '✓' : '✗'}</span>
                  <span className="answer-text">{ans.question.substring(0, 40)}...</span>
                </div>
              ))}
            </div>

            <div className="quiz-actions">
              <motion.button 
                className="retry-btn"
                onClick={handleRetry}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw size={18} />
                <span>Try Again</span>
              </motion.button>
              <motion.button 
                className="new-chapter-btn"
                onClick={() => setStep('chapter')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen size={18} />
                <span>Another Chapter</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Step
  return (
    <div className="practice-container">
      {/* Header */}
      <div className="practice-header">
        <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
          <button className="back-btn" onClick={() => setStep('chapter')} title="Back">
            <ArrowLeft size={24} />
          </button>
          <button className="home-btn" onClick={() => navigate('/')} title="Home">
            <HomeIcon size={22} />
          </button>
        </div>
        <div className="progress-bar practice-progress">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="question-counter">{currentQIndex + 1}/{questions.length}</span>
      </div>

      <div className="practice-content">
        {/* Mascot */}
        <motion.div 
          className="practice-mascot"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <Mascot 
            mood={showResult ? (selectedOption?.correct ? 'celebrating' : 'sad') : 'thinking'} 
            size={80}
          />
        </motion.div>

        {/* Question */}
        <motion.div 
          className="practice-question"
          key={currentQIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h2 className="question-text-practice">{currentQuestion.question}</h2>
          
          <div className="options-list-practice">
            {currentQuestion.options.map((option) => (
              <motion.button
                key={option.id}
                className={`option-btn-practice ${
                  selectedOption?.id === option.id ? 'selected' : ''
                } ${
                  showResult && option.correct ? 'correct' : ''
                } ${
                  showResult && selectedOption?.id === option.id && !option.correct ? 'wrong' : ''
                }`}
                onClick={() => handleOptionSelect(option)}
                disabled={showResult}
                whileHover={!showResult ? { scale: 1.02, x: 5 } : {}}
                whileTap={!showResult ? { scale: 0.98 } : {}}
              >
                <span className="option-letter-practice">{option.id.toUpperCase()}</span>
                <span className="option-text-practice">{option.text}</span>
                {showResult && option.correct && <CheckCircle size={20} className="result-icon correct" />}
                {showResult && selectedOption?.id === option.id && !option.correct && 
                  <XCircle size={20} className="result-icon wrong" />}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Feedback / Next */}
        {showResult && (
          <motion.div 
            className={`feedback-bar-practice ${selectedOption?.correct ? 'correct' : 'wrong'}`}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
          >
            <div className="feedback-content-practice">
              <div className="feedback-text-practice">
                {selectedOption?.correct ? '✓ Correct!' : '✗ Incorrect'}
              </div>
              {!selectedOption?.correct && (
                <div className="explanation-practice">{currentQuestion.explanation}</div>
              )}
            </div>
            <motion.button 
              className={`next-btn-practice ${selectedOption?.correct ? 'correct' : 'wrong'}`}
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentQIndex < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </motion.button>
          </motion.div>
        )}

        {/* Check Button */}
        {!showResult && (
          <motion.div 
            className="check-bar-practice"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button 
              className={`check-btn-practice ${selectedOption ? 'active' : ''}`}
              onClick={handleCheck}
              disabled={!selectedOption}
              whileHover={selectedOption ? { scale: 1.02 } : {}}
              whileTap={selectedOption ? { scale: 0.98 } : {}}
            >
              Check Answer
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Practice
