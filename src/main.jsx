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
    // enableDebugLogs: true,
    // learn more about this on https://supertokens.com/docs/references/app-info
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
  <BrowserRouter>
    <StrictMode>
      <SuperTokensWrapper>
        <App />
      </SuperTokensWrapper>
    </StrictMode>
  </BrowserRouter>
)
