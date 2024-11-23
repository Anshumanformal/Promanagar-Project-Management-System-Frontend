import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Project/Home'
import Navbar from './pages/Project/Navbar'
import ProjectDetails from './pages/Project/ProjectDetails'
import IssueDetails from './pages/Project/IssueDetails'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
      </Routes>
    </>
  )
}

export default App
