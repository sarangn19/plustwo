import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, HomeIcon } from '../components/Icons'
import { getPlusOneChapters, getPlusTwoChapters } from '../data/biologyChapters'

const subjectInfo = {
  biology: {
    name: 'Biology',
    icon: '🧬',
    color: '#22c55e',
    description: 'Complete NEET preparation - Plus One & Plus Two'
  },
  chemistry: {
    name: 'Chemistry',
    icon: '⚗️',
    color: '#3b82f6',
    comingSoon: true
  },
  physics: {
    name: 'Physics',
    icon: '⚡',
    color: '#f59e0b',
    comingSoon: true
  }
}

// Only this chapter is active for now
const ACTIVE_CHAPTER_ID = 'p1-ch16' // Digestion and Absorption

function SubjectView({ user }) {
  const { subjectId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('plus-one')
  
  const subject = subjectInfo[subjectId]
  
  if (!subject) return <div>Subject not found</div>
  
  if (subject.comingSoon) {
    return (
      <div className="subject-view">
        <div className="subject-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h2>{subject.name}</h2>
          <div style={{ width: 40 }}></div>
        </div>
        <div className="coming-soon-view">
          <span className="cs-icon">{subject.icon}</span>
          <h1>Coming Soon!</h1>
          <p>We're preparing amazing {subject.name} content for you.</p>
          <button className="back-subject-btn" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    )
  }

  const plusOneChapters = getPlusOneChapters()
  const plusTwoChapters = getPlusTwoChapters()
  const chapters = activeTab === 'plus-one' ? plusOneChapters : plusTwoChapters

  return (
    <div className="subject-view">
      {/* Header */}
      <div className="subject-header">
        <div className="header-left" style={{ display: 'flex', gap: '8px' }}>
          <button className="back-btn" onClick={() => navigate(-1)} title="Back">
            <ArrowLeft size={24} />
          </button>
          <button className="home-btn" onClick={() => navigate('/')} title="Home">
            <HomeIcon size={22} />
          </button>
        </div>
        <h2>{subject.name}</h2>
        <div style={{ width: 40 }}></div>
      </div>

      {/* Subject Hero */}
      <div className="subject-hero" style={{ '--subject-color': subject.color }}>
        <div className="subject-hero-content">
          <span className="subject-big-icon">{subject.icon}</span>
          <h1>{subject.name}</h1>
          <p>{subject.description}</p>
        </div>
      </div>

      {/* Class Tabs */}
      <div className="class-tabs-subject">
        <button 
          className={activeTab === 'plus-one' ? 'active' : ''}
          onClick={() => setActiveTab('plus-one')}
        >
          Plus One (11)
        </button>
        <button 
          className={activeTab === 'plus-two' ? 'active' : ''}
          onClick={() => setActiveTab('plus-two')}
        >
          Plus Two (12)
        </button>
      </div>

      {/* Chapters List */}
      <div className="chapters-section">
        <h2>
          {activeTab === 'plus-one' ? 'Plus One Chapters' : 'Plus Two Chapters'}
          <span className="chapter-count-badge">({chapters.length})</span>
        </h2>
        <div className="chapters-list">
          {chapters.map((chapter, index) => {
            const isActive = chapter.id === ACTIVE_CHAPTER_ID
            
            return (
              <div 
                key={chapter.id}
                className={`chapter-item ${!isActive ? 'locked' : ''}`}
                onClick={() => isActive && navigate(`/chapter/${chapter.id}/modules`)}
              >
                <div className="chapter-number">{index + 1}</div>
                <div className="chapter-info">
                  <div className="chapter-header-row">
                    <h3>{chapter.title}</h3>
                    {!isActive && <Lock size={16} />}
                  </div>
                  <p className="chapter-topics">{chapter.topics.slice(0, 3).join(', ')}...</p>
                </div>
                {!isActive && <span className="soon-chip">Soon</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SubjectView
