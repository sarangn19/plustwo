import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Play, HomeIcon } from '../components/Icons'
import { modules } from '../data/digestionModules'
import Mascot, { TalkingMascot } from '../components/Mascot'
import { DigestionProcess, EnzymeAction } from '../components/DigestionAnimation'

function Level({ user }) {
  const { moduleId, levelId } = useParams()
  const navigate = useNavigate()
  
  const module = modules.find(m => m.id === moduleId)
  const level = module?.levels.find(l => l.id === levelId)
  
  if (!level) return <div>Level not found</div>

  const isCompleted = user.completedLevels.includes(levelId)

  // Show educational animation for digestion-related modules
  const showEducationalAnimation = () => {
    if (moduleId === 'module-1') {
      return <DigestionProcess />
    }
    if (moduleId === 'module-2') {
      return (
        <EnzymeAction 
          enzyme="Salivary Amylase"
          substrate="🍞"
          product="🍬 + 🍬"
        />
      )
    }
    return null
  }

  const getMascotMessage = () => {
    if (isCompleted) return "Great job completing this! Want to practice more?"
    return `Let's learn about ${level.title}! Ready?`
  }

  const startQuestions = () => {
    const firstQuestion = level.questions[0]
    if (firstQuestion.type === 'voice') {
      navigate(`/speak/${moduleId}/${levelId}/0`)
    } else {
      navigate(`/quiz/${moduleId}/${levelId}/0`)
    }
  }

  return (
    <div className="level-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
          <button className="close-btn" onClick={() => navigate(-1)} title="Back">
            <ArrowLeft size={24} />
          </button>
          <button className="home-btn" onClick={() => navigate('/')} title="Home">
            <HomeIcon size={22} />
          </button>
        </div>
        <span className="question-type">{level.title.toUpperCase()}</span>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Animated Mascot */}
      <motion.div 
        className="level-mascot"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <TalkingMascot 
          message={getMascotMessage()} 
          mood={isCompleted ? 'celebrating' : 'excited'}
        />
      </motion.div>

      {/* Theory Section */}
      {level.theory && (
        <motion.div 
          className="theory-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="theory-card concept">
            <div className="theory-icon">📚</div>
            <div className="theory-content">
              <h3>Core Concept</h3>
              <p>{level.theory.concept}</p>
            </div>
          </div>
          
          {level.theory.deepConcept && (
            <div className="theory-card deep">
              <div className="theory-icon">🔬</div>
              <div className="theory-content">
                <h3>Deep Understanding</h3>
                <p>{level.theory.deepConcept}</p>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Educational Animation */}
      {showEducationalAnimation()}

      {/* Question Preview */}
      <div className="question-preview">
        <h3>{level.questions.length} Questions</h3>
        <div className="question-types">
          {level.questions.map((q, i) => (
            <span key={i} className={`type-tag ${q.difficulty}`}>
              {q.type === 'mcq' ? 'MCQ' : q.type === 'input' ? 'Input' : 'Voice'}
            </span>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <motion.div 
        className="start-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {isCompleted ? (
          <motion.div 
            className="completed-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            ✓ Completed
          </motion.div>
        ) : null}
        <motion.button 
          className="start-btn" 
          onClick={startQuestions}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play size={24} />
          <span>{isCompleted ? 'Practice Again' : 'Start Learning'}</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Level
