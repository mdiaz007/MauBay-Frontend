import './index.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Footer from './components/Footer'

import { Route, Routes, Router } from 'react-router-dom'

import SuperTokens, { SuperTokensWrapper, SessionAuth } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/emailpassword/prebuiltui';
import * as reactRouterDom from "react-router-dom";

function App() {

  return (
    <SuperTokensWrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />

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
