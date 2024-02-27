import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Navbar from './components/Navbar'
import Search from './components/Search'

const App = () => {

  const [sidebar,setSidebar] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} setSidebar={setSidebar}/>} />
          <Route path="/video/:categoryId/:videoId" element={<Video sidebar={sidebar} setSidebar={setSidebar}/>} />
          <Route path='/search/:q' element={<Search />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App