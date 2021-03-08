import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Rating from 'react-rating'

// components
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

const TestPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data.products)
      console.log(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Test Page</h1>
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
        </div>
      ))}
      <Rating
        start={0}
        stop={5}
        initialRating={1.3}
        emptySymbol={<AiOutlineStar />}
        fullSymbol={<AiTwotoneStar />}
        onChange={() => console.log('Rating changed')}
      />
    </div>
  )
}

// Rating.defaultProps = {
//   color: 'yellow',
// }

export default TestPage
