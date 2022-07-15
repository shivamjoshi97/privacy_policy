const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const upload = require("express-fileupload");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.engine("ejs", ejsMate);
app.use(upload());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000, () => {
  console.log("Listening");
});
// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";

// image_input.addEventListener("click", function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     uploaded_image = reader.result;
//     document.querySelector(
//       "#display_image"
//     ).style.src = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });
