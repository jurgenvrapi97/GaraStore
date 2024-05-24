import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/action'

const Login = () => {
  const dispatch = useDispatch()
  const loginError = useSelector((state) => state.login.error)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  useEffect(() => {
    if (loginError == 'true') {
      setEmail('')
      setPassword('')
    }
  }, [loginError])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-three-quarters-mobile is-half-tablet px-0">
          <form onSubmit={handleLogin}>
            <div className="field">
              <label className="label">Email:</label>
              <div className="control">
                <input
                  className={`input ${loginError ? 'is-danger' : ''}`}
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
                  className={`input ${loginError ? 'is-danger' : ''}`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            {loginError && (
              <p className="has-text-danger">Credenziali errate, riprova.</p>
            )}
            <div className="control">
              <button className="button is-primary" type="submit">
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
