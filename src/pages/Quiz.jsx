import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { X, Heart, Check, XCircle, HomeIcon, Zap, Trophy, Star, Flame } from '../components/Icons'
import { modules } from '../data/digestionModules'
import Mascot, { CelebrationEffect } from '../components/Mascot'

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
  
  // Gamification state
  const [streak, setStreak] = useState(0)
  const [sessionXP, setSessionXP] = useState(0)
  const [showXPPopup, setShowXPPopup] = useState(false)
  const [xpPopupAmount, setXpPopupAmount] = useState(0)
  const [levelComplete, setLevelComplete] = useState(false)

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
    
    if (correct) {
      // Award XP with streak bonus
      const baseXP = 10
      const streakBonus = Math.min((streak) * 2, 10)
      const totalXP = baseXP + streakBonus
      
      setStreak(s => s + 1)
      setSessionXP(prev => prev + totalXP)
      setXpPopupAmount(totalXP)
      setShowXPPopup(true)
      
      // Update global user XP
      setUser({ ...user, xp: (user.xp || 0) + totalXP })
      
      // Hide XP popup after animation
      setTimeout(() => setShowXPPopup(false), 2000)
    } else {
      // Wrong answer - lose heart and reset streak
      setStreak(0)
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
      {/* Gamified Header */}
      <div className="quiz-header-gamified">
        <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
          <button className="close-btn" onClick={() => navigate(-1)} title="Back">
            <X size={24} />
          </button>
          <button className="home-btn" onClick={() => navigate('/')} title="Home">
            <HomeIcon size={22} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar quiz-progress">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">{currentQIndex + 1}/{questions.length}</span>
        </div>
        
        {/* Gamification Stats */}
        <div className="gamified-stats">
          <div className="stat-item hearts-stat">
            <Heart size={18} fill="#ff4b4b" color="#ff4b4b" />
            <span>{user.hearts}</span>
          </div>
          {streak > 1 && (
            <motion.div 
              className="stat-item streak-stat"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Flame size={18} />
              <span>{streak} 🔥</span>
            </motion.div>
          )}
          <div className="stat-item xp-stat">
            <Star size={18} fill="#fbbf24" color="#fbbf24" />
            <span>+{sessionXP}</span>
          </div>
        </div>
      </div>

      {/* Animated Mascot */}
      <AnimatePresence>
        {showResult && isCorrect && <CelebrationEffect />}
      </AnimatePresence>
      
      <motion.div 
        className="quiz-mascot"
        style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <Mascot 
          mood={showResult ? (isCorrect ? 'celebrating' : 'sad') : 'thinking'} 
          size={80}
        />
      </motion.div>

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

      {/* XP Popup Animation */}
      <AnimatePresence>
        {showXPPopup && (
          <motion.div 
            className="xp-popup"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="xp-popup-content">
              <Zap size={24} fill="#fbbf24" />
              <span className="xp-amount">+{xpPopupAmount}</span>
              <span className="xp-label">XP</span>
              {streak > 1 && (
                <span className="streak-bonus">🔥 {streak} streak bonus!</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback / Next */}
      {showResult && (
        <motion.div 
          className={`feedback-bar-gamified ${isCorrect ? 'correct' : 'wrong'}`}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <div className="feedback-content-gamified">
            <div className="feedback-icon-large">
              {isCorrect ? '🎉' : '❌'}
            </div>
            <div className="feedback-text-gamified">
              {isCorrect ? (
                <>
                  <span className="correct-text">Correct!</span>
                  {streak > 2 && (
                    <span className="streak-text">{streak} in a row! 🔥</span>
                  )}
                </>
              ) : (
                <span className="wrong-text">Incorrect</span>
              )}
            </div>
            {!isCorrect && (
              <div className="explanation-gamified">
                <span className="explanation-label">Explanation:</span>
                {question.explanation}
              </div>
            )}
          </div>
          <motion.button 
            className={`next-btn-gamified ${isCorrect ? 'correct' : 'wrong'}`}
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentQIndex < questions.length - 1 ? 'Continue →' : 'Complete Level! 🏆'}
          </motion.button>
        </motion.div>
      )}

      {/* Check Button */}
      {!showResult && (
        <motion.div 
          className="check-bar"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button 
            className={`check-btn ${selectedOption || (question.type === 'input' && userAnswer.trim()) ? 'active' : ''}`}
            onClick={handleCheck}
            disabled={!selectedOption && !(question.type === 'input' && userAnswer.trim())}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Check
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}

export default Quiz
