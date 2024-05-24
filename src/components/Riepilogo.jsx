import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/action'

const Riepilogo = () => {
  const [showForm, setShowForm] = useState(false)
  const cart = useSelector((state) => state.cart.cart)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlePurchase = () => {
    setIsModalOpen(true)
    setTimeout(() => {
      setIsModalOpen(false)
      dispatch(clearCart())
      navigate('/')
    }, 3000)
  }
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  const shippingCost = 10
  const freeShippingThreshold = 50
  const isFreeShipping = total >= freeShippingThreshold
  const finalTotal = isFreeShipping ? total : total + shippingCost
  const remainingToFreeShipping = freeShippingThreshold - total

  return (
    <div>
      <h1 className="title has-text-centered">Riepilogo Carrello</h1>
      <div className="card">
        <div className="card-content">
          {cart.length === 0 ? (
            <p className="has-text-centered">
              Non hai ancora selezionato nessun articolo
            </p>
          ) : (
            <>
              <ul>
                {cart.map((product, index) => (
                  <li key={index}>
                    <div className="columns">
                      <div className="column is-narrow">
                        <figure className="image is-64x64">
                          <img
                            src={product.imageUrl}
                            alt={product.productName}
                          />
                        </figure>
                      </div>
                      <div className="column">
                        <div>{product.productName}</div>
                        <div>Quantità: {product.quantity}</div>
                      </div>
                      <div className="column has-text-right">
                        Prezzo: {product.price}€
                      </div>
                    </div>
                    {index < cart.length - 1 && <hr />}
                  </li>
                ))}
              </ul>
              <hr />
              <div className="columns">
                <div className="column"></div>
                <div className="column has-text-right">
                  <p>
                    Spedizione:
                    {isFreeShipping ? (
                      <s>{shippingCost}€</s>
                    ) : (
                      `${shippingCost}€`
                    )}
                  </p>
                  {!isFreeShipping && (
                    <p style={{ color: 'red' }}>
                      Spendi ancora {remainingToFreeShipping}€ per la spedizione
                      gratuita
                    </p>
                  )}
                  <p>Total: {finalTotal}€</p>
                  <button
                    className="button is-primary mt-2"
                    onClick={() => setShowForm(!showForm)}
                  >
                    Acquista
                  </button>
                </div>
              </div>
            </>
          )}
          {showForm && (
            <div>
              <h1 className="title has-text-centered">Dati spedizione</h1>
              <div className="columns">
                <div className="column">
                  <form>
                    <div className="field">
                      <label className="label">Città</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Inserisci la città"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Via</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Inserisci la via"
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">CAP</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Inserisci il CAP"
                        />
                      </div>
                    </div>
                  </form>
                  <hr />
                  <p className="has-text-centered is-danger">
                    siamo spiacenti, ma al momento non possiamo accettare
                    pagamenti online, dovrete pagare alla consegna
                  </p>
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <button
                        className="button is-primary mt-2"
                        onClick={handlePurchase}
                      >
                        Procedi all'acquisto
                      </button>
                      {isModalOpen && (
                        <div className="modal is-active">
                          <div className="modal-background"></div>
                          <div
                            className="modal-content has-text-centered"
                            style={{ backgroundColor: 'green' }}
                          >
                            <p>Grazie per il tuo acquisto!</p>
                          </div>
                          <button
                            className="modal-close is-large"
                            aria-label="close"
                          ></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Riepilogo
