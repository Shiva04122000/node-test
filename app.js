const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./src/db/conn")
const Register = require("./models/UserRegisters")
// const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("home");
})



app.get("/login", (req, res) => {
    return res.render("login");
});

app.get("/register", (req, res) => {
    return res.render("register");
});

app.post("/register", async (req, res) => {

    try {
        const { name, email, username, password } = req.body;

        const registeredUser = new Register({
            name: name,
            username: username,
            password: password,
            email: email,
        })
        const registered = await registeredUser.save();
        res.status(201).render("profile")

    } catch (error) {
        res.status(400).send(error)
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password

        const userRegistered = await Register.findOne({ email: email });
        if (userRegistered.password === password) {
            res.status(201).render("profile")
        } else {
            res.send("Password are not matching")
        }

    } catch (error) {
        res.status(400).send("Invalid Email")
    }
});

app.get("/profile", (req, res) => {
    return res.render("profile");
});

app.listen(port, () => {
    console.log('server is listening at port 3000')
})