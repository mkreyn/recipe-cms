import React, {useState} from 'react'
import '../../global.css'
import './Header.css'
import { CircleUserRound } from 'lucide-react'
export const Header = () => {

    const [logged, setLogged] = useState()


    const logout = () => {
        document.cookie = "userLogin= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        let cookieIndex = document.cookie.indexOf('userLogin')

        if (cookieIndex == -1) {
            setLogged(false);
        }
    }
  return (

    <>
       
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/recipes">Recipes</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/user/login">Login</a>
                </li>
            </ul>
            <div className="social_icons">
                <ul className="list-none flex gap-x-4 items-center">
                    <li>
                            { 
                                logged ? <a className="UserProfile" onClick={logout} href="#"><CircleUserRound /></a> : "NO" 
                            }
                    </li>
                    <li>
                        <a href="#">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iQnl5MjJwbm1sWWFJNWNXX35sOFdDYV82UDFwQTNISmFiWVVfZ3IxIiB4MT0iMTguMTg4IiB4Mj0iMjkuNDQ2IiB5MT0iNi4wMDEiIHkyPSI0MC44NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzM2JlZjAiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwYTg1ZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjQnl5MjJwbm1sWWFJNWNXX35sOFdDYV82UDFwQTNISmFiWVVfZ3IxKSIgZD0iTTQwLDZIOEM2Ljg5NSw2LDYsNi44OTUsNiw4djMyYzAsMS4xMDUsMC44OTUsMiwyLDJoMzJjMS4xMDUsMCwyLTAuODk1LDItMlY4CUM0Miw2Ljg5NSw0MS4xMDUsNiw0MCw2eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNi45MzcsMTcuMDQxYzAuMDQ2LTAuMTUxLDAuMDY4LTAuMjkxLDAuMDYyLTAuNDE2QzM2Ljk4NCwxNi4yNjMsMzYuNzM1LDE2LDM2LjE0OSwxNmgtNC4xNTQJYy0wLjY2MSwwLTAuOTY2LDAuNC0xLjE0NCwwLjgwMWMwLDAtMS43MiwzLjY4NC0yLjEyMiw0LjQ0OWMtMC42MSwwLjY0MS0xLjAwNSwxLjM2MS0xLjMzNSwxLjM2MWMtMC4xNzcsMC0wLjM5NCwwLjE3NS0wLjM5NC0wLjQxMgl2LTUuMTg1QzI3LDE2LjMyLDI2LjgyNywxNiwyNi4yNjgsMTZoLTYuNjQ5QzE5LjIxMiwxNiwxOSwxNi4zMiwxOSwxNi42NDFjMCwwLjY2NywwLjg5OCwyLjgyNywxLDQuNjk2djAuODk1CWMwLDAuNjM2LDAuMTAxLDEuMjQtMC4xMzcsMS4yNGMtMC4yOSwwLTEuMzA0LTIuMjQyLTIuMTYxLTYuNDA0QzE3LjQ0OCwxNi4yOTQsMTcuMTk0LDE2LDE2LjUzMywxNkgxMS44OQlDMTEuMTI3LDE2LDExLDE2LjM3NCwxMSwxNi43NzRjMCwxLjYxMiwwLjg0NCw2LjI5Miw0LjExOSwxMC43NzRjMi4zNzUsMy4yNSw2LjI2LDUuNDUyLDkuMDMsNS40NTJjMS4yMzcsMCwyLjg1LTAuMDIsMi44NS0xLjg4CWMwLTEuODYtMC4wMi0yLjgzNSwwLjE2NC0yLjgzNWMwLjIzOCwwLDAuMzUsMC4xMDksMS44NSwxLjg1OUMzMC43NDQsMzIuMTYxLDMxLjE2NywzMywzMi4xNTksMzNoMy44NwljMC42MDgsMCwwLjk1Ny0wLjI1NSwwLjk3MS0wLjc1YzAtMS4yNzUtMC4zNzQtMi4wMTMtMi4yNS00Ljc2M2MtMC42MTUtMC43NDMtMS43NS0xLjk5Ni0xLjc1LTIuNQlDMzMsMjQuNDIsMzYuMTg5LDIwLjExMSwzNi45MzcsMTcuMDQxeiIgb3BhY2l0eT0iLjA1Ij48L3BhdGg+PHBhdGggZD0iTTM2LjQzNywxNy41NDFjMC4wNDYtMC4xNTEsMC4wNjgtMC4yOTEsMC4wNjItMC40MTZjLTAuMDE1LTAuMzYyLTAuMjY0LTAuNjI1LTAuODUtMC42MjVoLTMuMzg2CWMtMC42NjEsMC0wLjk2NiwwLjQtMS4xNDQsMC44MDFjMCwwLTEuNjc2LDMuNTIyLTIuODE4LDUuMDEyYy0wLjYxLDAuNjQxLTAuOTYyLDAuOTkzLTEuMjkyLDAuOTkzCWMtMC4xNzcsMC0wLjUwOS0wLjAxOS0wLjUwOS0wLjYwNnYtNS4xODVjMC0wLjY5NC0wLjE3My0xLjAxNC0wLjczMi0xLjAxNGgtNS42NDljLTAuNDA3LDAtMC42MTksMC4zMi0wLjYxOSwwLjY0MQljMCwwLjY2NywwLjg5OCwxLjgyNywxLDMuNjk2djIuMjU5YzAsMC43NTgtMC4wMjYsMS4xNC0wLjMxLDEuMTRjLTAuNTksMC0xLjk3My0yLjYyMS0yLjk4OC02LjY2OAljLTAuMjU0LTAuNzc0LTAuNTA4LTEuMDY4LTEuMTY5LTEuMDY4SDEyLjM5Yy0wLjc2MywwLTAuODksMC4zNzQtMC44OSwwLjc3NGMwLDEuMTY3LDAuNzIyLDUuNDU1LDMuOTk3LDkuOTM3CWMyLjM3NSwzLjI1LDUuODgyLDUuMjg5LDguNjUyLDUuMjg5YzEuNDU3LDAsMi4zNS0wLjIyMSwyLjM1LTEuNDg3di0yLjE4MmMwLjAwMS0wLjgwMSwwLjA4Mi0xLjE4OSwwLjQ0MS0xLjE4OQljMC4zMSwwLDAuNzU0LDAuMTc5LDIuMjU0LDEuOTI5YzEuNzMsMi4wMTgsMi4wOTksMi45MjgsMy4wOTEsMi45MjhoMy4yNDRjMC42MDgsMCwwLjk1Ny0wLjI1NSwwLjk3MS0wLjc1CWMwLTAuOTg2LTAuNjg3LTIuMjM2LTIuMjUtNC4yNTdjLTAuNjE1LTAuNzQzLTEuNzUtMS45MjctMS43NS0yLjVDMzIuNSwyNC40MiwzNS4zNDUsMjEuMDYsMzYuNDM3LDE3LjU0MXoiIG9wYWNpdHk9Ii4wNyI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zNS45MzcsMTguMDQxYzAuMDQ2LTAuMTUxLDAuMDY4LTAuMjkxLDAuMDYyLTAuNDE2QzM1Ljk4NCwxNy4yNjMsMzUuNzM1LDE3LDM1LjE0OSwxN2gtMi42MTgJYy0wLjY2MSwwLTAuOTY2LDAuNC0xLjE0NCwwLjgwMWMwLDAtMS42MzIsMy4zNTktMy41MTMsNS41NzRjLTAuNjEsMC42NDEtMC45MiwwLjYyNS0xLjI1LDAuNjI1QzI2LjQ0NywyNCwyNiwyMy43ODYsMjYsMjMuMTk5CXYtNS4xODVDMjYsMTcuMzIsMjUuODI3LDE3LDI1LjI2OCwxN2gtNC42NDlDMjAuMjEyLDE3LDIwLDE3LjMyLDIwLDE3LjY0MWMwLDAuNjY3LDAuODk4LDAuODI3LDEsMi42OTZ2My42MjMJYzAsMC44OC0wLjE1MywxLjA0LTAuNDgzLDEuMDRjLTAuODksMC0yLjY0Mi0zLTMuODE1LTYuOTMyQzE2LjQ0OCwxNy4yOTQsMTYuMTk0LDE3LDE1LjUzMywxN0gxMi44OUMxMi4xMjcsMTcsMTIsMTcuMzc0LDEyLDE3Ljc3NAljMCwwLjcyMSwwLjYsNC42MTksMy44NzUsOS4xMDFDMTguMjUsMzAuMTI1LDIxLjM3OSwzMiwyNC4xNDksMzJjMS42NzgsMCwxLjg1LTAuNDI3LDEuODUtMS4wOTR2LTIuOTcyCUMyNiwyNy4xMzMsMjYuMTgzLDI3LDI2LjcxNywyN2MwLjM4MSwwLDEuMTU4LDAuMjUsMi42NTgsMmMxLjczLDIuMDE4LDIuMDQ0LDMsMy4wMzYsM2gyLjYxOGMwLjYwOCwwLDAuOTU3LTAuMjU1LDAuOTcxLTAuNzUJYzAuMDAzLTAuMTI2LTAuMDE1LTAuMjY3LTAuMDU2LTAuNDI0QzM1Ljc1LDMwLjI1LDM0Ljg2LDI4Ljg0MiwzMy43NSwyNy41Yy0wLjYxNS0wLjc0My0xLjIyMi0xLjQ3OS0xLjUwMS0xLjg3OQlDMzIuMDYyLDI1LjM2LDMxLjk5MSwyNS4xNzYsMzIsMjVjMC4wMDktMC4xODUsMC4xMDUtMC4zNjEsMC4yNDktMC42MDdDMzIuMjIzLDI0LjM5MywzNS42MDcsMTkuNjQyLDM1LjkzNywxOC4wNDF6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CjxwYXRoIGZpbGw9IiM4YmI3ZjAiIGQ9Ik0yLjUgMi41SDM3LjVWMzcuNUgyLjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRlN2FiNSIgZD0iTTM3LDN2MzRIM1YzSDM3IE0zOCwySDJ2MzZoMzZWMkwzOCwyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNywzN1YyNGg0LjkzbDAuNjk4LTVIMjd2LTMuMzg0YzAtMS41NjgsMC43MDItMi42MzYsMi45NS0yLjYzNkwzMywxMi45NzlWOC4yMjUJYy0wLjQ5Ni0wLjA2Ni0yLjM4MS0wLjIxMy00LjM2MS0wLjIxM2MtNC4xMzQsMC02LjYzOSwyLjUyMy02LjYzOSw3LjE1N1YxOWgtNXY1aDV2MTNIMjd6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
                        </a>                        
                    </li>
                    <li>
                        <a href="#">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iQmlGN0QxNlVsQzBSWl9WcVhKSG5YYV9vV2l1SDBqRmlVMFJfZ3IxIiB4MT0iOS44NTgiIHgyPSIzOC4xNDIiIHkxPSI5Ljg1OCIgeTI9IjM4LjE0MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzMzYmVmMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBhODVkOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNCaUY3RDE2VWxDMFJaX1ZxWEpIblhhX29XaXVIMGpGaVUwUl9ncjEpIiBkPSJNNDQsMjRjMCwxMS4wNDUtOC45NTUsMjAtMjAsMjBTNCwzNS4wNDUsNCwyNFMxMi45NTUsNCwyNCw0UzQ0LDEyLjk1NSw0NCwyNHoiPjwvcGF0aD48cGF0aCBkPSJNMTAuMTE5LDIzLjQ2NmM4LjE1NS0zLjY5NSwxNy43MzMtNy43MDQsMTkuMjA4LTguMjg0YzMuMjUyLTEuMjc5LDQuNjcsMC4wMjgsNC40NDgsMi4xMTMJYy0wLjI3MywyLjU1NS0xLjU2Nyw5Ljk5LTIuMzYzLDE1LjMxN2MtMC40NjYsMy4xMTctMi4xNTQsNC4wNzItNC4wNTksMi44NjNjLTEuNDQ1LTAuOTE3LTYuNDEzLTQuMTctNy43Mi01LjI4MgljLTAuODkxLTAuNzU4LTEuNTEyLTEuNjA4LTAuODgtMi40NzRjMC4xODUtMC4yNTMsMC42NTgtMC43NjMsMC45MjEtMS4wMTdjMS4zMTktMS4yNzgsMS4xNDEtMS41NTMtMC40NTQtMC40MTIJYy0wLjE5LDAuMTM2LTEuMjkyLDAuOTM1LTEuNzQ1LDEuMjM3Yy0xLjExLDAuNzQtMi4xMzEsMC43OC0zLjg2MiwwLjE5MmMtMS40MTYtMC40ODEtMi43NzYtMC44NTItMy42MzQtMS4yMjMJQzguNzk0LDI1Ljk4Myw4LjM0LDI0LjI3MiwxMC4xMTksMjMuNDY2eiIgb3BhY2l0eT0iLjA1Ij48L3BhdGg+PHBhdGggZD0iTTEwLjgzNiwyMy41OTFjNy41NzItMy4zODUsMTYuODg0LTcuMjY0LDE4LjI0Ni03LjgxM2MzLjI2NC0xLjMxOCw0LjQ2NS0wLjUzNiw0LjExNCwyLjAxMQljLTAuMzI2LDIuMzU4LTEuNDgzLDkuNjU0LTIuMjk0LDE0LjU0NWMtMC40NzgsMi44NzktMS44NzQsMy41MTMtMy42OTIsMi4zMzdjLTEuMTM5LTAuNzM0LTUuNzIzLTMuNzU0LTYuODM1LTQuNjMzCWMtMC44Ni0wLjY3OS0xLjc1MS0xLjQ2My0wLjcxLTIuNTk4YzAuMzQ4LTAuMzc5LDIuMjctMi4yMzQsMy43MDctMy42MTRjMC44MzMtMC44MDEsMC41MzYtMS4xOTYtMC40NjktMC41MDgJYy0xLjg0MywxLjI2My00Ljg1OCwzLjI2Mi01LjM5NiwzLjYyNWMtMS4wMjUsMC42OS0xLjk4OCwwLjg1Ni0zLjY2NCwwLjMyOWMtMS4zMjEtMC40MTYtMi41OTctMC44MTktMy4yNjItMS4wNzgJQzkuMDk1LDI1LjYxOCw5LjA3NSwyNC4zNzgsMTAuODM2LDIzLjU5MXoiIG9wYWNpdHk9Ii4wNyI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS41NTMsMjMuNzE3YzYuOTktMy4wNzUsMTYuMDM1LTYuODI0LDE3LjI4NC03LjM0M2MzLjI3NS0xLjM1OCw0LjI4LTEuMDk4LDMuNzc5LDEuOTEJYy0wLjM2LDIuMTYyLTEuMzk4LDkuMzE5LTIuMjI2LDEzLjc3NGMtMC40OTEsMi42NDItMS41OTMsMi45NTUtMy4zMjUsMS44MTJjLTAuODMzLTAuNTUtNS4wMzgtMy4zMzEtNS45NTEtMy45ODQJYy0wLjgzMy0wLjU5NS0xLjk4Mi0xLjMxMS0wLjU0MS0yLjcyMWMwLjUxMy0wLjUwMiwzLjg3NC0zLjcxMiw2LjQ5My02LjIxYzAuMzQzLTAuMzI4LTAuMDg4LTAuODY3LTAuNDg0LTAuNjA0CWMtMy41MywyLjM0MS04LjQyNCw1LjU5LTkuMDQ3LDYuMDEzYy0wLjk0MSwwLjYzOS0xLjg0NSwwLjkzMi0zLjQ2NywwLjQ2NmMtMS4yMjYtMC4zNTItMi40MjMtMC43NzItMi44ODktMC45MzIJQzkuMzg0LDI1LjI4Miw5LjgxLDI0LjQ4NCwxMS41NTMsMjMuNzE3eiI+PC9wYXRoPgo8L3N2Zz4="/>                        
                        </a>
                    </li>
                </ul>
        </div>
        </nav>




    </>
  )
}
