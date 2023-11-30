const homeRouter=require('./home.router');
const userRouter=require('./user.router');
module.exports = (app) => {
  app.use("/", homeRouter);
  app.use("/user", userRouter);
};
