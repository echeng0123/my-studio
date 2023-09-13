const express = require("express");
const app = express();
const PORT = 8080;

const client = require("./db/client");

// connect to client
client.connect();

// init morgan
const morgan = require("morgan");
app.use(morgan("dev"));

// init body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// init cors
const cors = require("cors");
app.use(cors());

app._router.get("/", (req, res) => {
	res.send("Hello WORLD!");
});

// router: /api
app.use("/api", require("./api"));

// init cookie parser
const cookieParser = require("cookie-parser");
const { COOKIE_SECRET } = require("./secrets");
app.use(cookieParser(COOKIE_SECRET));

const { authRequired } = require("./api/utils");

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
