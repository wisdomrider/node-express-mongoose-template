const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
mongoose.set("useFindAndModify", false);


mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.info("MongoDB Connected !"));

app.use("/", require("./routes/indexRouter"))

app.listen(process.env.PORT || 3000, () => console.log("Running on 3000"));


