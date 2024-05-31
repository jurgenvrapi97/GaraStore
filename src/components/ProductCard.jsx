import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addToCart, updateProduct } from '../redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteProduct } from '../redux/action'

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const userRole = useSelector((state) => state.login.user?.role?.roleName)

  const dispatch = useDispatch()
  const token = useSelector((state) => state.login?.token)

  const handleAddToCart = () => {
    if (!token) {
      setIsModalOpen(true)
    } else {
      dispatch(addToCart(product))
      dispatch(
        updateProduct(product.id, { quantity: product.quantity - 1 }, token)
      )
    }
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      className="card has-background-dark is-flex is-flex-direction-column is-justify-content-space-between"
      style={{ position: 'relative' }}
    >
      {userRole === 'ADMIN' && (
        <>
          <Link
            to={{
              pathname: `/updateProduct/${product.id}`,
            }}
            className="button is-info is-small"
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              zIndex: 4,
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Link>
          <button
            className="button is-danger is-small"
            onClick={() => dispatch(deleteProduct(product.id, token))}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 4,
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
      <div className="card-image" style={{ position: 'relative', zIndex: 2 }}>
        <figure className="image is-square">
          <img
            src={product.imageUrl}
            alt={product.productName}
            onClick={handleImageClick}
          />
        </figure>
        <div
          className="card-content is-flex-grow-1 has-background-black"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            transition: 'z-index 0.3s, opacity 0.3s',
            opacity: 0,
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
          }}
          onMouseEnter={(e) => {
            e.target.style.zIndex = '3'
            e.target.style.opacity = '0.8'
          }}
          onMouseLeave={(e) => {
            e.target.style.zIndex = '1'
            e.target.style.opacity = '0'
          }}
        >
          <p className="title is-4 has-text-centered">{product.productName}</p>
          <div className="content ">
            <p>{product.description}</p>
            <p>disponibili: {product.quantity}</p>
            <p>Prezzo: {product.price}€</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          className={`button card-footer-item ${
            product.quantity === 0 ? 'is-danger' : 'is-primary'
          }`}
          onClick={handleAddToCart}
          disabled={product.quantity === 0}
        >
          {product.quantity === 0 ? 'Esaurito' : 'Aggiungi'}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content is-flex is-justify-content-center is-align-items-center">
            <div className="notification is-danger">
              Devi prima fare il log in oppure devi registrarti per acquistare
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </div>
      )}
    </div>
  )
}

export default ProductCard
