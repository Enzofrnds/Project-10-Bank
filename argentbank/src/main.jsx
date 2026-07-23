import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import User from './pages/User'
import { store } from './app/store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  </StrictMode>,
)
