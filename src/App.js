import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components/Layout";
import {Home, About, Menu, BookATable, Blog, Contact} from './Components/Pages'

import './App.scss'
function App() {
  return <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/book-a-table" element={<BookATable />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </div>
}
export default App