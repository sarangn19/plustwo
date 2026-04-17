// Gamified Digestion & Absorption Chapter
// Food Journey Adventure - 6 Levels (Organs)

export const chapterInfo = {
  id: 'digestion-chapter',
  title: 'Digestion & Absorption',
  subtitle: 'Food Journey Adventure',
  icon: '🍎',
  color: '#22c55e',
  totalXP: 600,
  description: 'Travel through the human body as a Food Explorer!'
}

// Level Types
export const LEVEL_TYPES = {
  LEARN: 'learn',      // 📖 Theory + explanation
  MATCH: 'match',      // 🧠 Match concepts
  MCQ: 'mcq',          // ⚡ Quick multiple choice
  DRAG: 'drag',        // 🎯 Drag and drop
  CHALLENGE: 'challenge', // 🔥 Hard question
  GAME: 'game',        // 🎮 Interactive game
  BOSS: 'boss'         // 💀 Boss level
}

// 6 Levels - Each with 5 nodes
export const gamifiedLevels = [
  {
    id: 'level-1-mouth',
    name: 'The Mouth',
    icon: '👄',
    emoji: '👄',
    color: '#f59e0b',
    position: 1,
    description: 'Where digestion begins!',
    xpReward: 50,
    badge: {
      id: 'chewing-champion',
      name: '🦷 Chewing Champion',
      description: 'Complete Mouth level with full hearts'
    },
    nodes: [
      {
        id: 'mouth-1',
        type: LEVEL_TYPES.LEARN,
        title: 'Mechanical vs Chemical',
        content: 'Mouth performs BOTH mechanical digestion (chewing) and chemical digestion (salivary amylase breaking starch)',
        duration: '1 min',
        xp: 10
      },
      {
        id: 'mouth-2',
        type: LEVEL_TYPES.MATCH,
        title: 'Match the Process',
        pairs: [
          { item: 'Teeth', match: 'Mechanical breakdown' },
          { item: 'Saliva', match: 'Moistens food + enzyme action' },
          { item: 'Amylase', match: 'Starch → Maltose' }
        ],
        xp: 10
      },
      {
        id: 'mouth-3',
        type: LEVEL_TYPES.MCQ,
        title: 'Quick Check',
        question: 'Salivary amylase works on which nutrient?',
        options: [
          { id: 'a', text: 'Proteins', correct: false },
          { id: 'b', text: 'Carbohydrates', correct: true },
          { id: 'c', text: 'Fats', correct: false },
          { id: 'd', text: 'Vitamins', correct: false }
        ],
        xp: 10
      },
      {
        id: 'mouth-4',
        type: LEVEL_TYPES.DRAG,
        title: 'Label the Mouth',
        labels: ['Tongue', 'Salivary glands', 'Teeth', 'Hard palate'],
        xp: 10
      },
      {
        id: 'mouth-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Think Deep!',
        question: 'Why does bread taste sweet after chewing?',
        answer: 'Salivary amylase breaks starch into maltose (sugar)',
        acceptableAnswers: ['amylase', 'starch', 'maltose', 'sugar', 'enzyme'],
        xp: 10
      }
    ]
  },
  {
    id: 'level-2-esophagus',
    name: 'The Esophagus',
    icon: '🚀',
    emoji: '🚀',
    color: '#3b82f6',
    position: 2,
    description: 'Food highway to the stomach!',
    xpReward: 50,
    badge: {
      id: 'swallow-master',
      name: '🚀 Swallow Master',
      description: 'Complete Esophagus level'
    },
    nodes: [
      {
        id: 'esophagus-1',
        type: LEVEL_TYPES.LEARN,
        title: 'Peristalsis Power',
        content: 'Esophagus uses wave-like muscle contractions (peristalsis) to push food down. Gravity is NOT needed - astronauts can swallow!',
        duration: '1 min',
        xp: 10
      },
      {
        id: 'esophagus-2',
        type: LEVEL_TYPES.GAME,
        title: 'Peristalsis Runner',
        gameType: 'peristalsis-game',
        description: 'Help the food bolus travel down by timing muscle contractions!',
        xp: 15
      },
      {
        id: 'esophagus-3',
        type: LEVEL_TYPES.MCQ,
        title: 'Quick Check',
        question: 'What pushes food through the esophagus?',
        options: [
          { id: 'a', text: 'Gravity', correct: false },
          { id: 'b', text: 'Peristalsis', correct: true },
          { id: 'c', text: 'Air pressure', correct: false },
          { id: 'd', text: 'Cilia', correct: false }
        ],
        xp: 10
      },
      {
        id: 'esophagus-4',
        type: LEVEL_TYPES.MATCH,
        title: 'Match Concepts',
        pairs: [
          { item: 'Bolus', match: 'Food + saliva ball' },
          { item: 'Peristalsis', match: 'Wave contractions' },
          { item: 'Sphincter', match: 'Muscle valve' }
        ],
        xp: 10
      },
      {
        id: 'esophagus-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Think Deep!',
        question: 'Can you swallow standing on your head? Why?',
        answer: 'Yes! Peristalsis works independently of gravity',
        acceptableAnswers: ['peristalsis', 'muscle', 'contraction', 'yes'],
        xp: 10
      }
    ]
  },
  {
    id: 'level-3-stomach',
    name: 'The Stomach',
    icon: '🧪',
    emoji: '🧪',
    color: '#8b5cf6',
    position: 3,
    description: 'The acid factory!',
    xpReward: 50,
    badge: {
      id: 'acid-master',
      name: '🧪 Acid Master',
      description: 'Complete Stomach level with full hearts'
    },
    nodes: [
      {
        id: 'stomach-1',
        type: LEVEL_TYPES.LEARN,
        title: 'HCl & Pepsin Team',
        content: 'HCl kills bacteria (pH 1.5-2) AND activates pepsinogen → pepsin. Pepsin breaks proteins into peptides.',
        duration: '1 min',
        xp: 10
      },
      {
        id: 'stomach-2',
        type: LEVEL_TYPES.GAME,
        title: 'Enzyme Attack!',
        gameType: 'enzyme-attack',
        description: 'Drop the right enzyme on the food!',
        xp: 15
      },
      {
        id: 'stomach-3',
        type: LEVEL_TYPES.MCQ,
        title: 'Quick Check',
        question: 'What activates pepsinogen into pepsin?',
        options: [
          { id: 'a', text: 'Trypsin', correct: false },
          { id: 'b', text: 'HCl', correct: true },
          { id: 'c', text: 'Bile', correct: false },
          { id: 'd', text: 'Amylase', correct: false }
        ],
        xp: 10
      },
      {
        id: 'stomach-4',
        type: LEVEL_TYPES.DRAG,
        title: 'Stomach Layers',
        labels: ['Mucosa', 'Submucosa', 'Muscularis', 'Serosa'],
        xp: 10
      },
      {
        id: 'stomach-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Think Deep!',
        question: 'Why doesn\'t the stomach digest itself?',
        answer: 'Mucus lining protects from HCl and pepsin',
        acceptableAnswers: ['mucus', 'mucosa', 'lining', 'protect'],
        xp: 10
      }
    ]
  },
  {
    id: 'level-4-small-intestine',
    name: 'Small Intestine',
    icon: '🧬',
    emoji: '🧬',
    color: '#ec4899',
    position: 4,
    description: 'The absorption powerhouse!',
    xpReward: 50,
    badge: {
      id: 'absorption-pro',
      name: '🧬 Absorption Pro',
      description: 'Master the small intestine'
    },
    nodes: [
      {
        id: 'si-1',
        type: LEVEL_TYPES.LEARN,
        title: 'Villi & Microvilli',
        content: 'Small intestine has finger-like projections (villi) with hair-like microvilli. This increases surface area 600x for maximum absorption!',
        duration: '1 min',
        xp: 10
      },
      {
        id: 'si-2',
        type: LEVEL_TYPES.GAME,
        title: 'Absorption Race!',
        gameType: 'absorption-race',
        description: 'Match nutrients to their absorption site FAST!',
        xp: 15
      },
      {
        id: 'si-3',
        type: LEVEL_TYPES.MATCH,
        title: 'Match Enzymes',
        pairs: [
          { item: 'Trypsin', match: 'Proteins → Peptides' },
          { item: 'Lipase', match: 'Fats → Fatty acids' },
          { item: 'Maltase', match: 'Maltose → Glucose' },
          { item: 'Sucrase', match: 'Sucrose → Glucose + Fructose' }
        ],
        xp: 10
      },
      {
        id: 'si-4',
        type: LEVEL_TYPES.MCQ,
        title: 'Quick Check',
        question: 'Where does MOST digestion and absorption happen?',
        options: [
          { id: 'a', text: 'Stomach', correct: false },
          { id: 'b', text: 'Large intestine', correct: false },
          { id: 'c', text: 'Small intestine', correct: true },
          { id: 'd', text: 'Mouth', correct: false }
        ],
        xp: 10
      },
      {
        id: 'si-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Think Deep!',
        question: 'How do villi help in absorption?',
        answer: 'Increase surface area 600x for efficient nutrient absorption',
        acceptableAnswers: ['surface area', 'absorption', 'villi', 'microvilli', 'efficient'],
        xp: 10
      }
    ]
  },
  {
    id: 'level-5-absorption',
    name: 'Absorption Zone',
    icon: '⚡',
    emoji: '⚡',
    color: '#f59e0b',
    position: 5,
    description: 'Nutrients enter the blood!',
    xpReward: 50,
    badge: {
      id: 'nutrient-ninja',
      name: '⚡ Nutrient Ninja',
      description: 'Master all absorption pathways'
    },
    nodes: [
      {
        id: 'absorption-1',
        type: LEVEL_TYPES.LEARN,
        title: 'Blood vs Lymph',
        content: 'Glucose & amino acids → Blood (direct). Fatty acids & glycerol → Lymph first (lacteals), then blood.',
        duration: '1 min',
        xp: 10
      },
      {
        id: 'absorption-2',
        type: LEVEL_TYPES.MATCH,
        title: 'Transport Match',
        pairs: [
          { item: 'Glucose', match: 'Blood' },
          { item: 'Amino acids', match: 'Blood' },
          { item: 'Fatty acids', match: 'Lymph first' },
          { item: 'Water', match: 'Both intestines' }
        ],
        xp: 10
      },
      {
        id: 'absorption-3',
        type: LEVEL_TYPES.GAME,
        title: 'Nutrient Sorting',
        gameType: 'nutrient-sort',
        description: 'Sort nutrients into Blood or Lymph!',
        xp: 15
      },
      {
        id: 'absorption-4',
        type: LEVEL_TYPES.MCQ,
        title: 'Quick Check',
        question: 'Fats are absorbed into which vessel first?',
        options: [
          { id: 'a', text: 'Blood capillary', correct: false },
          { id: 'b', text: 'Lacteal (lymph)', correct: true },
          { id: 'c', text: 'Vein', correct: false },
          { id: 'd', text: 'Artery', correct: false }
        ],
        xp: 10
      },
      {
        id: 'absorption-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Think Deep!',
        question: 'Why do fats take a different route than glucose?',
        answer: 'Fats are large and hydrophobic, they need lymph vessels (lacteals) before entering blood',
        acceptableAnswers: ['fat', 'lymph', 'lacteal', 'hydrophobic', 'large'],
        xp: 10
      }
    ]
  },
  {
    id: 'level-6-boss',
    name: 'Disorders Boss',
    icon: '💀',
    emoji: '💀',
    color: '#ef4444',
    position: 6,
    description: 'Clinical case studies - your final test!',
    xpReward: 100,
    isBoss: true,
    badge: {
      id: 'digestion-master',
      name: '👑 Digestion Master',
      description: 'Conquer the chapter boss!'
    },
    nodes: [
      {
        id: 'boss-1',
        type: LEVEL_TYPES.MCQ,
        title: 'Case Study 1',
        question: 'Patient has jaundice (yellow skin). Which organ is affected?',
        options: [
          { id: 'a', text: 'Liver', correct: true },
          { id: 'b', text: 'Kidney', correct: false },
          { id: 'c', text: 'Heart', correct: false },
          { id: 'd', text: 'Lung', correct: false }
        ],
        explanation: 'Jaundice occurs when liver can\'t process bilirubin properly.',
        xp: 20
      },
      {
        id: 'boss-2',
        type: LEVEL_TYPES.MCQ,
        title: 'Case Study 2',
        question: 'Patient has greasy, foul-smelling stools. What\'s the issue?',
        options: [
          { id: 'a', text: 'Amylase deficiency', correct: false },
          { id: 'b', text: 'Lipase/bile deficiency', correct: true },
          { id: 'c', text: 'Pepsin deficiency', correct: false },
          { id: 'd', text: 'Trypsin excess', correct: false }
        ],
        explanation: 'Steatorrhea (fatty stools) indicates fat malabsorption due to lipase or bile issues.',
        xp: 20
      },
      {
        id: 'boss-3',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Case Study 3',
        question: 'Ulcer patient - which enzyme causes tissue damage?',
        answer: 'Pepsin (activated by HCl) digests stomach lining',
        acceptableAnswers: ['pepsin', 'HCl', 'acid', 'protease'],
        explanation: 'Ulcers occur when mucus protection fails and pepsin/HCl attack the stomach wall.',
        xp: 20
      },
      {
        id: 'boss-4',
        type: LEVEL_TYPES.MCQ,
        title: 'Case Study 4',
        question: 'Cystic fibrosis patient - which digestion is impaired?',
        options: [
          { id: 'a', text: 'Carbohydrate', correct: false },
          { id: 'b', text: 'Protein', correct: false },
          { id: 'c', text: 'Fat', correct: true },
          { id: 'd', text: 'All equally', correct: false }
        ],
        explanation: 'Thick mucus blocks pancreatic duct → no lipase reaches intestine → fat malabsorption.',
        xp: 20
      },
      {
        id: 'boss-5',
        type: LEVEL_TYPES.CHALLENGE,
        title: 'Final Challenge',
        question: 'Design a treatment for someone with no stomach (gastrectomy).',
        answer: 'Frequent small meals, vitamin B12 supplements, liquid diet, enzyme supplements',
        acceptableAnswers: ['small meals', 'B12', 'vitamin', 'liquid', 'enzyme', 'frequent'],
        explanation: 'Without stomach: no HCl, no pepsin, no intrinsic factor (B12), no food storage.',
        xp: 20
      }
    ]
  }
]

// All badges
export const allBadges = [
  { id: 'chewing-champion', name: '🦷 Chewing Champion', description: 'Complete Mouth level with full hearts' },
  { id: 'swallow-master', name: '🚀 Swallow Master', description: 'Complete Esophagus level' },
  { id: 'acid-master', name: '🧪 Acid Master', description: 'Complete Stomach level with full hearts' },
  { id: 'absorption-pro', name: '🧬 Absorption Pro', description: 'Master the small intestine' },
  { id: 'nutrient-ninja', name: '⚡ Nutrient Ninja', description: 'Master all absorption pathways' },
  { id: 'digestion-master', name: '👑 Digestion Master', description: 'Conquer the chapter boss!' },
  { id: 'perfect-run', name: '💯 Perfect Run', description: 'Complete all levels with full hearts' },
  { id: 'speed-demon', name: '⚡ Speed Demon', description: 'Complete a level in under 5 minutes' }
]

// Rewards/Unlocks
export const chapterRewards = {
  complete: [
    { type: 'pdf', name: 'Complete Notes PDF', icon: '📄' },
    { type: 'flashcards', name: '50 Flashcards', icon: '🃏' },
    { type: 'quiz', name: 'Advanced Quiz', icon: '🎯' },
    { type: 'summary', name: 'One-Page Summary', icon: '📝' }
  ],
  badges: allBadges
}

// AI Suggestions based on weak areas
export const getAISuggestions = (weakAreas) => {
  const suggestions = []
  
  if (weakAreas.includes('enzymes')) {
    suggestions.push({
      type: 'revision',
      message: '🔄 Revise: Enzyme functions',
      action: 'Replay Stomach Level',
      levelId: 'level-3-stomach'
    })
  }
  
  if (weakAreas.includes('absorption')) {
    suggestions.push({
      type: 'practice',
      message: '🎯 Practice: Absorption sites',
      action: 'Try Absorption Race',
      levelId: 'level-5-absorption'
    })
  }
  
  if (weakAreas.includes('disorders')) {
    suggestions.push({
      type: 'challenge',
      message: '💀 Challenge yourself: Disorders',
      action: 'Fight Boss Level',
      levelId: 'level-6-boss'
    })
  }
  
  return suggestions
}

export default gamifiedLevels
