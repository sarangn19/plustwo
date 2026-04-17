import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, HomeIcon, Trophy, Flame, Star } from '../components/Icons'
import { chapterInfo, gamifiedLevels, allBadges, chapterRewards } from '../data/gamifiedLevels'
import { EnzymeAttack, AbsorptionRace, PeristalsisRunner } from '../components/games'

function ChapterView({ user, setUser }) {
  const navigate = useNavigate()
  const { levelId, nodeId } = useParams()
  
  // State
  const [currentLevel, setCurrentLevel] = useState(null)
  const [currentNode, setCurrentNode] = useState(null)
  const [showGame, setShowGame] = useState(false)
  const [gameType, setGameType] = useState(null)
  const [completedNodes, setCompletedNodes] = useState([])
  const [userXP, setUserXP] = useState(user?.xp || 0)
  const [earnedBadges, setEarnedBadges] = useState([])
  const [showCompletion, setShowCompletion] = useState(false)
  const [aiSuggestions, setAiSuggestions] = useState([])
  
  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('chapterProgress')
    if (saved) {
      const progress = JSON.parse(saved)
      setCompletedNodes(progress.completedNodes || [])
      setEarnedBadges(progress.badges || [])
      setUserXP(progress.xp || 0)
    }
  }, [])
  
  // Save progress
  useEffect(() => {
    localStorage.setItem('chapterProgress', JSON.stringify({
      completedNodes,
      badges: earnedBadges,
      xp: userXP
    }))
  }, [completedNodes, earnedBadges, userXP])
  
  // Check if level is unlocked
  const isLevelUnlocked = (levelIndex) => {
    if (levelIndex === 0) return true
    const prevLevel = gamifiedLevels[levelIndex - 1]
    return prevLevel.nodes.every(node => completedNodes.includes(node.id))
  }
  
  // Check if level is completed
  const isLevelCompleted = (level) => {
    return level.nodes.every(node => completedNodes.includes(node.id))
  }
  
  // Get next available level
  const getNextAvailableLevel = () => {
    for (let i = 0; i < gamifiedLevels.length; i++) {
      if (isLevelUnlocked(i) && !isLevelCompleted(gamifiedLevels[i])) {
        return i
      }
    }
    return -1
  }
  
  // Start a level
  const startLevel = (level) => {
    setCurrentLevel(level)
    // Find first uncompleted node
    const nextNode = level.nodes.find(n => !completedNodes.includes(n.id))
    if (nextNode) {
      startNode(nextNode)
    } else {
      // All nodes completed, show level complete
      completeLevel(level)
    }
  }
  
  // Start a specific node
  const startNode = (node) => {
    setCurrentNode(node)
    
    // If it's a game node, show the game
    if (node.type === 'game' || node.gameType) {
      setGameType(node.gameType)
      setShowGame(true)
    }
  }
  
  // Complete a node
  const completeNode = (node, score = 0) => {
    if (!completedNodes.includes(node.id)) {
      setCompletedNodes([...completedNodes, node.id])
      setUserXP(prev => prev + (node.xp || 10) + score)
    }
    
    // Check if level is complete
    if (currentLevel && currentLevel.nodes.every(n => 
      n.id === node.id || completedNodes.includes(n.id)
    )) {
      completeLevel(currentLevel)
    } else {
      // Move to next node
      const currentIndex = currentLevel.nodes.findIndex(n => n.id === node.id)
      const nextNode = currentLevel.nodes[currentIndex + 1]
      if (nextNode) {
        setTimeout(() => startNode(nextNode), 500)
      }
    }
    
    setShowGame(false)
    setGameType(null)
  }
  
  // Complete a level
  const completeLevel = (level) => {
    // Award badge if not already earned
    if (level.badge && !earnedBadges.includes(level.badge.id)) {
      setEarnedBadges([...earnedBadges, level.badge.id])
    }
    
    // Check if all levels complete
    if (gamifiedLevels.every(l => isLevelCompleted(l))) {
      setShowCompletion(true)
    }
    
    // Generate AI suggestions
    generateAISuggestions()
    
    setCurrentLevel(null)
    setCurrentNode(null)
  }
  
  // Generate AI suggestions based on weak areas
  const generateAISuggestions = () => {
    // Mock weak areas detection
    const weakAreas = []
    if (Math.random() > 0.7) weakAreas.push('enzymes')
    if (Math.random() > 0.7) weakAreas.push('absorption')
    
    const suggestions = []
    if (weakAreas.includes('enzymes')) {
      suggestions.push({
        type: 'revision',
        message: '🔄 Revise: Enzyme functions',
        action: 'Replay Stomach Level',
        levelId: 'level-3-stomach'
      })
    }
    if (weakAreas.includes('absorption')) {
      suggestions.push({
        type: 'practice',
        message: '🎯 Practice: Absorption sites',
        action: 'Try Absorption Race',
        levelId: 'level-5-absorption'
      })
    }
    
    setAiSuggestions(suggestions)
  }
  
  // Handle game completion
  const handleGameComplete = (score, success) => {
    if (success && currentNode) {
      completeNode(currentNode, score)
    }
  }
  
  // Calculate chapter progress
  const totalNodes = gamifiedLevels.reduce((acc, level) => acc + level.nodes.length, 0)
  const progress = Math.round((completedNodes.length / totalNodes) * 100)
  
  // Render game component
  const renderGame = () => {
    switch (gameType) {
      case 'enzyme-attack':
        return <EnzymeAttack onComplete={handleGameComplete} onExit={() => setShowGame(false)} />
      case 'absorption-race':
        return <AbsorptionRace onComplete={handleGameComplete} onExit={() => setShowGame(false)} />
      case 'peristalsis-game':
        return <PeristalsisRunner onComplete={handleGameComplete} onExit={() => setShowGame(false)} />
      default:
        return null
    }
  }
  
  // Show completion screen
  if (showCompletion) {
    return (
      <div className="chapter-complete-overlay">
        <motion.div 
          className="chapter-complete-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="complete-trophy">🏆</div>
          <h1>Chapter Complete!</h1>
          <p>You mastered Digestion & Absorption</p>
          
          <div className="complete-stats">
            <div className="stat-box">
              <Trophy size={24} />
              <span>{userXP} XP</span>
            </div>
            <div className="stat-box">
              <Star size={24} />
              <span>{earnedBadges.length} Badges</span>
            </div>
          </div>
          
          <div className="unlocked-rewards">
            <h3>🎉 Unlocked:</h3>
            {chapterRewards.complete.map((reward, i) => (
              <div key={i} className="reward-item">
                <span>{reward.icon}</span>
                <span>{reward.name}</span>
              </div>
            ))}
          </div>
          
          <button className="continue-btn" onClick={() => navigate('/')}>
            Continue Learning →
          </button>
        </motion.div>
      </div>
    )
  }
  
  // Show game
  if (showGame && gameType) {
    return (
      <div className="game-fullscreen">
        {renderGame()}
      </div>
    )
  }
  
  // Show active level/node
  if (currentNode) {
    return (
      <div className="node-active-container">
        {/* Header */}
        <div className="node-header">
          <button className="back-btn" onClick={() => setCurrentNode(null)}>
            <ArrowLeft size={24} />
          </button>
          <div className="node-progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${((currentLevel.nodes.findIndex(n => n.id === currentNode.id) + 1) / currentLevel.nodes.length) * 100}%` 
              }}
            />
          </div>
          <div className="node-xp">+{currentNode.xp || 10} XP</div>
        </div>
        
        {/* Node Content */}
        <div className="node-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="node-card"
          >
            <div className={`node-type-badge ${currentNode.type}`}>
              {currentNode.type === 'learn' && '📖 Learn'}
              {currentNode.type === 'match' && '🧠 Match'}
              {currentNode.type === 'mcq' && '⚡ Quick Check'}
              {currentNode.type === 'drag' && '🎯 Drag & Drop'}
              {currentNode.type === 'challenge' && '🔥 Challenge'}
              {currentNode.type === 'game' && '🎮 Game'}
            </div>
            
            <h2>{currentNode.title}</h2>
            
            {currentNode.type === 'learn' && (
              <div className="learn-content">
                <p>{currentNode.content}</p>
                {currentNode.duration && (
                  <span className="duration">⏱️ {currentNode.duration}</span>
                )}
                <button 
                  className="complete-btn"
                  onClick={() => completeNode(currentNode)}
                >
                  Got it! ✓
                </button>
              </div>
            )}
            
            {currentNode.type === 'mcq' && (
              <MCQComponent 
                question={currentNode.question}
                options={currentNode.options}
                onComplete={(correct) => completeNode(currentNode, correct ? 5 : 0)}
              />
            )}
            
            {currentNode.type === 'match' && (
              <MatchComponent
                pairs={currentNode.pairs}
                onComplete={() => completeNode(currentNode)}
              />
            )}
            
            {currentNode.type === 'challenge' && (
              <ChallengeComponent
                question={currentNode.question}
                acceptableAnswers={currentNode.acceptableAnswers}
                onComplete={() => completeNode(currentNode)}
              />
            )}
          </motion.div>
        </div>
      </div>
    )
  }
  
  // Main Chapter Path View
  return (
    <div className="level-path-container">
      {/* Header */}
      <div className="chapter-header-gamified">
        <button 
          className="home-btn-absolute"
          onClick={() => navigate('/')}
          style={{ position: 'absolute', top: '20px', left: '20px' }}
        >
          <HomeIcon size={20} />
        </button>
        
        <div className="chapter-icon-large">{chapterInfo.icon}</div>
        <h1>{chapterInfo.title}</h1>
        <p>{chapterInfo.description}</p>
      </div>
      
      {/* Progress Stats */}
      <div className="chapter-progress">
        <div className="progress-stat">
          <Flame size={18} />
          <span>{userXP} XP</span>
        </div>
        <div className="progress-stat">
          <Trophy size={18} />
          <span>{earnedBadges.length}/{allBadges.length} Badges</span>
        </div>
        <div className="progress-stat">
          <span>{progress}% Complete</span>
        </div>
      </div>
      
      {/* AI Suggestions */}
      {aiSuggestions.length > 0 && (
        <motion.div 
          className="ai-suggestions"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h4>🤖 AI Suggestions</h4>
          {aiSuggestions.map((suggestion, i) => (
            <div key={i} className="suggestion-card" onClick={() => startLevel(gamifiedLevels.find(l => l.id === suggestion.levelId))}>
              <p>{suggestion.message}</p>
              <span className="suggestion-action">{suggestion.action} →</span>
            </div>
          ))}
        </motion.div>
      )}
      
      {/* Level Path */}
      <div className="level-path">
        {gamifiedLevels.map((level, index) => {
          const unlocked = isLevelUnlocked(index)
          const completed = isLevelCompleted(level)
          const isBoss = level.isBoss
          
          return (
            <motion.div
              key={level.id}
              className={`level-node ${!unlocked ? 'locked' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={`level-circle ${completed ? 'completed' : unlocked ? 'available' : 'locked'} ${isBoss ? 'boss' : ''}`}
                onClick={() => unlocked && startLevel(level)}
              >
                {isBoss ? '💀' : level.emoji}
                
                {!unlocked && (
                  <div className="locked-indicator">🔒</div>
                )}
                
                {completed && (
                  <div className="completed-check">✓</div>
                )}
              </div>
              
              <div className="level-info">
                <div className="level-name">{level.name}</div>
                <div className="level-desc">{level.description}</div>
                <div className="level-xp">+{level.xpReward} XP</div>
                
                {completed && level.badge && (
                  <div className="level-badge">{level.badge.name}</div>
                )}
              </div>
              
              {unlocked && !completed && (
                <button className="level-start-btn" onClick={() => startLevel(level)}>
                  START
                </button>
              )}
            </motion.div>
          )
        })}
      </div>
      
      {/* Bottom Navigation */}
      <div className="bottom-nav-new" style={{ background: 'white' }}>
        <button className="nav-item" onClick={() => navigate('/')}>
          <HomeIcon size={22} />
          <span>Home</span>
        </button>
        <button className="nav-item" onClick={() => navigate('/practice')}>
          <Trophy size={22} />
          <span>Practice</span>
        </button>
        <button className="nav-item" onClick={() => navigate('/badges')}>
          <Star size={22} />
          <span>Badges</span>
        </button>
      </div>
    </div>
  )
}

// MCQ Component
function MCQComponent({ question, options, onComplete }) {
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  
  const handleSelect = (option) => {
    if (showResult) return
    setSelected(option)
    setShowResult(true)
    
    setTimeout(() => {
      onComplete(option.correct)
    }, 1500)
  }
  
  return (
    <div className="mcq-container">
      <p className="question-text">{question}</p>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option.id}
            className={`option-btn ${selected?.id === option.id ? 'selected' : ''} ${showResult && option.correct ? 'correct' : ''} ${showResult && selected?.id === option.id && !option.correct ? 'wrong' : ''}`}
            onClick={() => handleSelect(option)}
            disabled={showResult}
          >
            <span className="option-letter">{option.id.toUpperCase()}</span>
            <span className="option-text">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Match Component
function MatchComponent({ pairs, onComplete }) {
  const [matched, setMatched] = useState([])
  const [selected, setSelected] = useState(null)
  
  const handleSelect = (item, type) => {
    if (!selected) {
      setSelected({ item, type })
    } else {
      // Check match
      if (selected.type !== type) {
        const pair = pairs.find(p => 
          (p.item === selected.item && p.match === item) ||
          (p.match === selected.item && p.item === item)
        )
        
        if (pair && !matched.includes(pair.item)) {
          setMatched([...matched, pair.item])
          
          if (matched.length + 1 === pairs.length) {
            setTimeout(onComplete, 500)
          }
        }
      }
      setSelected(null)
    }
  }
  
  return (
    <div className="match-container">
      <p className="match-instruction">Tap matching pairs!</p>
      <div className="match-grid">
        {pairs.map((pair) => (
          <div key={pair.item} className="match-row">
            <button 
              className={`match-item ${matched.includes(pair.item) ? 'matched' : ''} ${selected?.item === pair.item ? 'selected' : ''}`}
              onClick={() => handleSelect(pair.item, 'item')}
              disabled={matched.includes(pair.item)}
            >
              {pair.item}
            </button>
            <button 
              className={`match-item ${matched.includes(pair.item) ? 'matched' : ''} ${selected?.item === pair.match ? 'selected' : ''}`}
              onClick={() => handleSelect(pair.match, 'match')}
              disabled={matched.includes(pair.item)}
            >
              {pair.match}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Challenge Component
function ChallengeComponent({ question, acceptableAnswers, onComplete }) {
  const [answer, setAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  
  const handleSubmit = () => {
    const normalized = answer.toLowerCase().trim()
    const correct = acceptableAnswers.some(ans => normalized.includes(ans.toLowerCase()))
    
    setShowResult(true)
    
    setTimeout(() => {
      onComplete()
    }, 1500)
  }
  
  return (
    <div className="challenge-container">
      <p className="challenge-question">{question}</p>
      <input
        type="text"
        className="challenge-input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer..."
      />
      <button 
        className="submit-btn"
        onClick={handleSubmit}
        disabled={!answer.trim()}
      >
        Submit Answer
      </button>
    </div>
  )
}

export default ChapterView
