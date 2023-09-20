/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/NAvbar'
import Home from './Components/Home/home'
import Search from './Components/Search/search'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Destinations from './Components/Destinations/Destinations'
import Subscribers from './Components/Subs/Subscribers'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      {/* <Support/>
      <Info/>
      <Destinations/>
      <Lounge/>
      <Subscribers/>
      <Footer/> */}
    </div>
  )
}

export default App
