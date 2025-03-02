import './index.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

import { Route, Routes, Router } from 'react-router-dom'

import SuperTokens, { SuperTokensWrapper, SessionAuth } from "supertokens-auth-react"
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui"
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui'
import * as reactRouterDom from "react-router-dom"

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

import React, { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState({})

  // [] Will only render once
  // useEffect(() => {
  //   axios.get('active')
  //     .then(function (response) {
  //       setState(response.data)
  //       // console.log(response.data[0].id)
  //     })
  //     .catch(function (error) {
  //       // console.log(error)
  //     })
  //     .finally(function () {
  //       // console.log("end")
  //     })
  // }, [])
 
  // console.log(state)

  return (
    <SuperTokensWrapper>
      <Navigation status="Dashboard"/>
        <Routes>
          <Route path="/" element={<Home object={state}/>} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}
          {/*Your app routes*/}
          
          <Route
            // path="/profile"
            element={
              <SessionAuth>
                {/*Components that require to be protected by authentication*/}
                {/* <Profile /> */}
              </SessionAuth>
            }
          />

        </Routes>
        <Footer />
      </SuperTokensWrapper>
  )
}

export default App
