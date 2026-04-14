export const chapters = [
  {
    id: 'digestion-absorption',
    title: 'Digestion and Absorption',
    subject: 'Biology',
    color: '#58cc02',
    icon: '🍎',
    description: 'Learn how food is broken down and absorbed',
    lessons: [
      { id: 'intro', title: 'Introduction', xp: 10, type: 'quiz' },
      { id: 'alimentary-canal', title: 'Alimentary Canal', xp: 15, type: 'quiz' },
      { id: 'digestive-glands', title: 'Digestive Glands', xp: 15, type: 'quiz' },
      { id: 'enzymes', title: 'Digestive Enzymes', xp: 20, type: 'quiz' },
      { id: 'absorption', title: 'Absorption Process', xp: 20, type: 'quiz' },
      { id: 'disorders', title: 'Digestive Disorders', xp: 15, type: 'quiz' },
      { id: 'speak-1', title: 'Explain Digestion', xp: 25, type: 'speak' },
    ]
  }
]

export const quizData = {
  'intro': [
    {
      id: 1,
      question: 'Digestion is:',
      options: [
        { id: 'a', text: 'Chemical', correct: false },
        { id: 'b', text: 'Mechanical', correct: false },
        { id: 'c', text: 'Only biological', correct: false },
        { id: 'd', text: 'Both physico-chemical', correct: true }
      ],
      explanation: 'Digestion involves both physical (mechanical) breakdown and chemical processes with enzymes.'
    },
    {
      id: 2,
      question: 'The process of digestion is completed in:',
      options: [
        { id: 'a', text: 'Stomach', correct: false },
        { id: 'b', text: 'Small intestine', correct: true },
        { id: 'c', text: 'Large intestine', correct: false },
        { id: 'd', text: 'Buccal cavity', correct: false }
      ],
      explanation: 'Most digestion is completed in the small intestine where enzymes from pancreas and bile act.'
    },
    {
      id: 3,
      question: 'The largest gland in human body is:',
      options: [
        { id: 'a', text: 'Pancreas', correct: false },
        { id: 'b', text: 'Liver', correct: true },
        { id: 'c', text: 'Salivary gland', correct: false },
        { id: 'd', text: 'Gastric gland', correct: false }
      ],
      explanation: 'The liver is the largest gland in the human body, weighing about 1.5 kg in adults.'
    }
  ],
  'alimentary-canal': [
    {
      id: 1,
      question: 'Which part of alimentary canal has no digestive glands?',
      options: [
        { id: 'a', text: 'Esophagus', correct: true },
        { id: 'b', text: 'Stomach', correct: false },
        { id: 'c', text: 'Small intestine', correct: false },
        { id: 'd', text: 'Large intestine', correct: false }
      ],
      explanation: 'The esophagus is simply a passage for food and has no digestive glands.'
    },
    {
      id: 2,
      question: 'The length of small intestine in adult human is about:',
      options: [
        { id: 'a', text: '3-4 meters', correct: false },
        { id: 'b', text: '6-9 meters', correct: true },
        { id: 'c', text: '12-15 meters', correct: false },
        { id: 'd', text: '1-2 meters', correct: false }
      ],
      explanation: 'The small intestine is about 6-9 meters long in an adult human.'
    },
    {
      id: 3,
      question: 'The pH of gastric juice is:',
      options: [
        { id: 'a', text: 'Neutral (7.0)', correct: false },
        { id: 'b', text: 'Slightly alkaline (8.0)', correct: false },
        { id: 'c', text: 'Highly acidic (1.8-2.0)', correct: true },
        { id: 'd', text: 'Slightly acidic (5.0)', correct: false }
      ],
      explanation: 'Gastric juice is highly acidic due to HCl secretion, with pH 1.8-2.0.'
    },
    {
      id: 4,
      question: 'Villi are present in:',
      options: [
        { id: 'a', text: 'Stomach', correct: false },
        { id: 'b', text: 'Small intestine', correct: true },
        { id: 'c', text: 'Large intestine', correct: false },
        { id: 'd', text: 'Esophagus', correct: false }
      ],
      explanation: 'Villi are finger-like projections in the small intestine that increase surface area for absorption.'
    }
  ],
  'digestive-glands': [
    {
      id: 1,
      question: 'Bile is stored in:',
      options: [
        { id: 'a', text: 'Liver', correct: false },
        { id: 'b', text: 'Gall bladder', correct: true },
        { id: 'c', text: 'Pancreas', correct: false },
        { id: 'd', text: 'Stomach', correct: false }
      ],
      explanation: 'Bile is produced by liver but stored and concentrated in the gall bladder.'
    },
    {
      id: 2,
      question: 'Pancreatic juice is released into:',
      options: [
        { id: 'a', text: 'Stomach', correct: false },
        { id: 'b', text: 'Duodenum', correct: true },
        { id: 'c', text: 'Ileum', correct: false },
        { id: 'd', text: 'Colon', correct: false }
      ],
      explanation: 'The pancreatic duct opens into the duodenum, the first part of small intestine.'
    },
    {
      id: 3,
      question: 'Which enzyme is NOT present in saliva?',
      options: [
        { id: 'a', text: 'Amylase', correct: false },
        { id: 'b', text: 'Maltase', correct: false },
        { id: 'c', text: 'Lysozyme', correct: false },
        { id: 'd', text: 'Pepsin', correct: true }
      ],
      explanation: 'Pepsin is found in gastric juice, not saliva. Saliva contains amylase, maltase, and lysozyme.'
    }
  ],
  'enzymes': [
    {
      id: 1,
      question: 'Pepsin acts on:',
      options: [
        { id: 'a', text: 'Carbohydrates', correct: false },
        { id: 'b', text: 'Proteins', correct: true },
        { id: 'c', text: 'Fats', correct: false },
        { id: 'd', text: 'Nucleic acids', correct: false }
      ],
      explanation: 'Pepsin is a protease that breaks down proteins into peptides in the stomach.'
    },
    {
      id: 2,
      question: 'Trypsin is secreted by:',
      options: [
        { id: 'a', text: 'Stomach', correct: false },
        { id: 'b', text: 'Pancreas', correct: true },
        { id: 'c', text: 'Liver', correct: false },
        { id: 'd', text: 'Salivary glands', correct: false }
      ],
      explanation: 'Trypsin is a pancreatic enzyme that breaks down proteins in the small intestine.'
    },
    {
      id: 3,
      question: 'The enzyme that digests fats is called:',
      options: [
        { id: 'a', text: 'Protease', correct: false },
        { id: 'b', text: 'Amylase', correct: false },
        { id: 'c', text: 'Lipase', correct: true },
        { id: 'd', text: 'Nuclease', correct: false }
      ],
      explanation: 'Lipase enzymes break down fats (lipids) into fatty acids and glycerol.'
    },
    {
      id: 4,
      question: 'Succus entericus is secreted by:',
      options: [
        { id: 'a', text: 'Intestinal glands', correct: true },
        { id: 'b', text: 'Liver', correct: false },
        { id: 'c', text: 'Pancreas', correct: false },
        { id: 'd', text: 'Stomach', correct: false }
      ],
      explanation: 'Succus entericus (intestinal juice) is secreted by crypts of Lieberkuhn in the small intestine.'
    }
  ],
  'absorption': [
    {
      id: 1,
      question: 'Amino acids are absorbed by:',
      options: [
        { id: 'a', text: 'Passive diffusion', correct: false },
        { id: 'b', text: 'Active transport', correct: true },
        { id: 'c', text: 'Osmosis', correct: false },
        { id: 'd', text: 'Facilitated diffusion', correct: false }
      ],
      explanation: 'Amino acids are absorbed via active transport against concentration gradient using energy.'
    },
    {
      id: 2,
      question: 'Most water absorption occurs in:',
      options: [
        { id: 'a', text: 'Stomach', correct: false },
        { id: 'b', text: 'Small intestine', correct: false },
        { id: 'c', text: 'Large intestine', correct: true },
        { id: 'd', text: 'Esophagus', correct: false }
      ],
      explanation: 'The large intestine absorbs most remaining water, converting liquid chyme to semi-solid feces.'
    },
    {
      id: 3,
      question: 'Bile salts help in absorption of:',
      options: [
        { id: 'a', text: 'Carbohydrates', correct: false },
        { id: 'b', text: 'Proteins', correct: false },
        { id: 'c', text: 'Fats', correct: true },
        { id: 'd', text: 'Vitamins', correct: false }
      ],
      explanation: 'Bile salts emulsify fats, breaking them into micelles for easier absorption.'
    },
    {
      id: 4,
      question: 'Fructose is absorbed by:',
      options: [
        { id: 'a', text: 'Active transport', correct: false },
        { id: 'b', text: 'Facilitated diffusion', correct: true },
        { id: 'c', text: 'Simple diffusion', correct: false },
        { id: 'd', text: 'Osmosis', correct: false }
      ],
      explanation: 'Fructose is absorbed via facilitated diffusion, unlike glucose which uses active transport.'
    }
  ],
  'disorders': [
    {
      id: 1,
      question: 'Jaundice is caused by:',
      options: [
        { id: 'a', text: 'Excess bile production', correct: false },
        { id: 'b', text: 'Accumulation of bilirubin', correct: true },
        { id: 'c', text: 'Lack of digestive enzymes', correct: false },
        { id: 'd', text: 'Stomach ulcers', correct: false }
      ],
      explanation: 'Jaundice occurs when bilirubin (yellow pigment) accumulates in blood due to liver dysfunction.'
    },
    {
      id: 2,
      question: 'Constipation is caused due to:',
      options: [
        { id: 'a', text: 'Excess water absorption', correct: true },
        { id: 'b', text: 'Less water absorption', correct: false },
        { id: 'c', text: 'Viral infection', correct: false },
        { id: 'd', text: 'Bacterial infection', correct: false }
      ],
      explanation: 'Constipation occurs when too much water is absorbed from feces in the large intestine.'
    },
    {
      id: 3,
      question: 'The inflammation of liver is called:',
      options: [
        { id: 'a', text: 'Jaundice', correct: false },
        { id: 'b', text: 'Hepatitis', correct: true },
        { id: 'c', text: 'Cirrhosis', correct: false },
        { id: 'd', text: 'Gastritis', correct: false }
      ],
      explanation: 'Hepatitis is the inflammation of liver, commonly caused by viral infections (Hep A, B, C).'
    }
  ]
}

export const speakQuestions = {
  'speak-1': {
    question: 'Explain digestion as hydrolysis',
    hint: 'Digestion is the breakdown of complex food molecules into simpler, absorbable forms using water molecules...',
    keywords: ['hydrolysis', 'water', 'breakdown', 'enzymes', 'simple', 'absorbable', 'complex', 'chemical']
  }
}
