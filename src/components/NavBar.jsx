import { useState } from 'react'
import Login from './Login'
import Logo from '../assets/new-logo-gara.svg'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, updateProduct } from '../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { removeFromCart } from '../redux/action'

const NavBar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
  const user = useSelector((state) => state.login?.user)
  const [cartOpen, setCartOpen] = useState(false)
  const cart = useSelector((state) => state.cart.cart)
  const products = useSelector((state) => state.product.products)
  const token = useSelector((state) => state.login.token)

  const [isActive, setIsActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  const handleCartClick = () => {
    setCartOpen(!cartOpen)
  }

  const handelAcquista = () => {
    setCartOpen(!cartOpen)
  }

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleModalToggle = () => {
    setIsModalActive(!isModalActive)
  }

  const handleRemoveFromCart = (productId) => {
    const product = products.find((product) => product.id === productId)
    if (product) {
      dispatch(
        updateProduct(productId, { quantity: product.quantity + 1 }, token)
      )

      dispatch(removeFromCart(productId))
    }
  }

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          href="/"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="logo-svg1 mx-2"
            style={{ transform: 'scale(1.5)' }}
          />

          <span>GaraStore</span>
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/about">
            Chi siamo
          </Link>

          <Link className="navbar-item" to="/Products">
            Prodotti
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {!isLoggedIn ? (
              <div className="buttons">
                <a className="button is-primary" href="/register">
                  <strong>Sign up</strong>
                </a>
                <div>
                  <button
                    className="button is-light"
                    onClick={handleModalToggle}
                  >
                    Log in
                  </button>

                  <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                      <div className="box">
                        <Login setIsModalActive={setIsModalActive} />
                      </div>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={handleModalToggle}
                    ></button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="buttons">
                <h1 className="has-text-success">
                  Welcome, {user?.firstName}{' '}
                </h1>
                <button
                  className="button is-light"
                  onClick={() => {
                    dispatch(logout())
                    setIsModalActive(false)
                  }}
                >
                  Log out
                </button>
                <div className="navbar-item" style={{ position: 'relative' }}>
                  <button className="button is-light" onClick={handleCartClick}>
                    <span className="icon has-text-dark">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </span>
                  </button>
                </div>
                {cartOpen && (
                  <div
                    className="dropdown is-right is-active mobile-dropdown"
                    style={{ position: 'absolute', top: '100%', right: '10%' }}
                  >
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div className="dropdown-content">
                        {cart.length === 0 ? (
                          <div className="dropdown-item">
                            <p>Non hai prodotti</p>
                          </div>
                        ) : (
                          cart.map((product, index) => (
                            <div className="dropdown-item" key={index}>
                              <div className="media">
                                <figure className="media-left">
                                  <img
                                    className="image is-70x80"
                                    src={product.imageUrl}
                                    alt={product.productName}
                                  />
                                </figure>
                                <div className="media-content">
                                  <p>{product.productName}</p>
                                  <p>Q. {product.quantity}</p>
                                  <p>P. {product.price}€</p>
                                </div>
                                <div className="media-right">
                                  <button
                                    onClick={() =>
                                      handleRemoveFromCart(product.id)
                                    }
                                    className="has-text-danger"
                                  >
                                    <span className="icon">
                                      <i className="fas fa-times">x</i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                        <div className="dropdown-item">
                          <p>Totale: {total}€</p>
                        </div>
                        <div className="has-text-centered">
                          <button
                            className="button is-primary"
                            onClick={handelAcquista}
                          >
                            <Link to="/Riepilogo">Acquista</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
