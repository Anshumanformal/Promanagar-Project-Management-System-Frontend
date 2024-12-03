import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Project/Home'
import Navbar from './pages/Project/Navbar'
import ProjectDetails from './pages/Project/ProjectDetails'
import IssueDetails from './pages/Project/IssueDetails'
import Subscription from './pages/Project/Subscription';
import Auth from './pages/Project/Auth';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './Redux/Auth/Action'
import { fetchProjects } from './Redux/Project/Action'
import UpgradeSuccess from './pages/Project/UpgradeSuccess'

function App() {

  const dispatch = useDispatch()
  const { auth } = useSelector(store => store)

  useEffect(()=> {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  },[auth.jwt])

  return (
    <>
      {
        auth.user ?
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
              <Route path="/upgrade_plan" element={<Subscription />} />
              <Route path="/upgrade/success" element={<UpgradeSuccess />} />
            </Routes>
          </div> :
          <Auth />
      }
    </>
  )
}

export default App
