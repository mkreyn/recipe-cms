const express = require('express');
const app = express();
const router = express.Router();
const cryptoFile = require('crypto')
const cors = require('cors');
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const cookies = require('cookie-parser')

process.env["NODE_CONFIG_DIR"]=__dirname + "/../config"

const config = require('config')

const connection = mysql.createConnection({
    host:       config.get("mysql.server"),
    user:       config.get("mysql.user"),
    password:   config.get("mysql.password"),
    database:   config.get("mysql.db")
});

app.use(cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies())


router.post('/login', (req, res) => {


    let user = req.body.userLogin;
    let pass = req.body.userPassword;
    let shasum = cryptoFile.createHash('sha1').update(pass).digest('hex')

    try {
        let SQLquery = "SELECT user_login, user_password FROM users WHERE user_login = ? AND user_password = ?";
        let values = [user, shasum]
    
        connection.query(SQLquery, values, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                res.status(500).send("An error occurred while fetching user data.");
                return;
            }

            if (result.length > 0) {
                let serverUserLogin = result[0].user_login;
                let serverUserPassw = result[0].user_password;



                if (serverUserLogin === user && serverUserPassw === shasum) {

                 res.cookie('userLogin', serverUserLogin, { 
                    expire: new Date(Date.now() + 8640000*25), 
                    maxAge: 2400*60*36, 
                    httpOnly: true, 
                });

                    const jsonResult = {
                        success:true,
                        message: "",
                        cookieName: "userLogin",
                        cookieValue: serverUserLogin,
                        expirationDate: new Date(Date.now() + 8640000*25)
                    }
                                              
                         res.status(200).send(jsonResult)
                }
    
                else {
                    const jsonResult = {
                        "success": false,
                        "message": "Something went wrong!"
                    }

                    res.status(200).send(jsonResult)
                    
                }
   
            }

            else {
                res.status(500).send({"success": false, "message":"Wrong credentials"})
            }

           

        });
    }

    catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred while fetching user data.");
    }
})

router.get('/getUser', async (req,res) => {
    try {
        let SQLquery = "SELECT user_login, user_password FROM users WHERE user_login = ? AND user_password = ?";
        let passw = cryptoFile.createHash('sha1').update('drp+72TuKr1sE52kMs').digest('hex')
        let values = ['m.kreyn', passw]

        connection.query(SQLquery, values, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                res.status(500).send("An error occurred while fetching user data.");
                return;
            }

            res.status(200).send(result[0].user_login);
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred while fetching user data.");
    }
})

module.exports = router;