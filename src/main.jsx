import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react"
import EmailPassword from "supertokens-auth-react/recipe/emailpassword"
import Session from "supertokens-auth-react/recipe/session"

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/references/app-info
    appName: "maubay",
    apiDomain: "http://localhost:5173/",
    websiteDomain: "http://localhost:5173/",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SuperTokensWrapper>
        <App />
      </SuperTokensWrapper>
    </StrictMode>
  </BrowserRouter>
)
