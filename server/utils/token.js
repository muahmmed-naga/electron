import jwt from "jsonwebtoken";

export const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRIT_TOKEN, {
    expiresIn: "3d",
  });
};
