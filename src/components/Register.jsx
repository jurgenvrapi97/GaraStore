import React, { useState } from 'react'
import Logo from '../assets/new-logo-gara.svg'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFirstNameChange = (e) => setFirstName(e.target.value)
  const handleLastNameChange = (e) => setLastName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)
  const handleBirthYearChange = (e) => setBirthYear(e.target.value)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordsMatch(event.target.value === confirmPassword)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
    setPasswordsMatch(password === event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <div className="card">
      {isModalOpen && (
        <div className="modal is-active">
          <div
            className="modal-background"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="modal-content ">
            <div className="box is-success">
              Hai completato la registrazione
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setIsModalOpen(false)}
          ></button>
        </div>
      )}
      <div className="card-content">
        <div className="columns">
          <div className="column is-one-third">
            <figure className="image is-4by3">
              <img src={Logo} alt="Description" className="logo-svg1" />
            </figure>
            <p className="has-text-centered">
              Entra a far parte della comunity
            </p>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${!passwordsMatch ? 'is-danger' : ''}`}
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className={`input ${!passwordsMatch ? 'is-danger' : ''}`}
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Date of Birth</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  placeholder="Enter your date of birth"
                  value={birthYear}
                  onChange={handleBirthYearChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="button is-primary is-fullwidth"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
