import React, {useState} from 'react'
import Cookies from 'js-cookie'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export const Login = () => {

    
  const [login, setLogin]  = useState('')
  const [pass, setPass]= useState('')

  const handleSubmit = async (event) => {
        event.preventDefault();
        let resultDiv = document.querySelector('.result')

        let formData = {
            "userLogin": login,
            "userPassword": pass
        };

        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Specify JSON content type
            },
            body: JSON.stringify(formData) 
        });

        const res = await response.json();
        
       
        if (!res.success) {
            resultDiv.classList.add('error')
            //let html = "<span>" + res.message + "</span>"
            document.querySelector('.result').innerHTML = res.message
        }

        else {
            const cookieUserLoginName = res.cookieName;
            const cookieUserLoginValue = res.cookieValue;
            const expirationDate = res.expires;
            
            Cookies.set(cookieUserLoginName, cookieUserLoginValue, {expires: expirationDate})

            resultDiv.classList.add('success')
            document.querySelector('.result').innerHTML = "You have been logged in" + Cookies.get(cookieUserLoginName)
            
            setTimeout(() => {
                window.location.href = '/'
            }, 4000);

            
        }

  }

  return (
    <>
        <h1>Login</h1>
        <Form action="http://localhost:3000/user/login" method="post" onSubmit={handleSubmit} name="loginForm">
            <Form.Group className='mb-3'>
                <Form.Label>Login: </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Please enter your login" 
                    id="login" 
                    name="login" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Password: </Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Please enter your password"
                    id="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>
        </Form>
        <div className="result">

        </div>
    </>
    
  )
  }