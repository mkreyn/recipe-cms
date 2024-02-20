import React from 'react'
import { Header } from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Recipes } from './pages/Recipes'
import { Contact } from './pages/Contact'
import { Login } from './components/User/Login'
import Ingredients from './components/Recipes/Ingredients/Ingredients'
import Cuisines from './components/Recipes/Cuisines/Cuisines'
import AddBasicRecipeInformation from './components/Recipes/Admin/AddBasicRecipeInformation'

function App() {

  const routes = [
    {path: "/", element: <Home />},
    {path: "/recipes", element: <Recipes />},
    {path: "/about", element: <About />},
    {path: "/contact", element: <Contact />},
    {path: "/user/login", element: <Login />},
    {path: "/ingredients", element: <Ingredients />},
    {path: "/cuisines", element: <Cuisines />},
    {path: "/admin/recipes/add/", element: <AddBasicRecipeInformation />}
  ]

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(item => {
          return <Route path={item.path} element={item.element} />
        })}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
