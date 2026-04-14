import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import SubjectView from './pages/SubjectView'
import ChapterModules from './pages/ChapterModules'
import ModuleView from './pages/ModuleView'
import Level from './pages/Level'
import Quiz from './pages/Quiz'
import SpeakQuestion from './pages/SpeakQuestion'
import Practice from './pages/Practice'
import './styles.css'

function App() {
  const [user, setUser] = useState({
    name: 'Student',
    streak: 1,
    hearts: 5,
    completedLevels: []
  })

  useEffect(() => {
    const saved = localStorage.getItem('plusTwoUser')
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('plusTwoUser', JSON.stringify(user))
  }, [user])

  return (
    <div className="app-container">
      <div className="mobile-frame">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectId" element={<SubjectView user={user} />} />
          <Route path="/chapter/:chapterId/modules" element={<ChapterModules user={user} />} />
          <Route path="/module/:moduleId" element={<ModuleView user={user} />} />
          <Route path="/level/:moduleId/:levelId" element={<Level user={user} />} />
          <Route path="/quiz/:moduleId/:levelId/:questionIndex" element={<Quiz user={user} setUser={setUser} />} />
          <Route path="/speak/:moduleId/:levelId/:questionIndex" element={<SpeakQuestion user={user} setUser={setUser} />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
