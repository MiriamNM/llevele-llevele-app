const express = require("express");

const sequelize = require("./util/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access.Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methlods",
    "GET",
    "POST",
    "PUT",
    "DELETE"
  );
  next();
});

app.use("/dev", require("./routes/dev"));
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));

(async () => {
  try {
    await sequelize.sync({ force: false });

    console.log("test");
    app.listen(process.env.EXTERNAL_PORT || 3000);
  } catch (error) {
    console.log(error);
  }
})();
