module.exports.login = (req, res,next) => {
  let errors = [];
  if (!req.body.username) {
    errors.push("*Vui lòng nhập tài khoản.");
  }
  if (!req.body.password) {
    errors.push("*Vui lòng nhập mật khẩu.");
  }
  if (errors.length) {
    req.flash("error", "Vui lòng nhập đầy đủ thông tin.");
    res.render("pages/user/login", {
      errors: errors,
      values: req.body,
    });
    return;
  }
  next();
};