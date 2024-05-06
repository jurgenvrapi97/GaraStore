import { useState } from 'react'
import Login from './Login'
import Logo from '../assets/new-logo-gara.svg'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const handleModalToggle = () => {
    setIsModalActive(!isModalActive)
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
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/about">
            Chi siamo
          </a>

          <a className="navbar-item" href="/contact">
            Prodotti
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/register">
                <strong>Sign up</strong>
              </a>
              <div>
                <button className="button is-light" onClick={handleModalToggle}>
                  Log in
                </button>

                <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div className="box">
                      <Login />{' '}
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
