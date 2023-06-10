require("dotenv").config();
const express = require("express");
const app = express();
const database = require("./src/database");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is running...");
})

app.set("view engine", "ejs");
// app.use(express.static("public"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//test
app.get("/", function (req, res) {
    res.send("test");
})
// user
const userRoutes = require("./src/routes/user.route");
app.use("/user", userRoutes)
