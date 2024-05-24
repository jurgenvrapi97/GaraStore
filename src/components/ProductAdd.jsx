import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/action'

const ProductAdd = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  })
  const [image, setImage] = useState(null)

  const dispatch = useDispatch()
  const productState = useSelector((state) => state.product)
  const authState = useSelector((state) => state.login)

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const productData = {
      productName: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    }

    const formData = new FormData()
    formData.append('product', JSON.stringify(productData))
    formData.append('image', image)

    const config = {
      headers: {
        Authorization: `${authState.token}`,
      },
    }

    dispatch(addProduct(formData, config))
  }

  return (
    <div>
      {productState.loading && <div>Loading...</div>}
      {productState.error && <div>{productState.error}</div>}
      {productState.product && productState.product.name && (
        <div>Product added successfully!</div>
      )}

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Aggiungi un nuovo prodotto</p>
        </header>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Nome</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Descrizione</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Immagine</label>
              <div className="control">
                <input
                  className="input"
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Quantità</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Prezzo</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Aggiungi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd
