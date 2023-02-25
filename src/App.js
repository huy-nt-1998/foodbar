import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import BookATable from "./Components/Pages/BookATable/BookATable";
import Contact from "./Components/Pages/Contact/Contact";
import Menu from "./Components/Pages/Menu/Menu";
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
  </div>
}
export default App