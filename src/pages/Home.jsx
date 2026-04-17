import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, HomeIcon, Search } from '../components/Icons'

const ACTIVE_CHAPTER_ID = 'p1-ch16'

function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="home-new-design">
      {/* Header with Profile */}
      <div className="home-header-new">
        <div className="profile-section">
          <div className="profile-avatar"></div>
          <div className="profile-text">
            <span className="hello-text">Hello</span>
            <span className="username-text">Username</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="home-search-bar">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Center Mascot */}
      <motion.div 
        className="home-mascot-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="cat-mascot">
          <svg viewBox="0 0 100 100" width="120" height="120">
            {/* Cat body */}
            <ellipse cx="50" cy="65" rx="25" ry="20" fill="#1a1a2e"/>
            {/* Cat head */}
            <circle cx="50" cy="40" r="22" fill="#1a1a2e"/>
            {/* Ears */}
            <path d="M32 28 L28 15 L40 25 Z" fill="#1a1a2e"/>
            <path d="M68 28 L72 15 L60 25 Z" fill="#1a1a2e"/>
            {/* Inner ears */}
            <path d="M35 26 L32 18 L38 24 Z" fill="#ff6b9d"/>
            <path d="M65 26 L68 18 L62 24 Z" fill="#ff6b9d"/>
            {/* Eyes */}
            <ellipse cx="42" cy="38" rx="6" ry="7" fill="white"/>
            <ellipse cx="58" cy="38" rx="6" ry="7" fill="white"/>
            <circle cx="42" cy="38" r="3" fill="#1a1a2e"/>
            <circle cx="58" cy="38" r="3" fill="#1a1a2e"/>
            {/* Eye shine */}
            <circle cx="44" cy="36" r="1.5" fill="white"/>
            <circle cx="60" cy="36" r="1.5" fill="white"/>
            {/* Nose */}
            <ellipse cx="50" cy="46" rx="2" ry="1.5" fill="#ff6b9d"/>
            {/* Mouth */}
            <path d="M46 50 Q50 53 54 50" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            {/* Whiskers */}
            <line x1="25" y1="44" x2="35" y2="46" stroke="white" strokeWidth="1" opacity="0.3"/>
            <line x1="25" y1="48" x2="35" y2="48" stroke="white" strokeWidth="1" opacity="0.3"/>
            <line x1="75" y1="44" x2="65" y2="46" stroke="white" strokeWidth="1" opacity="0.3"/>
            <line x1="75" y1="48" x2="65" y2="48" stroke="white" strokeWidth="1" opacity="0.3"/>
            {/* Tail */}
            <path d="M75 65 Q85 55 80 45" stroke="#1a1a2e" strokeWidth="6" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Subject Card - Biology */}
      <motion.div 
        className="subject-card-new"
        onClick={() => navigate('/subject/biology')}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="subject-card-bg">
          {/* Animated scientists/people background */}
          <div className="scientists-bg">
            <div className="scientist s1">👨‍🔬</div>
            <div className="scientist s2">👩‍🔬</div>
            <div className="scientist s3">👨‍🔬</div>
            <div className="dna-bg">🧬</div>
            <div className="cell-bg">🔬</div>
          </div>
          <div className="subject-overlay"></div>
          <div className="subject-content">
            <span className="gif-badge">GIF</span>
            <h2>Biology</h2>
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="bottom-nav-new">
        <button className="nav-item active">
          <HomeIcon size={22} />
          <span>Home</span>
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
