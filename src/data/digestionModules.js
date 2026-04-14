export const modules = [
  {
    id: 'module-1',
    title: 'Foundations of Digestion',
    icon: '🧠',
    color: '#58cc02',
    levels: [
      {
        id: 'm1-l1',
        title: 'What is Digestion?',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Digestion is the enzymatic hydrolysis of complex food into simple absorbable molecules.',
          deepConcept: 'Different nutrients require breaking different bonds: Carbohydrates (glycosidic), Proteins (peptide), Fats (ester)'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Digestion is:',
            options: [
              { id: 'a', text: 'Mechanical', correct: false },
              { id: 'b', text: 'Chemical', correct: false },
              { id: 'c', text: 'Both physico-chemical', correct: true },
              { id: 'd', text: 'Only biological', correct: false }
            ],
            explanation: 'Digestion involves both physical (mechanical) breakdown and chemical processes with enzymes.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Which is NOT digestion?',
            options: [
              { id: 'a', text: 'Hydrolysis', correct: false },
              { id: 'b', text: 'Enzyme action', correct: false },
              { id: 'c', text: 'Absorption of glucose', correct: true },
              { id: 'd', text: 'Breakdown of starch', correct: false }
            ],
            explanation: 'Absorption is uptake into blood/lymph, not breakdown. Digestion is the breakdown process.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which bond is broken during protein digestion?',
            options: [
              { id: 'a', text: 'Glycosidic', correct: false },
              { id: 'b', text: 'Peptide', correct: true },
              { id: 'c', text: 'Ester', correct: false },
              { id: 'd', text: 'Hydrogen', correct: false }
            ],
            explanation: 'Proteins contain peptide bonds between amino acids. These are broken during protein digestion.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Digestion is a ______ process',
            answer: 'hydrolysis',
            acceptableAnswers: ['hydrolysis', 'hydrolytic', 'chemical hydrolysis'],
            explanation: 'Digestion uses water to break bonds - this is hydrolysis.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain digestion as hydrolysis',
            hint: 'Digestion breaks complex molecules using water. It breaks glycosidic, peptide, and ester bonds...',
            keywords: ['water', 'hydrolysis', 'bonds', 'enzymatic', 'complex', 'simple', 'glycosidic', 'peptide', 'ester']
          }
        ]
      },
      {
        id: 'm1-l2',
        title: 'Types of Digestion',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Two types: Intracellular (inside cells) vs Extracellular (outside cells). Humans show extracellular digestion.',
          deepConcept: 'Intracellular digestion occurs in lysosomes. Common in unicellular organisms like Amoeba.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Humans show:',
            options: [
              { id: 'a', text: 'Intracellular', correct: false },
              { id: 'b', text: 'Extracellular', correct: true }
            ],
            explanation: 'Humans digest food in the alimentary canal (outside cells), then absorb nutrients.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Intracellular digestion occurs in:',
            options: [
              { id: 'a', text: 'Amoeba', correct: true },
              { id: 'b', text: 'Humans', correct: false },
              { id: 'c', text: 'Plants', correct: false }
            ],
            explanation: 'Amoeba engulfs food and digests it inside food vacuoles (intracellular).'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Organelle responsible for intracellular digestion:',
            options: [
              { id: 'a', text: 'Lysosome', correct: true },
              { id: 'b', text: 'Nucleus', correct: false },
              { id: 'c', text: 'Ribosome', correct: false },
              { id: 'd', text: 'Mitochondria', correct: false }
            ],
            explanation: 'Lysosomes contain hydrolytic enzymes for intracellular digestion.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Human digestion is ______',
            answer: 'extracellular',
            acceptableAnswers: ['extracellular', 'extra cellular'],
            explanation: 'Human digestion occurs in the digestive tract, outside body cells.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain intracellular vs extracellular digestion',
            hint: 'Intracellular happens inside cells in lysosomes. Extracellular happens in digestive cavities or canals...',
            keywords: ['intracellular', 'extracellular', 'lysosome', 'alimentary', 'canal', 'cells', 'amoeba', 'humans']
          }
        ]
      },
      {
        id: 'm1-l3',
        title: 'Mechanical vs Chemical',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Mechanical: physically breaks food. Chemical: breaks bonds using enzymes.',
          deepConcept: 'Mechanical digestion increases surface area, improving enzyme efficiency.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Mechanical digestion helps:',
            options: [
              { id: 'a', text: 'Absorb nutrients directly', correct: false },
              { id: 'b', text: 'Increase surface area', correct: true }
            ],
            explanation: 'Mechanical digestion (chewing, churning) increases surface area for enzymes to act.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Chemical digestion involves:',
            options: [
              { id: 'a', text: 'Teeth', correct: false },
              { id: 'b', text: 'Enzymes', correct: true }
            ],
            explanation: 'Teeth are for mechanical digestion. Enzymes perform chemical digestion.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Why is mechanical digestion important?',
            options: [
              { id: 'a', text: 'Produces enzymes', correct: false },
              { id: 'b', text: 'Increases enzyme efficiency', correct: true },
              { id: 'c', text: 'Changes pH', correct: false },
              { id: 'd', text: 'Kills bacteria', correct: false }
            ],
            explanation: 'By increasing surface area, mechanical digestion allows enzymes to work more efficiently.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Mechanical digestion increases ______',
            answer: 'surface area',
            acceptableAnswers: ['surface area', 'surface', 'area'],
            explanation: 'More surface area = more contact between food and enzymes.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain mechanical vs chemical digestion',
            hint: 'Mechanical is physical breakdown. Chemical uses enzymes to break bonds...',
            keywords: ['mechanical', 'chemical', 'physical', 'enzymes', 'bonds', 'surface', 'area', 'teeth', 'churning']
          }
        ]
      },
      {
        id: 'm1-l4',
        title: 'End Products',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Carbs → Monosaccharides | Proteins → Amino acids | Fats → Fatty acids + Glycerol',
          deepConcept: 'Digestion is complete only when molecules become absorbable (small enough to cross membranes).'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Final product of proteins:',
            options: [
              { id: 'a', text: 'Peptides', correct: false },
              { id: 'b', text: 'Amino acids', correct: true }
            ],
            explanation: 'Proteins are fully digested into amino acids, which can be absorbed.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Peptides are:',
            options: [
              { id: 'a', text: 'Final products', correct: false },
              { id: 'b', text: 'Intermediate products', correct: true }
            ],
            explanation: 'Peptides are partially digested proteins. Final digestion yields amino acids.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which is NOT a final product?',
            options: [
              { id: 'a', text: 'Glucose', correct: false },
              { id: 'b', text: 'Amino acids', correct: false },
              { id: 'c', text: 'Peptides', correct: true },
              { id: 'd', text: 'Fatty acids', correct: false }
            ],
            explanation: 'Peptides need further digestion into amino acids before absorption.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Final product of carbohydrates: ______',
            answer: 'monosaccharides',
            acceptableAnswers: ['monosaccharides', 'monosaccharide', 'glucose', 'fructose', 'galactose'],
            explanation: 'Complex carbs are broken down to monosaccharides (glucose, fructose, galactose).'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the end products of digestion',
            hint: 'Carbohydrates become monosaccharides, proteins become amino acids, fats become fatty acids and glycerol...',
            keywords: ['monosaccharides', 'amino acids', 'fatty acids', 'glycerol', 'carbohydrates', 'proteins', 'fats', 'absorbable']
          }
        ]
      },
      {
        id: 'm1-l5',
        title: 'Digestion vs Absorption',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Digestion = Breakdown | Absorption = Uptake into blood/lymph',
          deepConcept: 'Most absorption occurs in the small intestine, especially in the ileum.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Absorption means:',
            options: [
              { id: 'a', text: 'Breakdown', correct: false },
              { id: 'b', text: 'Uptake into blood/lymph', correct: true }
            ],
            explanation: 'Absorption is the movement of digested nutrients into blood or lymph.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Which is absorption?',
            options: [
              { id: 'a', text: 'Hydrolysis', correct: false },
              { id: 'b', text: 'Entry of glucose into blood', correct: true }
            ],
            explanation: 'Hydrolysis is digestion. Glucose entering blood is absorption.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Main site of absorption:',
            options: [
              { id: 'a', text: 'Stomach', correct: false },
              { id: 'b', text: 'Small intestine', correct: true },
              { id: 'c', text: 'Large intestine', correct: false },
              { id: 'd', text: 'Esophagus', correct: false }
            ],
            explanation: 'The small intestine (especially ileum with villi) is the main absorption site.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Absorption mainly occurs in ______',
            answer: 'small intestine',
            acceptableAnswers: ['small intestine', 'smallintestine', 'ileum', 'jejunum', 'duodenum'],
            explanation: 'The small intestine has villi and microvilli for maximum absorption.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain digestion vs absorption',
            hint: 'Digestion breaks down food. Absorption takes up nutrients into circulation...',
            keywords: ['digestion', 'absorption', 'breakdown', 'uptake', 'blood', 'lymph', 'small intestine', 'villi']
          }
        ]
      },
      {
        id: 'm1-test',
        title: 'Module 1 Test',
        type: 'test',
        xp: 30,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Digestion breaks:',
            options: [
              { id: 'a', text: 'Hydrogen bonds', correct: false },
              { id: 'b', text: 'Peptide bonds', correct: true },
              { id: 'c', text: 'Ionic bonds', correct: false },
              { id: 'd', text: 'Van der Waals', correct: false }
            ],
            explanation: 'Digestion breaks covalent bonds like peptide, glycosidic, and ester bonds.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Which is NOT hydrolysis?',
            options: [
              { id: 'a', text: 'Digestion', correct: false },
              { id: 'b', text: 'Absorption', correct: true },
              { id: 'c', text: 'Breakdown of starch', correct: false },
              { id: 'd', text: 'Protein digestion', correct: false }
            ],
            explanation: 'Absorption is uptake, not breakdown. Only digestion involves hydrolysis.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which process improves enzyme efficiency?',
            options: [
              { id: 'a', text: 'Absorption', correct: false },
              { id: 'b', text: 'Mechanical digestion', correct: true },
              { id: 'c', text: 'Excretion', correct: false },
              { id: 'd', text: 'Assimilation', correct: false }
            ],
            explanation: 'Mechanical digestion increases surface area, allowing enzymes to work more efficiently.'
          },
          {
            id: 4,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the complete digestion process from bond breaking to absorption',
            hint: 'Start with mechanical and chemical digestion, mention hydrolysis of different bonds, end with absorption in small intestine...',
            keywords: ['mechanical', 'chemical', 'hydrolysis', 'bonds', 'enzymes', 'small intestine', 'villi', 'absorption', 'blood', 'lymph']
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Buccal Cavity & Salivary Digestion',
    icon: '👄',
    color: '#ff9600',
    levels: [
      {
        id: 'm2-l1',
        title: 'Mouth Structure',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'The buccal cavity includes teeth, tongue, and salivary glands. First site of digestion.',
          deepConcept: 'Teeth cut (incisors), tear (canines), grind (molars). Tongue helps in mastication and deglutition.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'The buccal cavity is also called:',
            options: [
              { id: 'a', text: 'Oral cavity', correct: true },
              { id: 'b', text: 'Nasal cavity', correct: false },
              { id: 'c', text: 'Thoracic cavity', correct: false },
              { id: 'd', text: 'Abdominal cavity', correct: false }
            ],
            explanation: 'Buccal cavity = oral cavity = mouth. It is the first part of the alimentary canal.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Which teeth are for grinding?',
            options: [
              { id: 'a', text: 'Incisors', correct: false },
              { id: 'b', text: 'Canines', correct: false },
              { id: 'c', text: 'Molars', correct: true },
              { id: 'd', text: 'Premolars only', correct: false }
            ],
            explanation: 'Molars and premolars grind food. Incisors cut, canines tear.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Palate separates:',
            options: [
              { id: 'a', text: 'Mouth and nose', correct: false },
              { id: 'b', text: 'Mouth and pharynx', correct: false },
              { id: 'c', text: 'Oral and nasal cavities', correct: true },
              { id: 'd', text: 'Esophagus and trachea', correct: false }
            ],
            explanation: 'The palate forms the roof of the mouth and separates oral from nasal cavities.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The ______ cavity is the first part of the alimentary canal',
            answer: 'buccal',
            acceptableAnswers: ['buccal', 'oral'],
            explanation: 'The buccal/oral cavity is where digestion begins with mechanical breakdown.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Describe the structure and function of the buccal cavity',
            hint: 'Mention teeth types, tongue, palate, salivary glands, and their functions...',
            keywords: ['teeth', 'tongue', 'palate', 'salivary', 'glands', 'mastication', 'deglutition', 'chewing', 'swallowing']
          }
        ]
      },
      {
        id: 'm2-l2',
        title: 'Saliva & Amylase',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Saliva contains amylase (ptyalin) that breaks starch into maltose. pH ~6.8.',
          deepConcept: 'Salivary amylase is inactivated in stomach due to acidic pH. Only 30% of starch digestion occurs in mouth.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Salivary amylase breaks down:',
            options: [
              { id: 'a', text: 'Proteins', correct: false },
              { id: 'b', text: 'Starch', correct: true },
              { id: 'c', text: 'Fats', correct: false },
              { id: 'd', text: 'Nucleic acids', correct: false }
            ],
            explanation: 'Salivary amylase (ptyalin) digests starch into maltose and dextrins.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Why does starch digestion stop in stomach?',
            options: [
              { id: 'a', text: 'No starch present', correct: false },
              { id: 'b', text: 'Acid denatures amylase', correct: true },
              { id: 'c', text: 'Enzyme used up', correct: false },
              { id: 'd', text: 'Temperature too low', correct: false }
            ],
            explanation: 'Stomach pH (1.8-2) denatures salivary amylase, stopping starch digestion.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Optimum pH for salivary amylase:',
            options: [
              { id: 'a', text: '2.0', correct: false },
              { id: 'b', text: '6.8', correct: true },
              { id: 'c', text: '8.5', correct: false },
              { id: 'd', text: '7.4', correct: false }
            ],
            explanation: 'Salivary amylase works best at pH 6.7-7.0 (slightly acidic to neutral).'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Saliva contains ______ which digests starch',
            answer: 'amylase',
            acceptableAnswers: ['amylase', 'ptyalin', 'salivary amylase'],
            explanation: 'Salivary amylase (also called ptyalin) is the starch-digesting enzyme in saliva.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the action of salivary amylase and its limitations',
            hint: 'Discuss starch to maltose conversion, pH optimum, and why digestion stops in stomach...',
            keywords: ['amylase', 'ptyalin', 'starch', 'maltose', 'pH', 'acid', 'denatured', 'stomach', 'optimum']
          }
        ]
      },
      {
        id: 'm2-test',
        title: 'Module 2 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'The roof of the buccal cavity is formed by:',
            options: [
              { id: 'a', text: 'Tongue', correct: false },
              { id: 'b', text: 'Palate', correct: true },
              { id: 'c', text: 'Uvula', correct: false },
              { id: 'd', text: 'Epiglottis', correct: false }
            ],
            explanation: 'The palate forms the roof of the mouth, separating oral and nasal cavities.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Lysozyme in saliva:',
            options: [
              { id: 'a', text: 'Digests starch', correct: false },
              { id: 'b', text: 'Kills bacteria', correct: true },
              { id: 'c', text: 'Lubricates food', correct: false },
              { id: 'd', text: 'Activates pepsin', correct: false }
            ],
            explanation: 'Lysozyme is an antibacterial enzyme that destroys bacterial cell walls.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain carbohydrate digestion in the mouth',
            hint: 'Start with mechanical digestion, then salivary amylase action, and why it stops...',
            keywords: ['mastication', 'salivary amylase', 'starch', 'maltose', 'pH', 'denaturation', 'stomach']
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Stomach — Acidic Digestion',
    icon: '🧪',
    color: '#ff4b4b',
    levels: [
      {
        id: 'm3-l1',
        title: 'Gastric Glands',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Stomach has gastric glands with 3 cell types: mucous, chief, parietal.',
          deepConcept: 'Parietal cells secrete HCl and intrinsic factor. Chief cells secrete pepsinogen.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'HCl is secreted by:',
            options: [
              { id: 'a', text: 'Chief cells', correct: false },
              { id: 'b', text: 'Parietal cells', correct: true },
              { id: 'c', text: 'Mucous cells', correct: false },
              { id: 'd', text: 'Goblet cells', correct: false }
            ],
            explanation: 'Parietal (oxyntic) cells secrete HCl and intrinsic factor.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Pepsinogen is activated to pepsin by:',
            options: [
              { id: 'a', text: 'Trypsin', correct: false },
              { id: 'b', text: 'HCl', correct: true },
              { id: 'c', text: 'Bile', correct: false },
              { id: 'd', text: 'Enterokinase', correct: false }
            ],
            explanation: 'HCl activates pepsinogen (inactive) to pepsin (active protease).'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Intrinsic factor is needed for absorption of:',
            options: [
              { id: 'a', text: 'Iron', correct: false },
              { id: 'b', text: 'Vitamin B12', correct: true },
              { id: 'c', text: 'Calcium', correct: false },
              { id: 'd', text: 'Vitamin D', correct: false }
            ],
            explanation: 'Intrinsic factor binds B12 for absorption in ileum. Deficiency causes pernicious anemia.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Stomach pH is about ______',
            answer: '1.8',
            acceptableAnswers: ['1.8', '2', '1.8-2', '1.8 to 2', '1.5', '2.0'],
            explanation: 'Gastric juice is highly acidic with pH 1.8-2.0 due to HCl.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the structure and function of gastric glands',
            hint: 'Discuss mucous cells, chief cells, parietal cells and their secretions...',
            keywords: ['gastric glands', 'mucous', 'chief cells', 'parietal', 'HCl', 'pepsinogen', 'pepsin', 'intrinsic factor']
          }
        ]
      },
      {
        id: 'm3-l2',
        title: 'Pepsin & Protein Digestion',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Pepsin breaks proteins into peptides. Optimum pH 1.8-2.0.',
          deepConcept: 'Pepsin is active in acidic pH. Alkaline pH denatures it. This protects mucosa from self-digestion.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Pepsin digests:',
            options: [
              { id: 'a', text: 'Carbohydrates', correct: false },
              { id: 'b', text: 'Proteins', correct: true },
              { id: 'c', text: 'Fats', correct: false },
              { id: 'd', text: 'Vitamins', correct: false }
            ],
            explanation: 'Pepsin is a protease that breaks peptide bonds in proteins.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Why doesn\'t the stomach digest itself?',
            options: [
              { id: 'a', text: 'No enzymes', correct: false },
              { id: 'b', text: 'Mucus layer', correct: true },
              { id: 'c', text: 'Low temperature', correct: false },
              { id: 'd', text: 'No protein', correct: false }
            ],
            explanation: 'Mucus protects gastric mucosa from acid and pepsin.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Pepsin is active at:',
            options: [
              { id: 'a', text: 'pH 7.0', correct: false },
              { id: 'b', text: 'pH 2.0', correct: true },
              { id: 'c', text: 'pH 8.5', correct: false },
              { id: 'd', text: 'pH 5.0', correct: false }
            ],
            explanation: 'Pepsin works best at pH 1.8-2.0. It becomes inactive at neutral/alkaline pH.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The inactive form of pepsin is ______',
            answer: 'pepsinogen',
            acceptableAnswers: ['pepsinogen', 'propepsin'],
            explanation: 'Chief cells secrete inactive pepsinogen which HCl converts to active pepsin.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain pepsin activation and protein digestion in the stomach',
            hint: 'Discuss pepsinogen, HCl activation, protein breakdown, and why pepsin works only in acid...',
            keywords: ['pepsinogen', 'pepsin', 'HCl', 'acid', 'protein', 'peptides', 'activation', 'pH']
          }
        ]
      },
      {
        id: 'm3-test',
        title: 'Module 3 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Gastric lipase digests:',
            options: [
              { id: 'a', text: 'All fats', correct: false },
              { id: 'b', text: 'Short-chain fats only', correct: true },
              { id: 'c', text: 'Proteins', correct: false },
              { id: 'd', text: 'Carbohydrates', correct: false }
            ],
            explanation: 'Gastric lipase acts only on short-chain triglycerides (butterfat), not long-chain fats.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Rennin is found in:',
            options: [
              { id: 'a', text: 'Adults', correct: false },
              { id: 'b', text: 'Infants', correct: true },
              { id: 'c', text: 'Elderly only', correct: false },
              { id: 'd', text: 'Sick adults', correct: false }
            ],
            explanation: 'Rennin (chymosin) curdles milk in infants. Adults have very little rennin.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain how the stomach protects itself from autodigestion',
            hint: 'Discuss mucus barrier, tight junctions, acid location, enzyme activation...',
            keywords: ['mucus', 'bicarbonate', 'tight junctions', 'pepsinogen', 'acid', 'protection', 'gastric mucosa']
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Small Intestine — Digestion Hub',
    icon: '🌀',
    color: '#1cb0f6',
    levels: [
      {
        id: 'm4-l1',
        title: 'Structure & Regions',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Small intestine has 3 parts: Duodenum (25cm), Jejunum (2.5m), Ileum (3.5m). Total ~6-9m.',
          deepConcept: 'Duodenum receives chyme, bile, pancreatic juice. Ileum has Peyers patches (immunity) and absorbs B12.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'The longest part of small intestine:',
            options: [
              { id: 'a', text: 'Duodenum', correct: false },
              { id: 'b', text: 'Jejunum', correct: false },
              { id: 'c', text: 'Ileum', correct: true },
              { id: 'd', text: 'All equal', correct: false }
            ],
            explanation: 'Ileum is the longest (about 3.5m), followed by jejunum (2.5m), then duodenum (25cm).'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Which part receives bile and pancreatic juice?',
            options: [
              { id: 'a', text: 'Stomach', correct: false },
              { id: 'b', text: 'Duodenum', correct: true },
              { id: 'c', text: 'Ileum', correct: false },
              { id: 'd', text: 'Colon', correct: false }
            ],
            explanation: 'The hepatopancreatic ampulla opens into the duodenum, delivering bile and pancreatic juice.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Peyers patches are found in:',
            options: [
              { id: 'a', text: 'Duodenum', correct: false },
              { id: 'b', text: 'Jejunum', correct: false },
              { id: 'c', text: 'Ileum', correct: true },
              { id: 'd', text: 'Stomach', correct: false }
            ],
            explanation: 'Peyers patches are lymphoid tissue in ileum for immune protection against gut bacteria.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Small intestine is about ______ meters long',
            answer: '6',
            acceptableAnswers: ['6', '6-9', '7', '8', '9', 'six'],
            explanation: 'The small intestine is about 6-9 meters long in an adult.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Describe the three regions of the small intestine and their functions',
            hint: 'Discuss duodenum, jejunum, ileum lengths, functions, and special features...',
            keywords: ['duodenum', 'jejunum', 'ileum', 'bile', 'pancreatic', 'absorption', 'Peyers patches', 'B12']
          }
        ]
      },
      {
        id: 'm4-l2',
        title: 'Pancreatic Enzymes',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Pancreas secretes trypsin, chymotrypsin, carboxypeptidase, amylase, lipase.',
          deepConcept: 'Trypsinogen is activated by enterokinase in duodenum. Trypsin then activates other enzymes.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Trypsin digests:',
            options: [
              { id: 'a', text: 'Carbohydrates', correct: false },
              { id: 'b', text: 'Proteins', correct: true },
              { id: 'c', text: 'Fats', correct: false },
              { id: 'd', text: 'Nucleic acids', correct: false }
            ],
            explanation: 'Trypsin is a pancreatic protease that breaks proteins into peptides.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'What activates trypsinogen?',
            options: [
              { id: 'a', text: 'Pepsin', correct: false },
              { id: 'b', text: 'Enterokinase', correct: true },
              { id: 'c', text: 'HCl', correct: false },
              { id: 'd', text: 'Bile', correct: false }
            ],
            explanation: 'Enterokinase (enteropeptidase) from intestinal cells activates trypsinogen to trypsin.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which pancreatic enzyme is secreted in active form?',
            options: [
              { id: 'a', text: 'Trypsin', correct: false },
              { id: 'b', text: 'Amylase', correct: true },
              { id: 'c', text: 'Chymotrypsin', correct: false },
              { id: 'd', text: 'Carboxypeptidase', correct: false }
            ],
            explanation: 'Pancreatic amylase is secreted active. Proteases are secreted inactive to prevent pancreas autodigestion.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: '______ activates trypsinogen in the duodenum',
            answer: 'enterokinase',
            acceptableAnswers: ['enterokinase', 'enteropeptidase'],
            explanation: 'Enterokinase is an enzyme from intestinal brush border that activates trypsinogen.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the pancreatic enzyme activation cascade',
            hint: 'Start with enterokinase, then trypsin activating other zymogens...',
            keywords: ['enterokinase', 'trypsinogen', 'trypsin', 'chymotrypsin', 'carboxypeptidase', 'activation', 'cascade']
          }
        ]
      },
      {
        id: 'm4-l3',
        title: 'Intestinal Juice',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Succus entericus (intestinal juice) contains enzymes from brush border: maltase, lactase, sucrase, dipeptidases.',
          deepConcept: 'These enzymes complete final digestion at the brush border membrane for immediate absorption.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Succus entericus is secreted by:',
            options: [
              { id: 'a', text: 'Liver', correct: false },
              { id: 'b', text: 'Pancreas', correct: false },
              { id: 'c', text: 'Intestinal glands', correct: true },
              { id: 'd', text: 'Stomach', correct: false }
            ],
            explanation: 'Crypts of Lieberkuhn in the small intestine secrete succus entericus.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Lactase deficiency causes:',
            options: [
              { id: 'a', text: 'Diabetes', correct: false },
              { id: 'b', text: 'Lactose intolerance', correct: true },
              { id: 'c', text: 'Celiac disease', correct: false },
              { id: 'd', text: 'Jaundice', correct: false }
            ],
            explanation: 'Without lactase, lactose cannot be digested, causing lactose intolerance symptoms.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Brush border enzymes are:',
            options: [
              { id: 'a', text: 'Secreted into lumen', correct: false },
              { id: 'b', text: 'Membrane-bound', correct: true },
              { id: 'c', text: 'Found in pancreas', correct: false },
              { id: 'd', text: 'Absent in adults', correct: false }
            ],
            explanation: 'Brush border enzymes are membrane-bound on microvilli for contact digestion.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Intestinal juice is also called ______',
            answer: 'succus entericus',
            acceptableAnswers: ['succus entericus', 'succus', 'entericus'],
            explanation: 'Succus entericus is the Latin name for intestinal juice containing various enzymes.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the role of intestinal juice in final digestion',
            hint: 'Discuss succus entericus, brush border enzymes, and contact digestion...',
            keywords: ['succus entericus', 'intestinal juice', 'brush border', 'maltase', 'lactase', 'sucrase', 'contact digestion']
          }
        ]
      },
      {
        id: 'm4-test',
        title: 'Module 4 Test',
        type: 'test',
        xp: 30,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'The pH in duodenum is neutralized by:',
            options: [
              { id: 'a', text: 'Bicarbonate in bile', correct: false },
              { id: 'b', text: 'Bicarbonate in pancreatic juice', correct: true },
              { id: 'c', text: 'HCl', correct: false },
              { id: 'd', text: 'Pepsin', correct: false }
            ],
            explanation: 'Pancreatic bicarbonate neutralizes acidic chyme from stomach, protecting enzymes and mucosa.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Starch digestion completes in:',
            options: [
              { id: 'a', text: 'Mouth', correct: false },
              { id: 'b', text: 'Stomach', correct: false },
              { id: 'c', text: 'Small intestine', correct: true },
              { id: 'd', text: 'Large intestine', correct: false }
            ],
            explanation: 'Salivary amylase stops in stomach. Pancreatic amylase completes starch digestion in small intestine.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which enzyme acts on peptides in small intestine?',
            options: [
              { id: 'a', text: 'Pepsin', correct: false },
              { id: 'b', text: 'Trypsin', correct: true },
              { id: 'c', text: 'Amylase', correct: false },
              { id: 'd', text: 'Lipase', correct: false }
            ],
            explanation: 'Trypsin, chymotrypsin, and carboxypeptidase from pancreas digest proteins and peptides in small intestine.'
          },
          {
            id: 4,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain why the small intestine is called the major digestion hub',
            hint: 'Discuss all enzymes involved, pH changes, surface area, and absorption features...',
            keywords: ['pancreatic enzymes', 'bile', 'intestinal juice', 'pH', 'neutralization', 'villi', 'microvilli', 'surface area']
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Liver, Bile & Fat Digestion',
    icon: '⚗️',
    color: '#ffc800',
    levels: [
      {
        id: 'm5-l1',
        title: 'Bile Production & Storage',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Liver produces bile (500-1000ml/day). Stored in gallbladder, concentrated 5-10x.',
          deepConcept: 'Bile contains bile salts, pigments (bilirubin), cholesterol, phospholipids. No enzymes!'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Bile is stored in:',
            options: [
              { id: 'a', text: 'Liver', correct: false },
              { id: 'b', text: 'Gallbladder', correct: true },
              { id: 'c', text: 'Pancreas', correct: false },
              { id: 'd', text: 'Duodenum', correct: false }
            ],
            explanation: 'Liver produces bile, but gallbladder stores and concentrates it.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Bile contains:',
            options: [
              { id: 'a', text: 'Digestive enzymes', correct: false },
              { id: 'b', text: 'Bile salts only', correct: false },
              { id: 'c', text: 'Bile salts, pigments, cholesterol', correct: true },
              { id: 'd', text: 'HCl', correct: false }
            ],
            explanation: 'Bile contains bile salts, bilirubin, cholesterol, phospholipids. NO enzymes!'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Bilirubin in bile comes from:',
            options: [
              { id: 'a', text: 'Diet', correct: false },
              { id: 'b', text: 'Breakdown of hemoglobin', correct: true },
              { id: 'c', text: 'Liver cells only', correct: false },
              { id: 'd', text: 'Bacteria', correct: false }
            ],
            explanation: 'Bilirubin is formed from heme breakdown of old RBCs, processed by liver.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Bile is produced by the ______',
            answer: 'liver',
            acceptableAnswers: ['liver', 'hepatocytes'],
            explanation: 'Hepatocytes (liver cells) continuously produce bile which is then stored.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain bile production, storage, and composition',
            hint: 'Discuss liver production, gallbladder concentration, bile components...',
            keywords: ['liver', 'gallbladder', 'bile salts', 'bilirubin', 'cholesterol', 'hepatocytes', 'concentration']
          }
        ]
      },
      {
        id: 'm5-l2',
        title: 'Emulsification & Fat Digestion',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Bile salts emulsify fats: break large droplets into tiny ones, increasing surface area for lipase.',
          deepConcept: 'Emulsification is physical, not chemical. Lipase then breaks ester bonds (chemical).'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Emulsification is:',
            options: [
              { id: 'a', text: 'Chemical digestion', correct: false },
              { id: 'b', text: 'Physical breakdown', correct: true },
              { id: 'c', text: 'Absorption', correct: false },
              { id: 'd', text: 'Assimilation', correct: false }
            ],
            explanation: 'Emulsification is mechanical - breaking large fat droplets into smaller ones.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Bile helps fat digestion by:',
            options: [
              { id: 'a', text: 'Digesting fats', correct: false },
              { id: 'b', text: 'Emulsifying fats', correct: true },
              { id: 'c', text: 'Making lipase', correct: false },
              { id: 'd', text: 'Absorbing fats', correct: false }
            ],
            explanation: 'Bile does NOT digest fats. It emulsifies them for lipase to act.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Why fat digestion is slow without bile?',
            options: [
              { id: 'a', text: 'No lipase', correct: false },
              { id: 'b', text: 'Low surface area', correct: true },
              { id: 'c', text: 'High pH', correct: false },
              { id: 'd', text: 'No enzymes', correct: false }
            ],
            explanation: 'Without emulsification, fats have very low surface area, making lipase action very slow.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: '______ breaks fats into tiny droplets',
            answer: 'emulsification',
            acceptableAnswers: ['emulsification', 'bile', 'bile salts'],
            explanation: 'Bile salts cause emulsification - the physical breakdown of fat droplets.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the role of bile in fat digestion and absorption',
            hint: 'Discuss emulsification vs digestion, micelle formation, and why bile is essential...',
            keywords: ['emulsification', 'micelles', 'lipase', 'surface area', 'absorption', 'bile salts', 'triglycerides']
          }
        ]
      },
      {
        id: 'm5-test',
        title: 'Module 5 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Bile is released when:',
            options: [
              { id: 'a', text: 'Seeing food', correct: false },
              { id: 'b', text: 'Fat enters duodenum', correct: true },
              { id: 'c', text: 'Protein enters', correct: false },
              { id: 'd', text: 'Always flowing', correct: false }
            ],
            explanation: 'Hormone CCK (cholecystokinin) triggers bile release when fat enters duodenum.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Obstruction of bile duct causes:',
            options: [
              { id: 'a', text: 'Diabetes', correct: false },
              { id: 'b', text: 'Jaundice', correct: true },
              { id: 'c', text: 'Diarrhea', correct: false },
              { id: 'd', text: 'Constipation', correct: false }
            ],
            explanation: 'Blocked bile duct causes bilirubin to accumulate in blood, causing jaundice.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain why bile is essential for fat digestion but contains no enzymes',
            hint: 'Contrast emulsification vs hydrolysis, surface area importance...',
            keywords: ['emulsification', 'lipase', 'surface area', 'micelles', 'physical', 'chemical', 'digestion']
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Absorption & Assimilation',
    icon: '💧',
    color: '#ce82ff',
    levels: [
      {
        id: 'm6-l1',
        title: 'Villi & Microvilli',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Villi are finger-like projections. Microvilli form brush border. Increases surface area 600x.',
          deepConcept: 'Each villus has blood capillaries and lacteal (lymph vessel). Absorbed nutrients enter circulation here.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Villi are found in:',
            options: [
              { id: 'a', text: 'Stomach', correct: false },
              { id: 'b', text: 'Small intestine', correct: true },
              { id: 'c', text: 'Large intestine', correct: false },
              { id: 'd', text: 'Esophagus', correct: false }
            ],
            explanation: 'Villi and microvilli in the small intestine dramatically increase absorption surface area.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Microvilli are found on:',
            options: [
              { id: 'a', text: 'Mucosal cells', correct: true },
              { id: 'b', text: 'Muscle cells', correct: false },
              { id: 'c', text: 'Nerve cells', correct: false },
              { id: 'd', text: 'Blood cells', correct: false }
            ],
            explanation: 'Microvilli are on the apical surface of intestinal epithelial (mucosal) cells.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Surface area increase by villi + microvilli:',
            options: [
              { id: 'a', text: '10x', correct: false },
              { id: 'b', text: '100x', correct: false },
              { id: 'c', text: '600x', correct: true },
              { id: 'd', text: '1000x', correct: false }
            ],
            explanation: 'Folds of Kerckring (3x) + villi (10x) + microvilli (20x) = 600x surface area increase.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Finger-like projections in small intestine are called ______',
            answer: 'villi',
            acceptableAnswers: ['villi', 'villus'],
            explanation: 'Villi dramatically increase the surface area for absorption in the small intestine.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the structure of villi and how they maximize absorption',
            hint: 'Discuss villi structure, microvilli, blood capillaries, lacteals, surface area multiplication...',
            keywords: ['villi', 'microvilli', 'brush border', 'surface area', 'capillaries', 'lacteal', 'absorption']
          }
        ]
      },
      {
        id: 'm6-l2',
        title: 'Transport Mechanisms',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Glucose, amino acids → active transport → blood. Fatty acids, glycerol → passive → lymph (lacteals).',
          deepConcept: 'Active transport uses carriers and ATP against gradient. Facilitated diffusion uses carriers but no ATP.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Glucose is absorbed by:',
            options: [
              { id: 'a', text: 'Simple diffusion', correct: false },
              { id: 'b', text: 'Active transport', correct: true },
              { id: 'c', text: 'Osmosis', correct: false },
              { id: 'd', text: 'Filtration', correct: false }
            ],
            explanation: 'Glucose absorption uses Na+-glucose cotransporter (secondary active transport).'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Fructose absorption:',
            options: [
              { id: 'a', text: 'Active transport', correct: false },
              { id: 'b', text: 'Facilitated diffusion', correct: true },
              { id: 'c', text: 'Simple diffusion', correct: false },
              { id: 'd', text: 'Osmosis', correct: false }
            ],
            explanation: 'Fructose uses GLUT5 transporter (facilitated diffusion), unlike glucose (active transport).'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Fats enter:',
            options: [
              { id: 'a', text: 'Blood directly', correct: false },
              { id: 'b', text: 'Lymph via lacteals', correct: true },
              { id: 'c', text: 'Interstitial fluid only', correct: false },
              { id: 'd', text: 'Bile duct', correct: false }
            ],
            explanation: 'Fatty acids reform triglycerides, form chylomicrons, enter lymph lacteals, then blood.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Amino acids are absorbed by ______ transport',
            answer: 'active',
            acceptableAnswers: ['active', 'active transport'],
            explanation: 'Amino acids use active transport (with Na+) against concentration gradient.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the different absorption mechanisms for nutrients',
            hint: 'Discuss active transport for glucose/amino acids, facilitated diffusion for fructose, lymph for fats...',
            keywords: ['active transport', 'facilitated diffusion', 'simple diffusion', 'glucose', 'amino acids', 'fructose', 'fats', 'lacteals', 'lymph']
          }
        ]
      },
      {
        id: 'm6-test',
        title: 'Module 6 Test',
        type: 'test',
        xp: 30,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Chylomicrons contain:',
            options: [
              { id: 'a', text: 'Glucose', correct: false },
              { id: 'b', text: 'Triglycerides', correct: true },
              { id: 'c', text: 'Amino acids', correct: false },
              { id: 'd', text: 'Vitamins', correct: false }
            ],
            explanation: 'Chylomicrons are lipoprotein particles that transport dietary triglycerides in lymph.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which uses ATP directly?',
            options: [
              { id: 'a', text: 'Facilitated diffusion', correct: false },
              { id: 'b', text: 'Active transport', correct: true },
              { id: 'c', text: 'Simple diffusion', correct: false },
              { id: 'd', text: 'Osmosis', correct: false }
            ],
            explanation: 'Active transport uses ATP to move substances against concentration gradient.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Lacteals are part of:',
            options: [
              { id: 'a', text: 'Blood circulation', correct: false },
              { id: 'b', text: 'Lymphatic system', correct: true },
              { id: 'c', text: 'Nervous system', correct: false },
              { id: 'd', text: 'Excretory system', correct: false }
            ],
            explanation: 'Lacteals are lymph capillaries in villi that absorb dietary fats.'
          },
          {
            id: 4,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the complete journey of absorbed nutrients from intestine to body cells',
            hint: 'Discuss villi absorption, blood vs lymph routes, transport to liver, distribution...',
            keywords: ['villi', 'capillaries', 'lacteals', 'lymph', 'blood', 'liver', 'portal vein', 'hepatic', 'circulation']
          }
        ]
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Large Intestine & Egestion',
    icon: '🚽',
    color: '#8b5a2b',
    levels: [
      {
        id: 'm7-l1',
        title: 'Colon Structure & Function',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Large intestine (1.5m) absorbs water, electrolytes, and houses bacteria. Forms feces.',
          deepConcept: 'Colon has caecum, colon (ascending, transverse, descending, sigmoid), rectum, anus. No villi.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'The large intestine is about:',
            options: [
              { id: 'a', text: '3 meters', correct: false },
              { id: 'b', text: '1.5 meters', correct: true },
              { id: 'c', text: '6 meters', correct: false },
              { id: 'd', text: '9 meters', correct: false }
            ],
            explanation: 'The large intestine is about 1.5 meters long, much shorter than the small intestine (6-9m).'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Villi are present in:',
            options: [
              { id: 'a', text: 'Small intestine', correct: true },
              { id: 'b', text: 'Large intestine', correct: false }
            ],
            explanation: 'The large intestine lacks villi. It has flat mucosa with crypts only.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Haustral contractions occur in:',
            options: [
              { id: 'a', text: 'Small intestine', correct: false },
              { id: 'b', text: 'Large intestine', correct: true },
              { id: 'c', text: 'Stomach', correct: false },
              { id: 'd', text: 'Esophagus', correct: false }
            ],
            explanation: 'Haustral contractions are unique to the colon, mixing contents and aiding water absorption.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The vermiform appendix is attached to the ______',
            answer: 'caecum',
            acceptableAnswers: ['caecum', 'cecum'],
            explanation: 'The appendix is a small, finger-shaped pouch attached to the caecum.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the structure of the large intestine and its differences from the small intestine',
            hint: 'Discuss parts, length, villi, bacteria, and main functions...',
            keywords: ['caecum', 'colon', 'rectum', 'anus', 'water absorption', 'bacteria', 'villi', 'crypts']
          }
        ]
      },
      {
        id: 'm7-l2',
        title: 'Bacterial Flora & Egestion',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Gut bacteria synthesize B vitamins, vitamin K, and break down cellulose. Feces = undigested matter + bacteria.',
          deepConcept: 'Feces consist of water (70%), bacteria (30% dry weight), undigested fiber, bile pigments, dead cells.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Gut bacteria synthesize:',
            options: [
              { id: 'a', text: 'Vitamin C', correct: false },
              { id: 'b', text: 'Vitamin K', correct: true },
              { id: 'c', text: 'Vitamin D', correct: false },
              { id: 'd', text: 'Iron', correct: false }
            ],
            explanation: 'Colonic bacteria synthesize vitamin K and some B vitamins that we absorb.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'The brown color of feces comes from:',
            options: [
              { id: 'a', text: 'Food pigments', correct: false },
              { id: 'b', text: 'Bilirubin breakdown', correct: true },
              { id: 'c', text: 'Bacteria', correct: false },
              { id: 'd', text: 'Blood', correct: false }
            ],
            explanation: 'Stercobilin (from bilirubin breakdown by bacteria) gives feces its brown color.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Defecation reflex involves:',
            options: [
              { id: 'a', text: 'Voluntary control only', correct: false },
              { id: 'b', text: 'Involuntary reflex + voluntary control', correct: true },
              { id: 'c', text: 'Only involuntary', correct: false },
              { id: 'd', text: 'Hormonal control', correct: false }
            ],
            explanation: 'The defecation reflex is involuntary (spinal reflex), but external sphincter control is voluntary.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Feces are stored in the ______ before egestion',
            answer: 'rectum',
            acceptableAnswers: ['rectum'],
            explanation: 'The rectum stores feces until the defecation reflex triggers elimination.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the role of gut bacteria and the process of egestion',
            hint: 'Discuss bacterial functions, feces composition, and the defecation reflex...',
            keywords: ['bacteria', 'vitamin K', 'cellulose', 'feces', 'bilirubin', 'stercobilin', 'defecation', 'reflex']
          }
        ]
      },
      {
        id: 'm7-test',
        title: 'Module 7 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Most water absorption occurs in:',
            options: [
              { id: 'a', text: 'Small intestine', correct: false },
              { id: 'b', text: 'Large intestine', correct: false },
              { id: 'c', text: 'Both equally', correct: false },
              { id: 'd', text: 'Most in small, remaining in large', correct: true }
            ],
            explanation: 'Most water (90%) is absorbed in small intestine. Large intestine absorbs remaining ~10%.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Goblet cells are most numerous in:',
            options: [
              { id: 'a', text: 'Stomach', correct: false },
              { id: 'b', text: 'Small intestine', correct: false },
              { id: 'c', text: 'Large intestine', correct: true },
              { id: 'd', text: 'Esophagus', correct: false }
            ],
            explanation: 'Large intestine has the highest density of goblet cells for mucus secretion to lubricate feces.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the formation and composition of feces',
            hint: 'Discuss water content, bacteria, undigested matter, bile pigments, and mucus...',
            keywords: ['water', 'bacteria', 'cellulose', 'bilirubin', 'stercobilin', 'mucus', 'epithelial cells']
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    title: 'Digestive Enzymes — Complete Map',
    icon: '🧬',
    color: '#ce82ff',
    levels: [
      {
        id: 'm8-l1',
        title: 'Carbohydrate Enzymes',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Carbohydrate enzymes: Amylase (mouth, pancreas), Maltase, Lactase, Sucrase, Isomaltase (small intestine).',
          deepConcept: 'Each enzyme is specific: amylase for starch, specific disaccharidases for each sugar.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Which enzyme breaks maltose?',
            options: [
              { id: 'a', text: 'Lactase', correct: false },
              { id: 'b', text: 'Maltase', correct: true },
              { id: 'c', text: 'Sucrase', correct: false },
              { id: 'd', text: 'Amylase', correct: false }
            ],
            explanation: 'Maltase specifically breaks maltose (glucose-glucose) into glucose.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Lactase deficiency causes inability to digest:',
            options: [
              { id: 'a', text: 'Milk sugar', correct: true },
              { id: 'b', text: 'Table sugar', correct: false },
              { id: 'c', text: 'Starch', correct: false },
              { id: 'd', text: 'Protein', correct: false }
            ],
            explanation: 'Lactase digests lactose (milk sugar). Deficiency causes lactose intolerance.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Final enzyme in starch digestion:',
            options: [
              { id: 'a', text: 'Amylase', correct: false },
              { id: 'b', text: 'Maltase', correct: true },
              { id: 'c', text: 'Sucrase', correct: false },
              { id: 'd', text: 'Isomaltase', correct: false }
            ],
            explanation: 'Amylase produces maltose. Maltase at brush border completes digestion to glucose.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: '______ breaks down lactose into glucose and galactose',
            answer: 'lactase',
            acceptableAnswers: ['lactase'],
            explanation: 'Lactase is the brush border enzyme that digests lactose (milk sugar).'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Trace the complete digestion of starch from mouth to absorption',
            hint: 'List all enzymes involved at each stage and their specific actions...',
            keywords: ['salivary amylase', 'pancreatic amylase', 'maltase', 'isomaltase', 'brush border', 'glucose']
          }
        ]
      },
      {
        id: 'm8-l2',
        title: 'Protein & Fat Enzymes',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Proteins: Pepsin (stomach), Trypsin, Chymotrypsin, Carboxypeptidase (pancreas). Fats: Lipases.',
          deepConcept: 'Proteases are secreted as zymogens (inactive) to prevent self-digestion. Activated in gut.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Pepsin is active in:',
            options: [
              { id: 'a', text: 'Alkaline pH', correct: false },
              { id: 'b', text: 'Acidic pH', correct: true },
              { id: 'c', text: 'Neutral pH', correct: false },
              { id: 'd', text: 'Any pH', correct: false }
            ],
            explanation: 'Pepsin is a gastric protease that requires acidic pH (1.8-2) for activity.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Which enzyme is NOT a protease?',
            options: [
              { id: 'a', text: 'Trypsin', correct: false },
              { id: 'b', text: 'Lipase', correct: true },
              { id: 'c', text: 'Pepsin', correct: false },
              { id: 'd', text: 'Chymotrypsin', correct: false }
            ],
            explanation: 'Lipase digests fats, not proteins. Trypsin, pepsin, and chymotrypsin are proteases.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Zymogens are converted to active enzymes by:',
            options: [
              { id: 'a', text: 'Hydrolysis of a peptide bond', correct: true },
              { id: 'b', text: 'Adding a phosphate group', correct: false },
              { id: 'c', text: 'Oxidation', correct: false },
              { id: 'd', text: 'Reduction', correct: false }
            ],
            explanation: 'Zymogen activation involves cutting off a peptide fragment by hydrolysis.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The enzyme that digests fats is ______',
            answer: 'lipase',
            acceptableAnswers: ['lipase', 'pancreatic lipase', 'gastric lipase'],
            explanation: 'Lipases break down triglycerides into fatty acids and glycerol.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain why proteases are secreted as inactive zymogens',
            hint: 'Discuss autodigestion risk, activation mechanisms, and examples...',
            keywords: ['zymogens', 'autodigestion', 'pepsinogen', 'trypsinogen', 'activation', 'pancreas', 'protection']
          }
        ]
      },
      {
        id: 'm8-test',
        title: 'Module 8 Test',
        type: 'test',
        xp: 30,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Which enzyme completes protein digestion?',
            options: [
              { id: 'a', text: 'Trypsin', correct: false },
              { id: 'b', text: 'Dipeptidase', correct: true },
              { id: 'c', text: 'Pepsin', correct: false },
              { id: 'd', text: 'Chymotrypsin', correct: false }
            ],
            explanation: 'Dipeptidases and aminopeptidases at brush border break peptides to amino acids.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Nucleases digest:',
            options: [
              { id: 'a', text: 'Proteins', correct: false },
              { id: 'b', text: 'Carbohydrates', correct: false },
              { id: 'c', text: 'Nucleic acids', correct: true },
              { id: 'd', text: 'Fats', correct: false }
            ],
            explanation: 'Nucleases (DNAse, RNAse) from pancreas digest nucleic acids to nucleotides.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Enterokinase is:',
            options: [
              { id: 'a', text: 'A digestive enzyme', correct: false },
              { id: 'b', text: 'An enzyme activator', correct: true },
              { id: 'c', text: 'A hormone', correct: false },
              { id: 'd', text: 'An absorption carrier', correct: false }
            ],
            explanation: 'Enterokinase activates trypsinogen; it does not directly digest food.'
          },
          {
            id: 4,
            type: 'voice',
            difficulty: 'deep',
            question: 'Summarize all digestive enzymes, their sources, substrates, and products',
            hint: 'Organize by nutrient type and location in digestive tract...',
            keywords: ['carbohydrases', 'proteases', 'lipases', 'nucleases', 'source', 'substrate', 'product', 'pancreas', 'stomach', 'intestine']
          }
        ]
      }
    ]
  },
  {
    id: 'module-9',
    title: 'Regulation of Digestion',
    icon: '🧠',
    color: '#ff6b9d',
    levels: [
      {
        id: 'm9-l1',
        title: 'Hormonal Control',
        type: 'mixed',
        xp: 20,
        theory: {
          concept: 'Gastrin (stomach acid), Secretin (pancreatic bicarbonate), CCK (enzymes & bile).',
          deepConcept: 'Hormones are released by enteroendocrine cells in response to food components.'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Gastrin stimulates:',
            options: [
              { id: 'a', text: 'Pancreatic enzymes', correct: false },
              { id: 'b', text: 'Gastric acid secretion', correct: true },
              { id: 'c', text: 'Bile release', correct: false },
              { id: 'd', text: 'Insulin', correct: false }
            ],
            explanation: 'Gastrin from G cells stimulates HCl secretion by parietal cells.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Secretin is released when:',
            options: [
              { id: 'a', text: 'Protein enters stomach', correct: false },
              { id: 'b', text: 'Acid enters duodenum', correct: true },
              { id: 'c', text: 'Fat enters ileum', correct: false },
              { id: 'd', text: 'Food enters mouth', correct: false }
            ],
            explanation: 'Secretin responds to acidic chyme entering duodenum, triggering bicarbonate release.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'CCK (Cholecystokinin) causes:',
            options: [
              { id: 'a', text: 'Gallbladder contraction', correct: false },
              { id: 'b', text: 'Pancreatic enzyme secretion', correct: false },
              { id: 'c', text: 'Both A and B', correct: true },
              { id: 'd', text: 'Neither', correct: false }
            ],
            explanation: 'CCK stimulates both gallbladder contraction (bile release) and pancreatic enzyme secretion.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The hormone that stimulates bicarbonate secretion is ______',
            answer: 'secretin',
            acceptableAnswers: ['secretin'],
            explanation: 'Secretin is the hormone that triggers pancreatic bicarbonate release to neutralize acid.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the hormonal regulation of digestion using gastrin, secretin, and CCK',
            hint: 'Discuss release triggers, target organs, and effects of each hormone...',
            keywords: ['gastrin', 'secretin', 'CCK', 'cholecystokinin', 'acid', 'enzymes', 'bicarbonate', 'bile']
          }
        ]
      },
      {
        id: 'm9-l2',
        title: 'Neural Control',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Parasympathetic (vagus) stimulates digestion. Sympathetic inhibits it. Local reflexes coordinate.',
          deepConcept: 'Cephalic phase (sight/smell), gastric phase (stomach distension), intestinal phase (nutrients).'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'The vagus nerve stimulates:',
            options: [
              { id: 'a', text: 'Decreased digestion', correct: false },
              { id: 'b', text: 'Increased digestion', correct: true },
              { id: 'c', text: 'Only gastric emptying', correct: false },
              { id: 'd', text: 'Bile production', correct: false }
            ],
            explanation: 'Parasympathetic (vagus) stimulation increases gastric secretions and motility.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Cephalic phase begins:',
            options: [
              { id: 'a', text: 'When food enters stomach', correct: false },
              { id: 'b', text: 'When food is swallowed', correct: false },
              { id: 'c', text: 'At sight/smell of food', correct: true },
              { id: 'd', text: 'When digestion completes', correct: false }
            ],
            explanation: 'Cephalic phase is triggered by sensory input (sight, smell) before food enters mouth.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Gastric emptying is slowed by:',
            options: [
              { id: 'a', text: 'Gastrin', correct: false },
              { id: 'b', text: 'Enterogastric reflex', correct: true },
              { id: 'c', text: 'Vagus stimulation', correct: false },
              { id: 'd', text: 'Cephalic phase', correct: false }
            ],
            explanation: 'Enterogastric reflex (duodenal distension/fat/acidity) inhibits gastric emptying.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'The ______ nervous system inhibits digestion during stress',
            answer: 'sympathetic',
            acceptableAnswers: ['sympathetic', 'sympathetic nervous system'],
            explanation: 'Sympathetic stimulation (fight or flight) inhibits digestive activity.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the three phases of digestion regulation',
            hint: 'Discuss cephalic, gastric, and intestinal phases with triggers and responses...',
            keywords: ['cephalic', 'gastric', 'intestinal', 'vagus', 'secretions', 'gastrin', 'CCK', 'reflexes']
          }
        ]
      },
      {
        id: 'm9-test',
        title: 'Module 9 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'GIP (Gastric Inhibitory Peptide) inhibits:',
            options: [
              { id: 'a', text: 'Gastric acid secretion', correct: true },
              { id: 'b', text: 'Pancreatic enzymes', correct: false },
              { id: 'c', text: 'Bile release', correct: false },
              { id: 'd', text: 'Insulin', correct: false }
            ],
            explanation: 'GIP inhibits gastric acid secretion when fat/glucose are in duodenum.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'The enteric nervous system is:',
            options: [
              { id: 'a', text: 'Part of CNS', correct: false },
              { id: 'b', text: 'Part of PNS controlling gut', correct: true },
              { id: 'c', text: 'Hormonal system', correct: false },
              { id: 'd', text: 'Immune system', correct: false }
            ],
            explanation: 'The enteric nervous system is the "gut brain" - part of PNS controlling GI tract.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Compare hormonal vs neural control of digestion with examples',
            hint: 'Discuss speed, duration, specificity, and integration of both systems...',
            keywords: ['hormones', 'nerves', 'gastrin', 'secretin', 'vagus', 'reflexes', 'speed', 'integration']
          }
        ]
      }
    ]
  },
  {
    id: 'module-10',
    title: 'Disorders & Clinical Applications',
    icon: '⚠️',
    color: '#ff4b4b',
    levels: [
      {
        id: 'm10-l1',
        title: 'Jaundice & Liver Disorders',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Jaundice = bilirubin accumulation. Types: Pre-hepatic (hemolysis), Hepatic (liver damage), Post-hepatic (obstruction).',
          deepConcept: 'Hepatitis (viral inflammation), Cirrhosis (scarring), Liver failure (inability to detoxify).'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Jaundice is caused by:',
            options: [
              { id: 'a', text: 'Bile deficiency', correct: false },
              { id: 'b', text: 'Bilirubin accumulation', correct: true },
              { id: 'c', text: 'Excess enzymes', correct: false },
              { id: 'd', text: 'Lack of digestion', correct: false }
            ],
            explanation: 'Jaundice (yellowing) occurs when bilirubin accumulates in blood and tissues.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Obstructive jaundice causes:',
            options: [
              { id: 'a', text: 'Dark urine only', correct: false },
              { id: 'b', text: 'Pale stools only', correct: false },
              { id: 'c', text: 'Dark urine AND pale stools', correct: true },
              { id: 'd', text: 'Normal stools', correct: false }
            ],
            explanation: 'Bile obstruction prevents bilirubin from reaching intestine → pale stools. Backed-up bilirubin in blood → dark urine.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Hepatitis B is transmitted by:',
            options: [
              { id: 'a', text: 'Fecal-oral route', correct: false },
              { id: 'b', text: 'Blood and body fluids', correct: true },
              { id: 'c', text: 'Air', correct: false },
              { id: 'd', text: 'Water', correct: false }
            ],
            explanation: 'Hepatitis B is blood-borne (IV drug use, sexual contact, mother-to-child).'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: '______ is liver scarring from chronic damage',
            answer: 'cirrhosis',
            acceptableAnswers: ['cirrhosis'],
            explanation: 'Cirrhosis is irreversible scarring of the liver from chronic damage (alcohol, hepatitis).'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the three types of jaundice and their causes',
            hint: 'Discuss pre-hepatic, hepatic, and post-hepatic with examples...',
            keywords: ['pre-hepatic', 'hepatic', 'post-hepatic', 'hemolysis', 'obstruction', 'liver damage', 'bilirubin']
          }
        ]
      },
      {
        id: 'm10-l2',
        title: 'GI Tract Disorders',
        type: 'mixed',
        xp: 15,
        theory: {
          concept: 'Constipation (slow transit), Diarrhea (fast transit), Celiac disease (gluten intolerance), Lactose intolerance.',
          deepConcept: 'IBS (functional disorder), IBD (Crohns, ulcerative colitis - autoimmune), Peptic ulcers (H. pylori).'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'basic',
            question: 'Constipation is caused by:',
            options: [
              { id: 'a', text: 'Less water absorption', correct: false },
              { id: 'b', text: 'More water absorption', correct: true },
              { id: 'c', text: 'Fast peristalsis', correct: false },
              { id: 'd', text: 'Excess fiber', correct: false }
            ],
            explanation: 'Constipation results from excessive water absorption making feces hard and dry.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'trap',
            question: 'Peptic ulcers are mainly caused by:',
            options: [
              { id: 'a', text: 'Stress', correct: false },
              { id: 'b', text: 'H. pylori infection', correct: true },
              { id: 'c', text: 'Spicy food', correct: false },
              { id: 'd', text: 'Alcohol only', correct: false }
            ],
            explanation: 'H. pylori bacteria and NSAIDs are main causes. Stress and diet are minor factors.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Celiac disease involves:',
            options: [
              { id: 'a', text: 'Lactase deficiency', correct: false },
              { id: 'b', text: 'Gluten intolerance', correct: true },
              { id: 'c', text: 'Bacterial overgrowth', correct: false },
              { id: 'd', text: 'Viral infection', correct: false }
            ],
            explanation: 'Celiac disease is autoimmune damage to small intestine by gluten proteins.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'basic',
            question: 'Rapid movement causing less water absorption causes ______',
            answer: 'diarrhea',
            acceptableAnswers: ['diarrhea'],
            explanation: 'Diarrhea results from rapid transit preventing normal water absorption.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the difference between IBS and IBD',
            hint: 'Discuss functional vs inflammatory, symptoms, causes, and treatments...',
            keywords: ['IBS', 'IBD', 'functional', 'inflammatory', 'autoimmune', 'Crohns', 'ulcerative colitis']
          }
        ]
      },
      {
        id: 'm10-test',
        title: 'Module 10 Test',
        type: 'test',
        xp: 25,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'mixed',
            question: 'Achlorhydria means:',
            options: [
              { id: 'a', text: 'Excess acid', correct: false },
              { id: 'b', text: 'Absence of acid', correct: true },
              { id: 'c', text: 'Excess enzymes', correct: false },
              { id: 'd', text: 'No digestion', correct: false }
            ],
            explanation: 'Achlorhydria is absence of gastric acid secretion (HCl).'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Tropical sprue affects:',
            options: [
              { id: 'a', text: 'Liver only', correct: false },
              { id: 'b', text: 'Small intestine absorption', correct: true },
              { id: 'c', text: 'Large intestine', correct: false },
              { id: 'd', text: 'Stomach acid', correct: false }
            ],
            explanation: 'Tropical sprue is malabsorption syndrome affecting small intestine in tropical regions.'
          },
          {
            id: 3,
            type: 'voice',
            difficulty: 'deep',
            question: 'Discuss how digestive disorders can be diagnosed and treated',
            hint: 'Mention endoscopy, biopsy, blood tests, stool tests, dietary changes, medications...',
            keywords: ['endoscopy', 'biopsy', 'blood tests', 'stool tests', 'diet', 'medication', 'surgery']
          }
        ]
      }
    ]
  },
  {
    id: 'module-11',
    title: 'NEET Rapid Revision & Mixed Test',
    icon: '🏁',
    color: '#58cc02',
    levels: [
      {
        id: 'm11-l1',
        title: 'High-Yield Quick Review',
        type: 'mixed',
        xp: 25,
        theory: {
          concept: 'Key facts for NEET: pH values, enzyme sources, absorption sites, vitamin requirements.',
          deepConcept: 'Pattern recognition: Which organ? Which enzyme? Which pH? Active vs passive transport?'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Match: Pepsin - Acidic pH - Stomach. Trypsin - ? - ?',
            options: [
              { id: 'a', text: 'Acidic - Stomach', correct: false },
              { id: 'b', text: 'Alkaline - Small intestine', correct: true },
              { id: 'c', text: 'Neutral - Mouth', correct: false },
              { id: 'd', text: 'Acidic - Pancreas', correct: false }
            ],
            explanation: 'Trypsin is a pancreatic protease active in alkaline pH of small intestine.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which cell secretes HCl AND intrinsic factor?',
            options: [
              { id: 'a', text: 'Chief cell', correct: false },
              { id: 'b', text: 'Goblet cell', correct: false },
              { id: 'c', text: 'Parietal cell', correct: true },
              { id: 'd', text: 'Paneth cell', correct: false }
            ],
            explanation: 'Parietal cells secrete both HCl (for digestion) and intrinsic factor (for B12 absorption).'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Assertion: Bile is essential for fat digestion. Reason: Bile contains lipase.',
            options: [
              { id: 'a', text: 'Both true, R explains A', correct: false },
              { id: 'b', text: 'Both true, R does NOT explain A', correct: false },
              { id: 'c', text: 'A true, R false', correct: true },
              { id: 'd', text: 'Both false', correct: false }
            ],
            explanation: 'Bile IS essential (emulsification) but contains NO lipase. Lipase is from pancreas.'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'neet',
            question: 'The brush border enzyme that digests terminal amino acids from peptides is ______',
            answer: 'aminopeptidase',
            acceptableAnswers: ['aminopeptidase', 'dipeptidase'],
            explanation: 'Aminopeptidases remove amino acids from the amino end of peptides at brush border.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Rapid review: List all enzymes from mouth to anus with their sources and functions',
            hint: 'Systematically go through each digestive organ and list enzymes...',
            keywords: ['amylase', 'pepsin', 'lipase', 'trypsin', 'maltase', 'source', 'function', 'substrate']
          }
        ]
      },
      {
        id: 'm11-l2',
        title: 'Mixed Concept Challenge',
        type: 'mixed',
        xp: 30,
        theory: {
          concept: 'Integrated questions testing multiple concepts: digestion + absorption + regulation.',
          deepConcept: 'Clinical applications: What happens if X is blocked? What is the consequence of Y deficiency?'
        },
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'neet',
            question: 'If pancreatic duct is blocked, digestion of which nutrients is affected?',
            options: [
              { id: 'a', text: 'Proteins only', correct: false },
              { id: 'b', text: 'Fats only', correct: false },
              { id: 'c', text: 'Carbs and proteins only', correct: false },
              { id: 'd', text: 'All three macronutrients', correct: true }
            ],
            explanation: 'Pancreatic enzymes digest all three: amylase (carbs), proteases (proteins), lipase (fats).'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Gastrectomy patient needs supplementation of:',
            options: [
              { id: 'a', text: 'Vitamin A only', correct: false },
              { id: 'b', text: 'Vitamin B12', correct: true },
              { id: 'c', text: 'Vitamin D only', correct: false },
              { id: 'd', text: 'Vitamin C', correct: false }
            ],
            explanation: 'Stomach produces intrinsic factor needed for B12 absorption. Without stomach → B12 deficiency.'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Ileum removal causes malabsorption of:',
            options: [
              { id: 'a', text: 'Iron only', correct: false },
              { id: 'b', text: 'Bile acids and B12', correct: true },
              { id: 'c', text: 'Water only', correct: false },
              { id: 'd', text: 'Glucose', correct: false }
            ],
            explanation: 'Ileum absorbs B12 (with intrinsic factor) and reabsorbs bile acids (enterohepatic circulation).'
          },
          {
            id: 4,
            type: 'input',
            difficulty: 'neet',
            question: 'The enterohepatic circulation recycles ______ from ileum to liver',
            answer: 'bile acids',
            acceptableAnswers: ['bile acids', 'bile salts'],
            explanation: 'Bile acids are reabsorbed in ileum and returned to liver via portal blood (enterohepatic circulation).'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Explain the clinical consequences of removing different parts of the digestive system',
            hint: 'Discuss stomach, ileum, colon, pancreas, liver removals and their specific consequences...',
            keywords: ['gastrectomy', 'ileectomy', 'colectomy', 'pancreatectomy', 'hepatectomy', 'malabsorption', 'supplementation']
          }
        ]
      },
      {
        id: 'm11-final',
        title: 'Final NEET Simulation Test',
        type: 'test',
        xp: 50,
        questions: [
          {
            id: 1,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Which is a zymogen?',
            options: [
              { id: 'a', text: 'Pepsin', correct: false },
              { id: 'b', text: 'Trypsinogen', correct: true },
              { id: 'c', text: 'Amylase', correct: false },
              { id: 'd', text: 'Maltase', correct: false }
            ],
            explanation: 'Trypsinogen is the inactive zymogen. Trypsin is the active form.'
          },
          {
            id: 2,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Fructose absorption is via:',
            options: [
              { id: 'a', text: 'Active transport with Na+', correct: false },
              { id: 'b', text: 'Facilitated diffusion', correct: true },
              { id: 'c', text: 'Simple diffusion', correct: false },
              { id: 'd', text: 'Endocytosis', correct: false }
            ],
            explanation: 'Fructose uses GLUT5 (facilitated diffusion). Glucose uses SGLT1 (active transport).'
          },
          {
            id: 3,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Match list: 1. Gastric lipase 2. Pancreatic lipase 3. Lingual lipase - A. Active in acid B. Active in alkaline C. Minor fat digestion',
            options: [
              { id: 'a', text: '1-A, 2-B, 3-C', correct: false },
              { id: 'b', text: '1-C, 2-B, 3-A', correct: true },
              { id: 'c', text: '1-B, 2-A, 3-C', correct: false },
              { id: 'd', text: '1-A, 2-C, 3-B', correct: false }
            ],
            explanation: 'Gastric lipase does minor digestion; pancreatic lipase in alkaline; lingual lipase in acid (mouth).'
          },
          {
            id: 4,
            type: 'mcq',
            difficulty: 'neet',
            question: 'Crypts of Lieberkuhn are found in:',
            options: [
              { id: 'a', text: 'Stomach only', correct: false },
              { id: 'b', text: 'Small and large intestine', correct: true },
              { id: 'c', text: 'Esophagus', correct: false },
              { id: 'd', text: 'Pharynx', correct: false }
            ],
            explanation: 'Crypts of Lieberkuhn (intestinal glands) are in both small and large intestine.'
          },
          {
            id: 5,
            type: 'voice',
            difficulty: 'deep',
            question: 'Comprehensive review: Explain the complete digestion and absorption of a balanced meal containing carbohydrates, proteins, and fats',
            hint: 'Trace each nutrient through the entire digestive tract with all enzymes, pH changes, and absorption mechanisms...',
            keywords: ['mouth', 'stomach', 'small intestine', 'pancreas', 'liver', 'bile', 'villi', 'absorption', 'blood', 'lymph']
          }
        ]
      }
    ]
  }
]

export const getModuleById = (id) => modules.find(m => m.id === id)
export const getLevelById = (moduleId, levelId) => {
  const module = getModuleById(moduleId)
  return module?.levels.find(l => l.id === levelId)
}
