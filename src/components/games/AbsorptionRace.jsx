import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Clock, Zap } from '../Icons'

// Absorption Race Game
// Match nutrients to absorption sites quickly

const NUTRIENTS = [
  { 
    id: 'glucose', 
    name: 'Glucose', 
    emoji: '🍬', 
    site: 'blood',
    fact: 'Glucose enters blood capillaries directly'
  },
  { 
    id: 'amino', 
    name: 'Amino Acids', 
    emoji: '🥩', 
    site: 'blood',
    fact: 'Amino acids go straight to blood'
  },
  { 
    id: 'fatty', 
    name: 'Fatty Acids', 
    emoji: '🧈', 
    site: 'lymph',
    fact: 'Fats enter lymph (lacteals) first'
  },
  { 
    id: 'glycerol', 
    name: 'Glycerol', 
    emoji: '💧', 
    site: 'blood',
    fact: 'Glycerol is small, enters blood directly'
  },
  { 
    id: 'vitamin-a', 
    name: 'Vitamin A (Fat)', 
    emoji: '🥕', 
    site: 'lymph',
    fact: 'Fat-soluble vitamins follow fat route'
  },
  { 
    id: 'vitamin-c', 
    name: 'Vitamin C (Water)', 
    emoji: '🍊', 
    site: 'blood',
    fact: 'Water-soluble vitamins enter blood'
  }
]

const SITES = {
  blood: { name: 'Blood', emoji: '🩸', color: '#ef4444' },
  lymph: { name: 'Lymph', emoji: '💧', color: '#3b82f6' }
}

export function AbsorptionRace({ onComplete, onExit }) {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentNutrient, setCurrentNutrient] = useState(null)
  const [streak, setStreak] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [usedNutrients, setUsedNutrients] = useState([])
  const [feedback, setFeedback] = useState(null)

  // Start game
  useEffect(() => {
    spawnNutrient()
    
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setGameComplete(true)
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const spawnNutrient = useCallback(() => {
    const available = NUTRIENTS.filter(n => !usedNutrients.includes(n.id))
    
    if (available.length === 0) {
      // Reset if all used
      setUsedNutrients([])
      spawnNutrient()
      return
    }
    
    const random = available[Math.floor(Math.random() * available.length)]
    setCurrentNutrient(random)
    setFeedback(null)
  }, [usedNutrients])

  const handleSiteSelect = (site) => {
    if (!currentNutrient || gameComplete) return

    const correct = currentNutrient.site === site
    
    if (correct) {
      // Calculate points based on time and streak
      const timeBonus = Math.floor(timeLeft / 10)
      const streakBonus = streak * 5
      const points = 15 + timeBonus + streakBonus
      
      setScore(s => s + points)
      setStreak(s => s + 1)
      setFeedback({
        type: 'correct',
        message: `✓ Correct! ${currentNutrient.fact}`,
        points
      })
    } else {
      setStreak(0)
      setFeedback({
        type: 'wrong',
        message: `✗ Wrong! ${currentNutrient.name} goes to ${SITES[currentNutrient.site].name}`,
        points: 0
      })
    }

    setUsedNutrients([...usedNutrients, currentNutrient.id])

    // Next nutrient after delay
    setTimeout(() => {
      if (timeLeft > 0) {
        spawnNutrient()
      }
    }, 1500)
  }

  if (gameComplete) {
    const isHighScore = score >= 100
    return (
      <div className="game-complete-overlay">
        <motion.div 
          className="game-complete-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="game-icon-large">{isHighScore ? '⚡' : score > 50 ? '🏃' : '💪'}</div>
          <h2>{isHighScore ? 'Speed Demon!' : score > 50 ? 'Good Run!' : 'Keep Practicing!'}</h2>
          <div className="game-stats-final">
            <div className="stat-row">
              <span>Score:</span>
              <span className="stat-value">{score} XP</span>
            </div>
            <div className="stat-row">
              <span>Best Streak:</span>
              <span className="stat-value">{streak} 🔥</span>
            </div>
          </div>
          <div className="game-buttons">
            <button className="game-btn secondary" onClick={onExit}>Exit</button>
            <button className="game-btn primary" onClick={() => window.location.reload()}>Play Again</button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="absorption-race-game">
      {/* Header */}
      <div className="game-header">
        <div className="game-title">
          <span className="game-emoji">⚡</span>
          <span>Absorption Race!</span>
        </div>
        <div className="game-stats">
          <div className="stat-item">
            <Trophy size={16} />
            <span>{score} XP</span>
          </div>
          <div className="stat-item">
            <Clock size={16} />
            <span>{timeLeft}s</span>
          </div>
          {streak > 0 && (
            <div className="stat-item streak">
              <Zap size={16} />
              <span>{streak} 🔥</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="time-bar">
        <div 
          className="time-fill" 
          style={{ width: `${(timeLeft / 60) * 100}%` }}
        />
      </div>

      {/* Game Area */}
      <div className="race-game-area">
        {/* Current Nutrient */}
        <div className="nutrient-display">
          <motion.div
            key={currentNutrient?.id}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="nutrient-card"
          >
            <span className="nutrient-emoji-large">{currentNutrient?.emoji}</span>
            <span className="nutrient-name-large">{currentNutrient?.name}</span>
          </motion.div>
          
          <div className="race-prompt">Where does it go?</div>
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {feedback && (
            <motion.div 
              className={`race-feedback ${feedback.type}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p>{feedback.message}</p>
              {feedback.points > 0 && (
                <span className="points-popup">+{feedback.points}</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Site Buttons */}
        <div className="site-buttons">
          <motion.button
            className="site-btn blood"
            onClick={() => handleSiteSelect('blood')}
            disabled={!!feedback}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="site-emoji">🩸</span>
            <span className="site-name">Blood</span>
            <span className="site-desc">Direct absorption</span>
          </motion.button>
          
          <motion.button
            className="site-btn lymph"
            onClick={() => handleSiteSelect('lymph')}
            disabled={!!feedback}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="site-emoji">💧</span>
            <span className="site-name">Lymph</span>
            <span className="site-desc">Via lacteals first</span>
          </motion.button>
        </div>
      </div>

      {/* Instructions */}
      <div className="race-instructions">
        <p>🏃 <strong>Race mode:</strong> Answer fast for bonus points!</p>
        <p>• Glucose & Amino Acids → Blood 🩸</p>
        <p>• Fatty Acids & Fat Vitamins → Lymph 💧</p>
      </div>
    </div>
  )
}

export default AbsorptionRace
