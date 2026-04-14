import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, CheckCircle } from '../components/Icons'
import { modules } from '../data/digestionModules'
import { getChapterById } from '../data/biologyChapters'

function ChapterModules({ user }) {
  const { chapterId } = useParams()
  const navigate = useNavigate()
  
  const chapter = getChapterById(chapterId)
  
  if (!chapter) return <div className="chapter-modules"><div className="error">Chapter not found</div></div>

  const isModuleLocked = (index) => {
    if (index === 0) return false
    // Module is locked if previous module's first level not completed
    const prevModule = modules[index - 1]
    return !user.completedLevels.includes(prevModule.levels[0].id)
  }

  const isModuleCompleted = (module) => {
    return module.levels.every(l => user.completedLevels.includes(l.id))
  }

  return (
    <div className="chapter-modules">
      {/* Header */}
      <div className="chapter-modules-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <div className="header-info">
          <span className="chapter-class">{chapter.class}</span>
          <h2>{chapter.title}</h2>
        </div>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Chapter Info */}
      <div className="chapter-intro">
        <p>{chapter.description}</p>
        <div className="topics-tags">
          {chapter.topics.map((topic, i) => (
            <span key={i} className="topic-pill">{topic}</span>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="modules-section">
        <h3>Learning Modules</h3>
        <div className="modules-list">
          {modules.map((module, index) => {
            const locked = isModuleLocked(index)
            const completed = isModuleCompleted(module)
            const progress = module.levels.filter(l => user.completedLevels.includes(l.id)).length
            
            return (
              <div 
                key={module.id}
                className={`module-card ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
                style={{ '--module-color': module.color }}
                onClick={() => !locked && navigate(`/module/${module.id}`)}
              >
                <div className="module-icon-wrap">
                  <span className="module-emoji">{module.icon}</span>
                  {locked && <Lock size={16} className="lock-icon" />}
                  {completed && <CheckCircle size={16} className="complete-icon" />}
                </div>
                <div className="module-details">
                  <h4>{module.title}</h4>
                  <span className="module-meta">{module.levels.length} levels • {progress}/{module.levels.length} done</span>
                  <div className="module-progress-bar">
                    <div className="progress-fill" style={{ width: `${(progress/module.levels.length)*100}%` }}></div>
                  </div>
                </div>
                <span className="module-arrow">→</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ChapterModules
