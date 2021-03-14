// import products from './../dummy-data/products.json'

export const getAllProducts = async (req, res) => {
  const products = [
    { name: 'Product 1', price: 149 },
    { name: 'Product 2', price: 422 },
    { name: 'Product 3', price: 233 },
  ]
  try {
    return res.status(200).json({
      status: 'succes',
      products,
    })
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      msg: error,
    })
  }
}
