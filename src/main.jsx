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
  getRedirectionURL: async (context) => {
    if (context.action === "TO_AUTH") {
      return "/auth"; // return the path where you are rendering the Auth UI
    } else if (context.action === "SUCCESS" && context.newSessionCreated) {
      return "/dashboard"; // defaults to "/"
    };
  },
  disableAuthRoute: true,
  recipeList: [EmailPassword.init({
    signInAndUpFeature: {
      signUpForm: {
        formFields: [{
          id: "firstname",
          label: "First Name: ",
          placeholder: "First name",
        },
        {
          id: "lastname",
          label: "Last Name: ",
          placeholder: "Last name"
        },
        {
          id: "username",
          label: "Username: ",
          placeholder: "Public username (Changeable)",
        }
      ]
      }
    }
  }), Session.init()]
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
