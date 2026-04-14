import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Play } from '../components/Icons'
import { modules } from '../data/digestionModules'

function Level({ user }) {
  const { moduleId, levelId } = useParams()
  const navigate = useNavigate()
  
  const module = modules.find(m => m.id === moduleId)
  const level = module?.levels.find(l => l.id === levelId)
  
  if (!level) return <div>Level not found</div>

  const isCompleted = user.completedLevels.includes(levelId)

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
        <button className="close-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>
        <span className="question-type">{level.title.toUpperCase()}</span>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Theory Section */}
      {level.theory && (
        <div className="theory-section">
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
        </div>
      )}

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
      <div className="start-section">
        {isCompleted ? (
          <div className="completed-badge">✓ Completed</div>
        ) : null}
        <button className="start-btn" onClick={startQuestions}>
          <Play size={24} />
          <span>{isCompleted ? 'Practice Again' : 'Start Learning'}</span>
        </button>
      </div>
    </div>
  )
}

export default Level
