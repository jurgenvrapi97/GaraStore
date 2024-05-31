import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import UpdateProduct from './components/UpdateProduct'
import Register from './components/Register'
import Login from './components/Login'
import ProductAdd from './components/ProductAdd'
import DetailProducts from './components/DetailProducts'
import 'bulma/css/bulma.css'
import ProductGrid from './components/ProductGrid'
import Riepilogo from './components/Riepilogo'
import Footer from './components/Footer'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Products" element={<ProductGrid />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products/:id" element={<DetailProducts />} />
              <Route path="/add-product" element={<ProductAdd />} />
              <Route path="/Riepilogo" element={<Riepilogo />} />
              <Route path="/updateProduct/:id" element={<UpdateProduct />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
