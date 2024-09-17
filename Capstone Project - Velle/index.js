import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req,res) => {
  res.render("login.ejs", {heading: "Login", subHeading: "Enter Your Credentials Below"});
});

app.post("/submit", (req, res) => {
   if (req.body.username == "jaynur" && req.body.password == "juned" ) {
    res.render("user-blogs.ejs", {hello: "Your Blogs"});
   } else {
    res.render("login.ejs",{heading: "Login", subHeading: "Invalid Username or Password!"});
   }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});