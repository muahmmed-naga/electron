export const errorPath = (req, res, next) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};
