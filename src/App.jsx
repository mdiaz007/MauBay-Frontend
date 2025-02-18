import './index.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Login_Signup from './pages/Login_Signup'

import { Route, Routes } from 'react-router-dom'

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';
import * as reactRouterDom from "react-router-dom";



function App() {

  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login_signups" element={<Login_Signup />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}

          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}
          {/*Your app routes*/}

        </Routes>
        {/* <Footer /> */}
    </>
  )
}

export default App
