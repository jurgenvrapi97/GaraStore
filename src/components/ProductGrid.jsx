import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/action'
import ProductCard from './ProductCard'
import { Modal } from 'react-bulma-components'

const ProductGrid = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const loading = useSelector((state) => state.product.loading)
  const error = useSelector((state) => state.product.error)
  const userRole = useSelector((state) => state.login.user?.role?.roleName)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className="loader"></div>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Error: {error}
        <Modal show={true}>
          <Modal.Content>
            <p>Error: {error}</p>
          </Modal.Content>
        </Modal>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">I Nostri Prodotti</h1>
        </div>
        {userRole === 'ADMIN' && (
          <div className="level-right">
            <Link
              to="/add-product"
              className="button is-primary tooltip"
              data-tooltip="Aggiungi prodotto"
            >
              <span className="icon is-small">
                <i className="fas fa-plus">+</i>
              </span>
            </Link>
          </div>
        )}
      </div>
      <div className="columns is-multiline">
        {products.map((product) => (
          <div className="column is-one-third" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
