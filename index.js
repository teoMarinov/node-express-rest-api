const express = require("express");

const app = express();

app.use(express.json());

app.use('/products', require('./routes/productRoutes'))

app.listen(3000, () => console.log("Server is running... port: 3000"));
