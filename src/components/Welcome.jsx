import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import imagine from '../assets/text-1717177087947.png'

const duration = 3000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9999,
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Transition in={isVisible} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="modal-background"
            style={{ backgroundColor: 'black' }}
          ></div>
          <div
            className="modal-content"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
              padding: '1em',
            }}
          >
            <img
              src={imagine}
              alt="Welcome"
              style={{
                maxWidth: '70%',
                maxHeight: '70%',
                display: 'block',
              }}
            />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setIsVisible(false)}
          ></button>
        </div>
      )}
    </Transition>
  )
}

export default Welcome
