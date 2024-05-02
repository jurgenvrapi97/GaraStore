import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/Register'
import Login from './components/Login'
import 'bulma/css/bulma.css'

function App() {
  return (
    <>
      <NavBar />
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
