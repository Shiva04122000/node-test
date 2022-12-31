
const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
const mongoURI = `mongodb+srv://Shiva:Shiva123@cluster0.bhneber.mongodb.net/module-test"`;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connect to DB successfully");
  })
  .catch((err) => {
    console.log("Failed to connect", err);
  });


