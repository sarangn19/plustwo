import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, CheckCircle, Star, Mic, BookOpen, HelpCircle, Keyboard, Volume2 } from '../components/Icons'
import { modules } from '../data/digestionModules'

function ModuleView({ user }) {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  
  const module = modules.find(m => m.id === moduleId)
  
  if (!module) return <div>Module not found</div>

  const getModuleProgress = () => {
    const completed = module.levels.filter(l => user.completedLevels.includes(l.id)).length
    return { completed, total: module.levels.length, percent: (completed / module.levels.length) * 100 }
  }

  const isLevelLocked = (index) => {
    if (index === 0) return false
    const prevLevelId = module.levels[index - 1].id
    return !user.completedLevels.includes(prevLevelId)
  }

  const isLevelCompleted = (levelId) => {
    return user.completedLevels.includes(levelId)
  }

  const getLevelIcon = (level) => {
    if (level.type === 'voice') return <Volume2 size={20} />
    if (level.type === 'input') return <Keyboard size={20} />
    if (level.type === 'test') return <Star size={20} />
    return <HelpCircle size={20} />
  }

  const getTypeLabel = (type) => {
    if (type === 'mixed') return 'Mixed Questions'
    if (type === 'test') return 'Module Test'
    return 'Practice'
  }

  const progress = getModuleProgress()

  return (
    <div className="chapter-container">
      {/* Header */}
      <div className="chapter-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <h2>{module.title}</h2>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Module Info */}
      <div className="module-info" style={{ '--module-color': module.color }}>
        <div className="module-icon-large">{module.icon}</div>
        <p className="module-description">Master the concepts through progressive learning</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress.percent}%`, background: module.color }}
          ></div>
        </div>
        <span className="progress-text">
          {progress.completed} / {progress.total} levels completed
        </span>
      </div>

      {/* Levels Path */}
      <div className="lessons-path">
        {module.levels.map((level, index) => {
          const locked = isLevelLocked(index)
          const completed = isLevelCompleted(level.id)
          
          return (
            <div 
              key={level.id}
              className={`lesson-node ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
              style={{ '--lesson-color': module.color }}
              onClick={() => {
                if (!locked) {
                  navigate(`/level/${moduleId}/${level.id}`)
                }
              }}
            >
              <div className="node-circle">
                {locked ? <Lock size={20} /> : 
                 completed ? <CheckCircle size={24} /> : 
                 getLevelIcon(level)}
              </div>
              <div className="node-label">{level.title}</div>
              <div className="node-type">{getTypeLabel(level.type)}</div>
              <div className="node-xp">+{level.xp} XP</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModuleView
