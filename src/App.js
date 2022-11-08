import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import BookATable from "./Pages/BookATable/BookATable";
import Contact from "./Pages/Contact/Contact";
import Menu from "./Pages/Menu/Menu";
import './App.scss'
function App() {
  return <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/book-table" element={<BookATable />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
}
export default App