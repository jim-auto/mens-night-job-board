import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'
import ComparePage from './pages/ComparePage'
import JobDetailPage from './pages/JobDetailPage'
import JobListPage from './pages/JobListPage'
import TopPage from './pages/TopPage'

function App() {
  return (
    <HashRouter>
      <div className="appShell">
        <Header />
        <main className="appMain">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
