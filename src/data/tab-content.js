import { v4 as uuidv4 } from 'uuid';

const TABS_CONTENT = {
  featured: {
    left: {
      id: uuidv4(),
      imgUrl:
        'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GamePad_1920x.jpg?v=1604559863',
      name: 'Naga Products',
      price: 350,
      isSave: {
        percent: 10,
      },
    },
    main: [
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        name: 'Faxtex Product Sample',
        price: 14,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        name: 'Finity Product Sample',
        price: 90,
        category: 'Christian Dior',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
        name: 'Fixair Product Sample',
        price: 220,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: 'Fixair Product Sample',
        price: 450,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/DekstopPC_1920x.jpg?v=1604559865',
        name: 'Freshkix Product Sample',
        price: 120,
        category: 'Armani',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: 'Georgeous White Bag',
        price: 150,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/FlashDrive_1920x.jpg?v=1604559864',
        name: 'Georgeous White Dresses',
        price: 350,
        category: 'Donna Karan',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863',
        name: 'Gold Diamond Chain',
        price: 44,
        category: 'Dolce & Gabbana',
      },
    ],
  },
  onSale: {
    left: {
      id: uuidv4(),
      imgUrl:
        '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Photocamera_1920x.jpg?v=1604559863',
      name: 'Naga Products',
      price: 350,
      isSave: {
        percent: 10,
      },
    },
    main: [
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: 'Faxtex Product Sample',
        price: 14,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863',
        name: 'Finity Product Sample',
        price: 90,
        category: 'Christian Dior',
      },
      {
        id: uuidv4(),
        img:
          '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863',
        name: 'Fixair Product Sample',
        price: 220,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: 'Fixair Product Sample',
        price: 450,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone5_720x.jpg?v=1604559873',
        name: 'Freshkix Product Sample',
        price: 120,
        category: 'Armani',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: 'Georgeous White Bag',
        price: 150,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Laptop_50c3d045-3dd4-4032-a83c-0f619285f310_1920x.jpg?v=1604559863',
        name: 'Georgeous White Dresses',
        price: 350,
        category: 'Donna Karan',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863',
        name: 'Gold Diamond Chain',
        price: 44,
        category: 'Dolce & Gabbana',
      },
    ],
  },
  topRated: {
    left: {
      id: uuidv4(),
      imgUrl:
        '//cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
      name: 'Naga Products',
      price: 350,
      isSave: {
        percent: 10,
      },
    },
    main: [
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864',
        name: 'Faxtex Product Sample',
        price: 14,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863',
        name: 'Finity Product Sample',
        price: 90,
        category: 'Christian Dior',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864',
        name: 'Fixair Product Sample',
        price: 220,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863',
        name: 'Fixair Product Sample',
        price: 450,
        category: 'Dolce & Gabbana',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/DekstopPC_1920x.jpg?v=1604559865',
        name: 'Freshkix Product Sample',
        price: 120,
        category: 'Armani',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866',
        name: 'Georgeous White Bag',
        price: 150,
        category: 'Bulgari',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/FlashDrive_1920x.jpg?v=1604559864',
        name: 'Georgeous White Dresses',
        price: 350,
        category: 'Donna Karan',
      },
      {
        id: uuidv4(),
        img:
          'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863',
        name: 'Gold Diamond Chain',
        price: 44,
        category: 'Dolce & Gabbana',
      },
    ],
  },
};

export default TABS_CONTENT;
