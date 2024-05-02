import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    // Perform login logic here
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-three-quarters-mobile is-half-tablet px-0">
          <form>
            <div className="field">
              <label className="label">Email:</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password:</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
