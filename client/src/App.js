import React from 'react'
//  import bootstrap from "bootstrap";
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'

import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route  path="/all" element={<Read />}></Route>
        <Route  path="/:id" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App
