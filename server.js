const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.info("MongoDB Connected !"));
mongoose.set("useFindAndModify", false);
const app = express();
app.use(express.json());

app.use("/", require("./routes/indexRouter"))

app.listen(process.env.PORT || 3000, () => console.log("Running on 3000"));


