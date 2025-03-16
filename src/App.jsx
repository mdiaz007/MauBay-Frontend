import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui"
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui'
import * as reactRouterDom from "react-router-dom"
import { Route, Routes } from 'react-router-dom'

import React, { useEffect, useState } from 'react';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_AXIOSBASEURL;

import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

export default function App() {

  const [data, setData] = useState([])

  // [] Will only render once
  useEffect(() => {
    axios.get('active')
      .then(function (response){
        setData(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(function (){

      })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="/marketplace" element={<MarketPlace data={data} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}
      {/*Your app routes*/}
    </Routes>
  )
}