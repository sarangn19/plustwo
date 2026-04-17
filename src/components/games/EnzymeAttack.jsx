import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, XCircle, CheckCircle } from '../Icons'

// Enzyme Attack Game
// Drop correct enzyme on food molecules

const FOOD_TYPES = [
  { id: 'protein', emoji: '🥩', name: 'Protein', enzyme: 'pepsin', color: '#ef4444' },
  { id: 'starch', emoji: '🍞', name: 'Starch', enzyme: 'amylase', color: '#f59e0b' },
  { id: 'fat', emoji: '🧈', name: 'Fat', enzyme: 'lipase', color: '#eab308' }
]

const ENZYMES = [
  { id: 'pepsin', emoji: '🧪', name: 'Pepsin', target: 'protein', color: '#8b5cf6' },
  { id: 'amylase', emoji: '⚡', name: 'Amylase', target: 'starch', color: '#22c55e' },
  { id: 'lipase', emoji: '💧', name: 'Lipase', target: 'fat', color: '#3b82f6' }
]

export function EnzymeAttack({ onComplete, onExit }) {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [currentFood, setCurrentFood] = useState(null)
  const [selectedEnzyme, setSelectedEnzyme] = useState(null)
  const [round, setRound] = useState(1)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const maxRounds = 5

  useEffect(() => {
    spawnNewFood()
  }, [])

  const spawnNewFood = () => {
    const randomFood = FOOD_TYPES[Math.floor(Math.random() * FOOD_TYPES.length)]
    setCurrentFood(randomFood)
    setSelectedEnzyme(null)
    setShowResult(false)
  }

  const handleEnzymeSelect = (enzyme) => {
    if (showResult || gameComplete) return
    setSelectedEnzyme(enzyme)
    
    // Check if correct
    const correct = enzyme.target === currentFood.id
    setIsCorrect(correct)
    setShowResult(true)
    
    if (correct) {
      setScore(s => s + 20)
    } else {
      setLives(l => l - 1)
    }

    // Check game complete or next round
    setTimeout(() => {
      if (round >= maxRounds || (lives <= 1 && !correct)) {
        setGameComplete(true)
        onComplete?.(score + (correct ? 20 : 0), lives > 0)
      } else {
        setRound(r => r + 1)
        spawnNewFood()
      }
    }, 1500)
  }

  if (gameComplete) {
    const allCorrect = score === maxRounds * 20
    return (
      <div className="game-complete-overlay">
        <motion.div 
          className="game-complete-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="game-icon-large">{allCorrect ? '🏆' : lives > 0 ? '👍' : '💪'}</div>
          <h2>{allCorrect ? 'Enzyme Expert!' : lives > 0 ? 'Good Job!' : 'Try Again!'}</h2>
          <div className="game-score">
            <span className="score-value">{score}</span>
            <span className="score-total">/{maxRounds * 20} XP</span>
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
    <div className="enzyme-attack-game">
      {/* Header */}
      <div className="game-header">
        <div className="game-title">
          <span className="game-emoji">🧪</span>
          <span>Enzyme Attack!</span>
        </div>
        <div className="game-stats">
          <div className="stat-item">
            <Trophy size={16} />
            <span>{score} XP</span>
          </div>
          <div className="stat-item lives">
            <span>{'❤️'.repeat(lives)}</span>
          </div>
          <div className="stat-item">
            <span>Round {round}/{maxRounds}</span>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="game-area">
        {/* Food Target */}
        <div className="food-target-zone">
          <motion.div 
            className="food-target"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="food-emoji-large">{currentFood?.emoji}</span>
            <span className="food-name">{currentFood?.name}</span>
          </motion.div>
          
          <div className="target-label">Drop enzyme here!</div>
        </div>

        {/* Result Overlay */}
        <AnimatePresence>
          {showResult && (
            <motion.div 
              className={`result-overlay ${isCorrect ? 'correct' : 'wrong'}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              {isCorrect ? (
                <>
                  <CheckCircle size={48} />
                  <p>Correct! {selectedEnzyme.name} breaks down {currentFood.name}!</p>
                </>
              ) : (
                <>
                  <XCircle size={48} />
                  <p>Wrong! {currentFood.name} needs {ENZYMES.find(e => e.target === currentFood.id)?.name}!</p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enzyme Selector */}
      <div className="enzyme-selector">
        <p className="selector-hint">Choose the right enzyme:</p>
        <div className="enzyme-buttons">
          {ENZYMES.map(enzyme => (
            <motion.button
              key={enzyme.id}
              className={`enzyme-btn ${selectedEnzyme?.id === enzyme.id ? 'selected' : ''}`}
              style={{ '--enzyme-color': enzyme.color }}
              onClick={() => handleEnzymeSelect(enzyme)}
              disabled={showResult}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="enzyme-emoji">{enzyme.emoji}</span>
              <span className="enzyme-name">{enzyme.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="game-instructions">
        <p>💡 <strong>How to play:</strong> Match the enzyme to the food it digests!</p>
        <p>• Pepsin → Proteins | Amylase → Starch | Lipase → Fats</p>
      </div>
    </div>
  )
}

export default EnzymeAttack
