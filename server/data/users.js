import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Muhammad Naga",
    email: "naga@root.com",
    password: bcryptjs.hashSync("123456", 15),
    isAdmin: true,
  },
  {
    name: "Ali Naga",
    email: "ali@root.com",
    password: bcryptjs.hashSync("123456", 15),
  },
  {
    name: "Noura Naga",
    email: "noura@root.com",
    password: bcryptjs.hashSync("123456", 15),
  },
  {
    name: "Hasnaa Sabry",
    email: "Hasnaa@root.com",
    password: bcryptjs.hashSync("123456", 15),
  },
];

export default users;
