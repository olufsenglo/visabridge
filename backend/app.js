const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
var cookieParser = require('cookie-parser');

//Database connection
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
	.then(() => console.log("DB connected"))
	.catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
	limt: "5mb",
	extended: true
}));
app.use(cookieParser());
app.use(cors());

//port
const port = process.env.PORT || 9000;

app.listen(port, () => {
	console.log(` Server running on port ${port}`);
});
