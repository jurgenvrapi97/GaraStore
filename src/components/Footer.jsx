import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaEbay } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="footer has-background-dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className="content has-text-light">
        <p>Cercaci sui nostri social</p>
      </div>
      <div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={32} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={32} />
        </a>
      </div>
      <div className="content has-text-light" style={{ fontSize: '0.75em' }}>
        <p>
          <strong>Gara Store</strong> by{' '}
          <a href="https://github.com/jurgenvrapi97">Jurgen Vrapi</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer
