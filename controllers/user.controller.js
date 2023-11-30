module.exports.login = (req, res) => {
  res.render("pages/user/login");
};
module.exports.postLogin = (req, res) => {
  //hard code for demo, no database
  const username = "nam.hoangg";
  const password = "123456";
  if (req.body.username !== username) {
    req.flash("error", "Thông tin tài khoản hoặc mật khẩu không chính xác.");
    res.render("pages/user/login", {
      errors: [],
      values: req.body,
    });
    return;
  } else {
    if (req.body.password !== password) {
      req.flash("error", "Thông tin tài khoản hoặc mật khẩu không chính xác.");
      res.render("pages/user/login", {
        errors: [],
        values: req.body,
      });
      return;
    } else {
      res.locals.userToken = "123456789";
      res.cookie("userToken", "123456789");
      res.redirect("/user/profile");
    }
  }
};
module.exports.profile = (req, res) => {
  res.render("pages/user/profile");
};
module.exports.logout = (req, res) => {
  res.clearCookie("userToken");
  res.redirect("/");
};
module.exports.print = (req, res) => {
  res.render("pages/user/print");
};
module.exports.buyPapers = (req, res) => {
  res.render("pages/user/buy-papers");
}
module.exports.history = (req, res) => {
  res.render("pages/user/history");
}