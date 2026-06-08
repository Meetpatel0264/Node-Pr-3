const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("pages/home", {
        title: "Aero Page | Home",
        logo: "logo.png",
        faq: "4-RkTMV7PL.svg",
        portfolio: "img-1.jpg",
        service: "img-4.jpg",
        testi1: "anant-sir.jpg",
        testi2: "keyur-sir.png",
        blog1: "img-1.jpg",
        blog2: "img-2.jpg",
        blog3: "img-3.jpg"
    });
});

app.get("/about", (req, res) => {
    res.render("pages/about", {
        title: "Aero Page | About",
        logo: "logo.png"
    });
});

app.get("/features", (req, res) => {
    res.render("pages/features", {
        title: "Aero Page | Features",
        logo: "logo.png"
    });
});

app.get("/faq", (req, res) => {
    res.render("pages/faq", {
        title: "Aero Page | FAQ",
        logo: "logo.png",
        faq: "4-RkTMV7PL.svg"
    });
});

app.get("/portfolio", (req, res) => {
    res.render("pages/portfolio", {
        title: "Aero Page | Portfolio",
        logo: "logo.png",
        portfolio: "img-1.jpg"
    });
});

app.get("/pricing", (req, res) => {
    res.render("pages/pricing", {
        title: "Aero Page | Pricing",
        logo: "logo.png"
    });
});

app.get("/service", (req, res) => {
    res.render("pages/service", {
        title: "Aero Page | Service",
        logo: "logo.png",
        service: "img-4.jpg"
    });
});

app.get("/testimonial", (req, res) => {
    res.render("pages/testimonial", {
        title: "Aero Page | Testimonial",
        logo: "logo.png",
        testi1: "anant-sir.jpg",
        testi2: "keyur-sir.png"
    });
});

app.get("/blog", (req, res) => {
    res.render("pages/blog", {
        title: "Aero Page | Blog",
        logo: "logo.png",
        blog1: "img-1.jpg",
        blog2: "img-2.jpg",
        blog3: "img-3.jpg"
    });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", {
        title: "Aero Page | Contact",
        logo: "logo.png"
    });
});

app.post("/email", (req, res) => {
    console.log("Newsletter Email:", req.body.email);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
