function Mascot({ mood = 'happy' }) {
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

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mascot-svg">
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
    </svg>
  )
}

export default Mascot
