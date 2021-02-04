import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

const NEW_ARRIVALS = [
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch2_1920x.jpg?v=1604559873',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone_1920x.jpg?v=1604559865',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Phone4_1920x.jpg?v=1604559863',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone7_1920x.jpg?v=1604559876',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet2_c8aa9c39-cc6d-496b-84fb-08ffb417c090_1920x.jpg?v=1604559874',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_1920x.jpg?v=1604559863',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone5_1920x.jpg?v=1604559873',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
  {
    id: uuidv4(),
    img:
      '//cdn.shopify.com/s/files/1/0066/4322/0562/products/FlashDrive_1920x.jpg?v=1604559864',
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.department(),
  },
];

export default NEW_ARRIVALS;
