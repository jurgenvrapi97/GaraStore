import { useState } from 'react'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)
  const handleBirthDateChange = (e) => setBirthDate(e.target.value)
  const handleCityChange = (e) => setCity(e.target.value)
  const handleProvinceChange = (e) => setProvince(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your registration logic here
    console.log(
      'Registration submitted:',
      username,
      email,
      password,
      phone,
      birthDate,
      city
    )
  }

  return (
    <div className="container card  mt-3 p-5">
      <div className="columns is-vcentered is-centered">
        <div className="column has-text-centered">
          <figure className="image">
            <img src="https://troianiortodonzia.it/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />
          </figure>
          <h1 className="is-size-1">Unisciti alla nostra comunity </h1>
        </div>
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={handleUsernameChange}
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
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
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
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Birth Date</label>
                  <div className="control">
                    <input
                      className="input"
                      type="date"
                      placeholder="Enter your birth date"
                      value={birthDate}
                      onChange={handleBirthDateChange}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Province</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter your province"
                      value={province}
                      onChange={handleProvinceChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your city of residence"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className="button is-primary is-fullwidth"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
