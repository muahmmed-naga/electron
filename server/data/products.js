import faker from "faker";

const products = [
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-case-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/headphone-usb-wires-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 8,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/WirelessSound-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 10,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/1-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
  {
    name: faker.commerce.productName(),
    image:
      "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
    images: [
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
      },
      {
        original:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
        thumbnail:
          "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop2-300x300.jpg",
      },
    ],
    description: faker.commerce.productDescription(),
    brand: faker.company.companyName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(10, 500),
    countInStock: faker.datatype.number(50),
    rating: `${Math.floor((Math.random() * 5 * 100) / 100 + 1)}.${Math.floor(
      (Math.random() * 4 * 100) / 100 + 1
    )}`,
    numReviews: 12,
  },
];

export default products;
