import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateProduct } from '../redux/action'

const UpdateProduct = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.product.products)
  console.log('Products:', products)
  const product = products.find((p) => p.id === Number(id))
  const token = useSelector((state) => state.login.token)

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (product) {
      setProductForm({
        name: product.productName,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
      })
      console.log('Product found:', product)
    } else {
      console.log('Product not found')
    }
  }, [product, id])

  const handleChange = (event) => {
    setProductForm({
      ...productForm,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateProduct(id, productForm, token))
  }

  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Modifica prodotto</p>
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
                  value={productForm.name}
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
                  value={productForm.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Quantità</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={productForm.quantity}
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
                  value={productForm.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Aggiorna</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
