import { useState } from 'react'
import Login from './Login'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const toggleActive = () => {
    setIsActive(!isActive)
  }
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          GaraStore
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
            About
          </a>

          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/register">
                <strong>Sign up</strong>
              </a>
              <div>
                <button className="button is-light" onClick={toggleActive}>
                  Log in
                </button>

                <div className={`modal ${isActive ? 'is-active' : ''}`}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div className="box">
                      <Login />{' '}
                    </div>
                  </div>
                  <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={toggleActive}
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
