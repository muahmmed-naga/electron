import { v4 as uuidv4 } from 'uuid'
import faker from 'faker'

const VIDEOS_PRODUCTS = [
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    imgUrl:
      'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Smartphone7-300x300.jpg',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
]

export default VIDEOS_PRODUCTS
