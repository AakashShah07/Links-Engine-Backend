const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./route/auth"));
app.use("/api/posts", require("./route/posts"));
app.use("/api/users", require("./route/users"));

// Start Server with npm run dev
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));
