import React from 'react'
import Prodotti from '../assets/2151340280.jpg'

const products = [
  {
    id: 1,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 9.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
  {
    id: 2,
    title: 'prodotto',
    image: Prodotti,
    description: 'descrizione',
    price: 19.99,
  },
]

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.image} alt={product.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{product.title}</p>
            <p className="subtitle is-6">{product.description}</p>
            <p className="subtitle is-5 has-text-weight-bold">
              €{product.price}
            </p>
          </div>
        </div>
        <div className="content">
          <button className="button is-primary">Acquista</button>
        </div>
      </div>
    </div>
  )
}

const ProductGrid = () => {
  return (
    <div className="container">
      <h1 className="title">I Nostri Prodotti</h1>
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
