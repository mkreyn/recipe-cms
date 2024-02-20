const express = require('express');
const app = express();
const mysql = require('mysql2');
const router = express.Router();
const cors = require('cors');

process.env["NODE_CONFIG_DIR"]=__dirname + "/../config"

const config = require('config')

const connection = mysql.createConnection({
    host:       config.get("mysql.server"),
    user:       config.get("mysql.user"),
    password:   config.get("mysql.password"),
    database:   config.get("mysql.db")
});

app.use(cors())

router.get('/getIngredients', (req, res) => {
    try {
        let SQL = "SELECT * FROM recipe_ingredients"
        connection.query(SQL, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                res.status(500).send("An error occurred while fetching user data.");
                return;
            }
    
            else {
                res.status(200).json(result)
            }
        })
        
    }

    catch (error) {
        console.error('Error: ', error)
    }
})

module.exports = router;