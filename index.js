// require("dotenv").config();

<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const routes = require("./config/routes");
const app = express();

// const flash = require("connect-flash");
// const morgan = require("morgan");
// var cookieParser = require("cookie-parser");

// var session = require("express-session");

// app.use(morgan("dev"));
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// app.use(session({ secret: "WDI-GENERAL-ASSEMBLY-EXPRESS" }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
=======
const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const flash = require("connect-flash"
const morgan = require("morgan")
var cookieParser = require("cookie-parser")
var bodyParser = require("body-parser")
const methodOverride = require("method-override")
var session = require("express-session")

app.use(morgan("dev"))
app.use(cookieParser())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

app.use(session({ secret: "WDI-GENERAL-ASSEMBLY-EXPRESS" }))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
>>>>>>> 286d60b85feea022541c3820e11ded6fea5bc456

// require("./config/passport")(passport);

// app.use(function(req, res, next) {
//   global.currentUser = req.user;
//   res.locals.currentUser = req.user;
//   next();
// });

app.use(cors());
app.use(routes);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
