const express = require("express");
const app = express();
const mysql = require("mysql2");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const buildTree = require("../utils/TreeBuilder.cjs");

process.env["NODE_CONFIG_DIR"] = __dirname + "/../config";

const config = require("config");

const connection = mysql.createConnection({
	host: config.get("mysql.server"),
	user: config.get("mysql.user"),
	password: config.get("mysql.password"),
	database: config.get("mysql.db"),
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/add", (req, res) => {
	const oTitle = req.body.oTitle;
	const oPrepTime = req.body.oPrepTime;
	const oCookTime = req.body.oCookTime;
	const oServings = req.body.oServings;
	const oStepCount = req.body.oStepCount;
	const oIngredients = req.body.oIngredients;
	const oCuisine = req.body.oCuisines;
	const oRecipeLevel = req.body.oRecipeLevel;

	res.status(200).send(req.body);
});

router.get("/getCuisines", (req, res) => {
	try {
		let SQLquery = "SELECT id, cuisine_name FROM cuisines";
		connection.query(SQLquery, (error, result) => {
			if (error) {
				console.error("Error executing SQL query:", error);
				res.status(500).send("An error occurred while fetching cuisines.");
				return;
			} else {
				res.status(200).json(result);
			}
		});
	} catch (error) {
		console.log("General error: ", error);
	}
});

router.get("/getRecipeCategories", (req, res) => {
	try {
		let SQLquery = "SELECT id, parent_id, category_name FROM recipe_categories";
		connection.query(SQLquery, (error, result) => {
			if (error) {
				console.error("Error executing SQL query:", error);
				res.status(500).send("An error occurred while fetching recipe levels.");
				return;
			} else {
				res.status(200).json(buildTree(result));
			}
		});
	} catch (error) {
		console.log("General error: ", error);
	}
});

router.get("/getRecipeLevels", (req, res) => {
	try {
		let SQLquery = "SELECT id, level_name FROM recipe_levels";
		connection.query(SQLquery, (error, result) => {
			if (error) {
				console.error("Error executing SQL query:", error);
				res.status(500).send("An error occurred while fetching recipe levels.");
				return;
			} else {
				res.status(200).json(result);
			}
		});
	} catch (error) {
		console.log("General error: ", error);
	}
});

module.exports = router;
