export const devUserMiddleware = (req, res, next) => {
  req.user = { id: "dev-user-1" };
  next();
};
