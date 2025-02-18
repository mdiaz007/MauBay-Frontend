import './index.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Login_Signup from './pages/Login_Signup'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login_signup" element={<Login_Signup />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        {/* <Footer /> */}
    </>
  )
}

export default App
