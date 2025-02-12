import './index.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import Cart from './pages/Cart'
import Profile from './pages/Profile'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  )
}

export default App
