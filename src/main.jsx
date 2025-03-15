import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react"
import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
import Session from "supertokens-auth-react/recipe/session"

import './index.css'
import Navigation from './components/Navigation.jsx'
import App from './App.jsx'
import Footer from './components/Footer.jsx'

SuperTokens.init({
  appInfo: {
    // enableDebugLogs: true,
    appName: "maubay",
    apiDomain: import.meta.env.VITE_API_DOMAIN,
    websiteDomain: import.meta.env.VITE_WEBSITE_DOMAIN,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  style: `
    [data-supertokens~=authPage]{
      position: absolute;
      top: 49%;
      left: 50%;
      transform: translate3d(-50%,-50%, 0);
    }`,
  recipeList: [EmailPassword.init(), Session.init()]
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuperTokensWrapper>
      <BrowserRouter>
        <Navigation status="Dashboard" />
        <App />
        <Footer />
      </BrowserRouter>
    </SuperTokensWrapper>
  </StrictMode>
)
