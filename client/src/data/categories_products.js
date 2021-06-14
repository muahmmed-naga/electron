import { v4 as uuidv4 } from 'uuid'
import faker from 'faker'

const CATEGORIES_PRODUCTS = {
  bestDeals: {
    left: [
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
    middle: [
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
      },
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
      },
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
      },
    ],
    right: [
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
  },
  tv_video: {
    left: [
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
    middle: [
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
      },
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
      },
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
      },
    ],
    right: [
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
  },
  cameras: {
    left: [
      {
        id: uuidv4(),
        imgUrl:
          'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/MobileBank-300x300.jpg',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/DekstopPC-1-300x300.jpg',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
    middle: [
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
      },
      {
        original:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        thumbnail:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
      },
      {
        original:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
        thumbnail:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
      },
    ],
    right: [
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
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          'https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/TV-300x300.jpg',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
      {
        id: uuidv4(),
        imgUrl:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
      },
    ],
  },
}

export default CATEGORIES_PRODUCTS
