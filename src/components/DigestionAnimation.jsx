import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Animated digestion process
export function DigestionProcess() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    {
      organ: '👄 Buccal Cavity',
      action: 'Mechanical chewing + Salivary amylase begins starch digestion',
      enzyme: 'Salivary amylase',
      color: '#f59e0b'
    },
    {
      organ: '🧪 Stomach',
      action: 'HCl activates pepsin for protein digestion',
      enzyme: 'Pepsin',
      color: '#ef4444'
    },
    {
      organ: '🥖 Small Intestine',
      action: 'Pancreatic enzymes + bile complete digestion',
      enzyme: 'Trypsin, Lipase, Amylase',
      color: '#22c55e'
    },
    {
      organ: '💧 Large Intestine',
      action: 'Water absorption + gut flora activity',
      enzyme: 'Bacterial enzymes',
      color: '#8b5cf6'
    }
  ]

  return (
    <div className="digestion-animation">
      <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#1e293b' }}>
        Journey of Food 🍎
      </h3>
      
      <div className="digestion-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="digestion-step"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: currentStep >= index ? 1 : 0.3,
              x: 0,
              scale: currentStep === index ? 1.02 : 1
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setCurrentStep(index)}
            style={{ cursor: 'pointer' }}
          >
            <motion.div 
              className="digestion-step-number"
              style={{ background: step.color }}
              animate={currentStep === index ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {index + 1}
            </motion.div>
            <div className="digestion-step-content">
              <h4>{step.organ}</h4>
              <AnimatePresence mode="wait">
                {currentStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p>{step.action}</p>
                    <motion.span 
                      className="enzyme-bubble"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      🔬 {step.enzyme}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="food-journey"
        style={{ marginTop: '20px', textAlign: 'center' }}
      >
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
          Tap steps to explore! Click Next to continue
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <button 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            style={{ 
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              background: currentStep === 0 ? '#e2e8f0' : '#3b82f6',
              color: currentStep === 0 ? '#94a3b8' : 'white',
              fontWeight: 600,
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous
          </button>
          <button 
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            style={{ 
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              background: currentStep === steps.length - 1 ? '#e2e8f0' : '#22c55e',
              color: currentStep === steps.length - 1 ? '#94a3b8' : 'white',
              fontWeight: 600,
              cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// Animated enzyme breakdown
export function EnzymeAction({ enzyme, substrate, product }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="enzyme-animation" style={{ 
      padding: '20px', 
      background: '#f0f9ff', 
      borderRadius: '16px',
      textAlign: 'center'
    }}>
      <h4 style={{ marginBottom: '16px', color: '#1e293b' }}>
        {enzyme} Action
      </h4>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* Substrate */}
        <motion.div
          className="food-particle"
          style={{ 
            width: 40, 
            height: 40, 
            background: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}
          animate={isActive ? { scale: [1, 1.2, 0.8] } : {}}
          transition={{ duration: 0.5 }}
        >
          {substrate}
        </motion.div>
        
        {/* Arrow */}
        <motion.span 
          style={{ fontSize: '24px', color: '#64748b' }}
          animate={isActive ? { x: [0, 5, 0] } : {}}
          transition={{ repeat: isActive ? Infinity : 0, duration: 0.5 }}
        >
          →
        </motion.span>
        
        {/* Enzyme */}
        <motion.div
          className="enzyme-bubble"
          style={{ fontSize: '16px', padding: '12px 20px' }}
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ repeat: isActive ? Infinity : 0, duration: 0.3 }}
        >
          ⚡ {enzyme}
        </motion.div>
        
        {/* Arrow */}
        <motion.span 
          style={{ fontSize: '24px', color: '#64748b' }}
          animate={isActive ? { x: [0, 5, 0] } : {}}
          transition={{ repeat: isActive ? Infinity : 0, duration: 0.5, delay: 0.25 }}
        >
          →
        </motion.span>
        
        {/* Product */}
        <motion.div
          style={{ 
            display: 'flex', 
            gap: '4px',
            opacity: isActive ? 1 : 0.3
          }}
        >
          {product.split('+').map((p, i) => (
            <motion.div
              key={i}
              style={{ 
                width: 30, 
                height: 30, 
                background: '#22c55e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {p.trim()}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <button
        onClick={() => setIsActive(!isActive)}
        style={{
          padding: '10px 24px',
          border: 'none',
          borderRadius: '10px',
          background: isActive ? '#ef4444' : '#22c55e',
          color: 'white',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        {isActive ? '⏹ Stop' : '▶ Watch Action'}
      </button>
    </div>
  )
}

// Animated progress ring for XP/Hearts
export function AnimatedRing({ value, max, color, icon, size = 60 }) {
  const percentage = (value / max) * 100
  const circumference = 2 * Math.PI * ((size - 8) / 2)
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 8) / 2}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="6"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={(size - 8) / 2}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div 
        style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          fontSize: size * 0.4
        }}
      >
        {icon}
      </div>
    </div>
  )
}

export default DigestionProcess
