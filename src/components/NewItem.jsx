import React, { useState } from 'react'

const NewItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Name:', name)
    console.log('Price:', price)
    console.log('Description:', description)
    console.log('Image:', image)

    setName('')
    setPrice('')
    setDescription('')
    setImage(null)
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className="container">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="file"
              onChange={handleImageChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewItem
