import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Project/Home'
import Navbar from './pages/Project/Navbar'
import ProjectDetails from './pages/Project/ProjectDetails'
import IssueDetails from './pages/Project/IssueDetails'
import Subscription from './pages/Project/Subscription';
import Auth from './pages/Project/Auth';

function App() {
  return (
    <>
      {
        false ?
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
              <Route path="/upgrade_plan" element={<Subscription />} />
            </Routes>
          </div> :
          <Auth />
      }
    </>
  )
}

export default App
