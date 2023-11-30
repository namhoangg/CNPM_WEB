module.exports.auth = (req, res, next) => {
  if (!req.cookies.userToken) {
    res.redirect("/user/login");
    return;
  }
  res.locals.userToken = req.cookies.userToken;
  next();
};
