import { useNavigate } from 'react-router-dom'
import { BookOpen, GraduationCap, HomeIcon } from '../components/Icons'

const subjects = [
  { id: 'physics', name: 'Physics', icon: '⚡', color: '#f59e0b', comingSoon: true },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: '#3b82f6', comingSoon: true },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#22c55e', comingSoon: false }
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-subjects">
      {/* Header */}
      <div className="subject-header-bar">
        <div className="brand">
          <span className="brand-icon">📚</span>
          <span className="brand-text">PlusTwoPrep</span>
        </div>
      </div>

      {/* Welcome */}
      <div className="subject-hero-section">
        <h1>Choose Your Subject</h1>
        <p>Master Physics, Chemistry & Biology for NEET</p>
      </div>

      {/* Subject Cards */}
      <div className="subject-grid">
        {subjects.map(subject => (
          <div
            key={subject.id}
            className={`subject-card-large ${subject.comingSoon ? 'disabled' : ''}`}
            style={{ '--subject-color': subject.color }}
            onClick={() => !subject.comingSoon && navigate(`/subject/${subject.id}`)}
          >
            <span className="subject-emoji">{subject.icon}</span>
            <h2>{subject.name}</h2>
            {subject.comingSoon && <span className="coming-soon-tag">Coming Soon</span>}
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav-new">
        <button className="nav-item active">
          <HomeIcon size={22} />
          <span>Learn</span>
        </button>
        <button className="nav-item" onClick={() => navigate('/practice')}>
          <BookOpen size={22} />
          <span>Practice</span>
        </button>
        <button className="nav-item">
          <GraduationCap size={22} />
          <span>AI Tutor</span>
        </button>
      </div>
    </div>
  )
}

export default Home
