import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Play, Pause } from '../Icons'

// Peristalsis Runner Game
// Time muscle contractions to push food bolus down

export function PeristalsisRunner({ onComplete, onExit }) {
  const [bolusPosition, setBolusPosition] = useState(0)
  const [muscleContractions, setMuscleContractions] = useState([])
  const [score, setScore] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)
  const [lives, setLives] = useState(3)
  const [wavePhase, setWavePhase] = useState(0)
  const [feedback, setFeedback] = useState(null)

  const esophagusLength = 100 // percentage
  const segments = 5
  
  // Auto-advance wave animation
  useEffect(() => {
    if (!isRunning || gameComplete) return
    
    const interval = setInterval(() => {
      setWavePhase(p => (p + 1) % 360)
    }, 50)
    
    return () => clearInterval(interval)
  }, [isRunning, gameComplete])

  const handleContract = () => {
    if (!isRunning || gameComplete) {
      setIsRunning(true)
      return
    }

    // Calculate which segment the bolus is in
    const currentSegment = Math.floor((bolusPosition / 100) * segments)
    const segmentStart = (currentSegment / segments) * 100
    const segmentEnd = ((currentSegment + 1) / segments) * 100
    
    // Check if contraction timing is good
    const isInZone = bolusPosition >= segmentStart && bolusPosition <= segmentEnd
    const isPerfect = Math.abs(bolusPosition - (segmentStart + segmentEnd) / 2) < 5

    if (isInZone) {
      // Push bolus forward
      const pushAmount = isPerfect ? 25 : 15
      const newPosition = Math.min(bolusPosition + pushAmount, 100)
      
      setBolusPosition(newPosition)
      setScore(s => s + (isPerfect ? 25 : 15))
      
      // Add muscle contraction visual
      setMuscleContractions(prev => [...prev, { id: Date.now(), segment: currentSegment }])
      
      setFeedback({
        type: isPerfect ? 'perfect' : 'good',
        message: isPerfect ? '✨ Perfect contraction!' : '✓ Good push!',
        points: isPerfect ? 25 : 15
      })

      // Check win condition
      if (newPosition >= 100) {
        setGameComplete(true)
        setIsRunning(false)
        onComplete?.(score + (isPerfect ? 25 : 15), lives > 0)
      }
    } else {
      // Bad timing
      setLives(l => l - 1)
      setFeedback({
        type: 'miss',
        message: '✗ Missed! Wait for the bolus',
        points: 0
      })
      
      if (lives <= 1) {
        setGameComplete(true)
        setIsRunning(false)
      }
    }

    // Clear feedback
    setTimeout(() => setFeedback(null), 1000)
  }

  if (gameComplete) {
    const success = bolusPosition >= 100
    return (
      <div className="game-complete-overlay">
        <motion.div 
          className="game-complete-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="game-icon-large">{success ? '🎉' : lives > 0 ? '👍' : '💪'}</div>
          <h2>{success ? 'Peristalsis Pro!' : lives > 0 ? 'Good Try!' : 'Practice Makes Perfect!'}</h2>
          <div className="game-score">
            <span className="score-value">{score}</span>
            <span className="score-total">XP</span>
          </div>
          <p className="game-fact">💡 Peristalsis moves food even against gravity!</p>
          <div className="game-buttons">
            <button className="game-btn secondary" onClick={onExit}>Exit</button>
            <button className="game-btn primary" onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="peristalsis-runner-game">
      {/* Header */}
      <div className="game-header">
        <div className="game-title">
          <span className="game-emoji">🚀</span>
          <span>Peristalsis Runner</span>
        </div>
        <div className="game-stats">
          <div className="stat-item">
            <Trophy size={16} />
            <span>{score} XP</span>
          </div>
          <div className="stat-item lives">
            <span>{'❤️'.repeat(lives)}</span>
          </div>
        </div>
      </div>

      {/* Esophagus Track */}
      <div className="esophagus-track">
        {/* Segments */}
        <div className="segments">
          {Array.from({ length: segments }).map((_, i) => (
            <div 
              key={i} 
              className="segment"
              style={{
                background: muscleContractions.some(c => c.segment === i) 
                  ? 'linear-gradient(135deg, #f59e0b, #ef4444)' 
                  : 'linear-gradient(135deg, #fbbf24, #f59e0b)'
              }}
            >
              {/* Wave animation */}
              <motion.div 
                className="wave-indicator"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            </div>
          ))}
        </div>

        {/* Bolus */}
        <motion.div 
          className="bolus"
          animate={{ left: `${bolusPosition}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <span className="bolus-emoji">🍞</span>
        </motion.div>

        {/* Start and End markers */}
        <div className="marker start">👄</div>
        <div className="marker end">🧪</div>
      </div>

      {/* Progress */}
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${bolusPosition}%` }}
        />
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div 
            className={`contraction-feedback ${feedback.type}`}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p>{feedback.message}</p>
            {feedback.points > 0 && (
              <span className="points-bubble">+{feedback.points}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Button */}
      <div className="control-area">
        <motion.button
          className="contract-btn"
          onClick={handleContract}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? (
            <>
              <span className="btn-emoji">💪</span>
              <span className="btn-text">Contract Muscle!</span>
            </>
          ) : (
            <>
              <Play size={24} />
              <span className="btn-text">Start Running</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Instructions */}
      <div className="runner-instructions">
        <p>🎯 <strong>How to play:</strong></p>
        <p>1. Watch the food bolus (🍞) move down</p>
        <p>2. Click "Contract Muscle" when it's in the orange zone</p>
        <p>3. Perfect timing = bigger push!</p>
      </div>
    </div>
  )
}

export default PeristalsisRunner
