import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

const AUDIO = {
  left: [
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
  ],

  right: [
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
    {
      id: uuidv4(),
      img:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    },
  ],
};

export default AUDIO;
