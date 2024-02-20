const express = require('express');
const mysql = require('mysql2');
const cookies = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require('./routes/userRouter.cjs')
const ingredientRouter = require('./routes/ingredientsRouter.cjs')
const cuisineRouter = require('./routes/cuisineRouter.cjs')
const recipeRouter = require('./routes/recipeRouter.cjs')



app.use('/user', userRouter)
app.use('/ingredients', ingredientRouter)
app.use('/cuisines', cuisineRouter)
app.use('/recipes', recipeRouter)


process.env["NODE_CONFIG_DIR"]=__dirname + "/config"

const config = require('config')

const connection = mysql.createConnection({
    host:       config.get("mysql.server"),
    user:       config.get("mysql.user"),
    password:   config.get("mysql.password"),
    database:   config.get("mysql.db")
});


app.listen(3000, () => {
    console.log('The server has just been started on port 3000!!!')

    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
       
        console.log('connected as id ' + connection.threadId);
      });
})
