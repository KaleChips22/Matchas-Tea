import { Route, BrowserRouter as Router, Routes } from 'react-router'
import MatchasNavbar from './components/MatchasNavbar'
import Home from './pages/Home'
import MatchasFooter from './components/MatchasFooter'
import Menu from './pages/Menu'
import About from './pages/About'


function App() {
  const navLinks = ["Menu", "About", "Reference"]

  return (
    <Router>
      <div className="min-vh-100" style={{ backgroundColor: "#f8f5f0" }}>
        <MatchasNavbar navLinks={navLinks} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <MatchasFooter navLinks={navLinks} />
      </div>
    </Router>
  )
}

export default App