const express = require("express");
const app = express();
 const pgrt = require("./routes/nodte.routes");


app.use(express.json());

//mongoDbConnection.getConnection()

 app.use("/", pgrt);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});