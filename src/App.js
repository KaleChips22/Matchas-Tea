import { Route, BrowserRouter as Router, Routes } from 'react-router'
import MatchasNavbar from './components/MatchasNavbar'
import Home from './pages/Home'
import MatchasFooter from './components/MatchasFooter'
import Menu from './pages/Menu'
import About from './pages/About'
import Reference from './pages/Reference'
import Order from './pages/Order'

import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const navLinks = ["Menu", "About", "Reference"]

  return (
    <Router>
      <div className="min-vh-100" style={{ backgroundColor: "#f8f5f0" }}>
        <MatchasNavbar navLinks={navLinks} />

        <Toaster/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        <MatchasFooter navLinks={navLinks} />
      </div>
    </Router>
  )
}

export default App