const express = require("express");

const expressProxy = require("express-http-proxy");
const app = express();

app.use("/user", expressProxy("http://localhost:3001"));
app.use("/captain", expressProxy("http://localhost:3002"));
app.use("/ride", expressProxy("http://localhost:3003"));

app.listen(process.env.PORT, () => {
  console.log("Gateway running on port 3000");
});
