import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import User from './pages/User'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
