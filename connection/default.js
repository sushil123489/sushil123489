const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

try {
  const connection = mongoose.connect("mongodb+srv://aloksam11:Samson0911%40@cluster0.bs2zpzu.mongodb.net/test",{ useNewUrlParser: true });

  if (connection) {
    console.log("connnected!");
  }
} catch (error) {
  console.log(error, "connnection is not stablish");
}
