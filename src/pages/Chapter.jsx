import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from '../components/Icons'
import { getChapterById, getChapterQuestions } from '../data/biologyChapters'

function Chapter() {
  const { chapterId } = useParams()
  const navigate = useNavigate()
  const chapter = getChapterById(chapterId)
  
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  
  if (!chapter) return <div className="chapter-view"><div className="error">Chapter not found</div></div>
  
  const questions = getChapterQuestions(chapterId)
  const currentQuestion = questions[currentQ]
  
  const handleOptionSelect = (option) => {
    if (showResult) return
    setSelectedOption(option)
  }
  
  const handleCheck = () => {
    if (!selectedOption) return
    if (selectedOption.correct) {
      setCorrectCount(c => c + 1)
    }
    setShowResult(true)
  }
  
  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }
  
  const handleFinish = () => {
    navigate('/')
  }
  
  // Quiz Mode
  if (showQuiz) {
    if (finished) {
      return (
        <div className="chapter-view">
          <div className="quiz-finished">
            <h2>Quiz Completed!</h2>
            <p>You got {correctCount} out of {questions.length} correct</p>
            <button onClick={handleFinish} className="finish-btn">Back to Chapters</button>
          </div>
        </div>
      )
    }
    
    return (
      <div className="chapter-view">
        {/* Quiz Header */}
        <div className="quiz-header-simple">
          <button className="back-btn" onClick={() => setShowQuiz(false)}>✕</button>
          <div className="quiz-progress">
            Question {currentQ + 1} of {questions.length}
          </div>
          <div style={{ width: 40 }}></div>
        </div>
        
        {/* Question */}
        <div className="quiz-question">
          <h3>{currentQuestion.question}</h3>
          
          <div className="quiz-options">
            {currentQuestion.options.map(option => (
              <button
                key={option.id}
                className={`option-btn ${selectedOption?.id === option.id ? 'selected' : ''} ${showResult && option.correct ? 'correct' : ''} ${showResult && selectedOption?.id === option.id && !option.correct ? 'wrong' : ''}`}
                onClick={() => handleOptionSelect(option)}
                disabled={showResult}
              >
                <span className="option-letter">{option.id.toUpperCase()}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
          
          {showResult && (
            <div className={`explanation ${selectedOption?.correct ? 'correct' : 'wrong'}`}>
              {selectedOption?.correct ? '✓ Correct!' : '✗ Incorrect'}
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
        
        {/* Action Button */}
        <div className="quiz-actions">
          {!showResult ? (
            <button 
              className="action-btn primary" 
              onClick={handleCheck}
              disabled={!selectedOption}
            >
              Check Answer
            </button>
          ) : (
            <button className="action-btn primary" onClick={handleNext}>
              {currentQ < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    )
  }
  
  // Chapter Info Mode
  return (
    <div className="chapter-view">
      {/* Header */}
      <div className="chapter-header-simple">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <h2>{chapter.class}</h2>
      </div>
      
      {/* Chapter Content */}
      <div className="chapter-content">
        <h1>{chapter.title}</h1>
        <p className="chapter-desc">{chapter.description}</p>
        
        <div className="topics-section">
          <h3>Topics Covered:</h3>
          <div className="topics-list">
            {chapter.topics.map((topic, i) => (
              <span key={i} className="topic-tag">{topic}</span>
            ))}
          </div>
        </div>
        
        <div className="quiz-preview">
          <h3>Test Your Knowledge</h3>
          <p>{questions.length} questions available</p>
          <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chapter
