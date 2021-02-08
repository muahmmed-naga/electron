import { v4 as uuidv4 } from "uuid";
import faker from "faker";

const PRODUCTS_DATA = {
  categories: {
    left: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864",
        name: "Faxtex Product Sample",
        price: 14,
        category: "Bulgari",
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863",
        name: "Finity Product Sample",
        price: 90,
        category: "Christian Dior",
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864",
        name: "Fixair Product Sample",
        price: 220,
        category: "Dolce & Gabbana",
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863",
        name: "Fixair Product Sample",
        price: 450,
        category: "Dolce & Gabbana",
      },
    ],
    middle: [
      {
        original:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
      },
      {
        original:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
      },
      {
        original:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863",
      },
    ],
    right: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
        name: "Faxtex Product Sample",
        price: 14,
        category: "Bulgari",
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863",
        name: "Finity Product Sample",
        price: 90,
        category: "Christian Dior",
      },
      {
        img:
          "//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863",
        name: "Fixair Product Sample",
        price: 220,
        category: "Dolce & Gabbana",
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863",
        name: "Fixair Product Sample",
        price: 450,
        category: "Dolce & Gabbana",
      },
    ],
  },
  tabContent: {
    featured: {
      left: {
        id: uuidv4(),
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GamePad_1920x.jpg?v=1604559863",

        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: faker.commerce.department(),
        isSave: {
          percent: 10,
        },
      },
      main: [
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/DekstopPC_1920x.jpg?v=1604559865",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/FlashDrive_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
      ],
    },
    onSale: {
      left: {
        id: uuidv4(),
        imgUrl:
          "//cdn.shopify.com/s/files/1/0066/4322/0562/products/Photocamera_1920x.jpg?v=1604559863",
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        isSave: {
          percent: 10,
        },
      },
      main: [
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_720x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "//cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone4_720x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartphone5_720x.jpg?v=1604559873",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Laptop_50c3d045-3dd4-4032-a83c-0f619285f310_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
      ],
    },
    topRated: {
      left: {
        id: uuidv4(),
        imgUrl:
          "//cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        isSave: {
          percent: 10,
        },
      },
      main: [
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Smartwatch_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ActionCamera_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/DekstopPC_1920x.jpg?v=1604559865",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Earphones_1920x.jpg?v=1604559866",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/FlashDrive_1920x.jpg?v=1604559864",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
        {
          id: uuidv4(),
          img:
            "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GameStation_1920x.jpg?v=1604559863",
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          category: faker.commerce.department(),
        },
      ],
    },
  },
};

export default PRODUCTS_DATA;
