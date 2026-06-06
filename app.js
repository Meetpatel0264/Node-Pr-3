const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Aero Page | Digital Agency",
        logo: "logo.png",
        faq: "4-RkTMV7PL.svg",
        portfolio: "img-1.jpg",
        service: "img-4.jpg",
        testi1: "anant-sir.jpg",
        testi2: "keyur-sir.png",
        blog1: "img-1.jpg",
        blog1: "img-2.jpg",
        blog1: "img-3.jpg",
    });
});



app.post("/email", (req, res) => {
  console.log("Newsletter Email:", req.body.email);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
