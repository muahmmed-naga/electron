import React from 'react'

import Rating from 'react-rating'

// components
import Products from './../products'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      {Products.map((item) => (
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
