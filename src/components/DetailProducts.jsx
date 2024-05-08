import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailProducts = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))

    fetch(`/api/products/${id}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
  }, [id])

  if (!product) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="columns">
      <div className="column is-full">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={product.image} alt={product.name} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{product.name}</p>
                <p className="subtitle is-6">{product.category}</p>
              </div>
            </div>
            <div className="content">
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-full">
        <h2 className="title is-4">Recensioni</h2>
        {reviews.map((review) => (
          <div key={review.id} className="box">
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailProducts
