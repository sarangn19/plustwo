import { motion, AnimatePresence } from 'framer-motion'

function Mascot({ mood = 'happy', size = 120 }) {
  const getEyes = () => {
    if (mood === 'listening') {
      return (
        <>
          <ellipse cx="35" cy="40" rx="8" ry="10" fill="white" />
          <ellipse cx="65" cy="40" rx="8" ry="10" fill="white" />
          <circle cx="35" cy="40" r="5" fill="#1f1f1f" />
          <circle cx="65" cy="40" r="5" fill="#1f1f1f" />
        </>
      )
    }
    if (mood === 'sad') {
      return (
        <>
          <ellipse cx="35" cy="40" rx="10" ry="12" fill="white" />
          <ellipse cx="65" cy="40" rx="10" ry="12" fill="white" />
          <circle cx="35" cy="42" r="6" fill="#1f1f1f" />
          <circle cx="65" cy="42" r="6" fill="#1f1f1f" />
          <path d="M 30 35 Q 35 30 40 35" stroke="#1f1f1f" strokeWidth="2" fill="none" />
          <path d="M 60 35 Q 65 30 70 35" stroke="#1f1f1f" strokeWidth="2" fill="none" />
        </>
      )
    }
    // happy/neutral
    return (
      <>
        <ellipse cx="35" cy="40" rx="12" ry="15" fill="white" />
        <ellipse cx="65" cy="40" rx="12" ry="15" fill="white" />
        <circle cx="35" cy="40" r="7" fill="#1f1f1f" />
        <circle cx="65" cy="40" r="7" fill="#1f1f1f" />
      </>
    )
  }

  const getMouth = () => {
    if (mood === 'happy') {
      return <path d="M 35 65 Q 50 75 65 65" stroke="#1f1f1f" strokeWidth="3" fill="none" strokeLinecap="round" />
    }
    if (mood === 'sad') {
      return <path d="M 35 70 Q 50 60 65 70" stroke="#1f1f1f" strokeWidth="3" fill="none" strokeLinecap="round" />
    }
    if (mood === 'listening') {
      return <ellipse cx="50" cy="68" rx="5" ry="8" fill="#1f1f1f" />
    }
    return <path d="M 40 68 L 60 68" stroke="#1f1f1f" strokeWidth="3" fill="none" strokeLinecap="round" />
  }

  const getTail = () => {
    if (mood === 'happy') {
      return <path d="M 90 60 Q 110 40 105 30 Q 100 25 95 35" stroke="#1f1f1f" strokeWidth="4" fill="none" strokeLinecap="round" />
    }
    return <path d="M 90 60 Q 105 65 100 55" stroke="#1f1f1f" strokeWidth="4" fill="none" strokeLinecap="round" />
  }

  const getAnimations = () => {
    switch (mood) {
      case 'celebrating':
        return {
          animate: { 
            y: [0, -20, 0],
            rotate: [0, -10, 10, -10, 10, 0]
          },
          transition: { 
            y: { repeat: Infinity, duration: 0.6 },
            rotate: { repeat: Infinity, duration: 0.8 }
          }
        }
      case 'listening':
        return {
          animate: { scale: [1, 1.05, 1] },
          transition: { repeat: Infinity, duration: 2 }
        }
      case 'excited':
        return {
          animate: { 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          },
          transition: { 
            repeat: Infinity, 
            duration: 0.4,
            ease: "easeInOut"
          }
        }
      case 'thinking':
        return {
          animate: { x: [0, 5, -5, 0] },
          transition: { repeat: Infinity, duration: 3 }
        }
      case 'sad':
        return {
          animate: { y: 10, rotate: -5 },
          transition: { type: "spring", stiffness: 100 }
        }
      case 'happy':
      default:
        return {
          animate: { y: [0, -5, 0] },
          transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }
    }
  }

  const animation = getAnimations()

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className="mascot-svg"
      animate={animation.animate}
      transition={animation.transition}
    >
      {/* Tail */}
      {getTail()}
      
      {/* Body */}
      <ellipse cx="50" cy="85" rx="35" ry="25" fill="#1f1f1f" />
      
      {/* Head */}
      <circle cx="50" cy="50" r="35" fill="#1f1f1f" />
      
      {/* Ears */}
      <ellipse cx="25" cy="25" rx="12" ry="18" fill="#1f1f1f" transform="rotate(-20 25 25)" />
      <ellipse cx="75" cy="25" rx="12" ry="18" fill="#1f1f1f" transform="rotate(20 75 25)" />
      
      {/* Inner ears */}
      <ellipse cx="25" cy="25" rx="6" ry="10" fill="#4a4a4a" transform="rotate(-20 25 25)" />
      <ellipse cx="75" cy="25" rx="6" ry="10" fill="#4a4a4a" transform="rotate(20 75 25)" />
      
      {/* Eyes */}
      {getEyes()}
      
      {/* Nose */}
      <circle cx="50" cy="55" r="4" fill="#ff9999" />
      
      {/* Mouth */}
      {getMouth()}
      
      {/* Whiskers */}
      <line x1="20" y1="55" x2="5" y2="50" stroke="#1f1f1f" strokeWidth="1" />
      <line x1="20" y1="60" x2="5" y2="60" stroke="#1f1f1f" strokeWidth="1" />
      <line x1="80" y1="55" x2="95" y2="50" stroke="#1f1f1f" strokeWidth="1" />
      <line x1="80" y1="60" x2="95" y2="60" stroke="#1f1f1f" strokeWidth="1" />
      
      {/* Paws */}
      <ellipse cx="30" cy="100" rx="8" ry="6" fill="#1f1f1f" />
      <ellipse cx="70" cy="100" rx="8" ry="6" fill="#1f1f1f" />
    </motion.svg>
  )
}

// Celebration confetti component
export function CelebrationEffect() {
  const colors = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6']
  
  return (
    <div className="celebration-container">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="confetti"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ 
            y: 400,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  )
}

// Animated mascot with speech bubble
export function TalkingMascot({ message, mood = 'happy' }) {
  return (
    <div className="talking-mascot">
      <motion.div
        className="speech-bubble"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <p>{message}</p>
      </motion.div>
      <Mascot mood={mood} size={100} />
    </div>
  )
}

export default Mascot
