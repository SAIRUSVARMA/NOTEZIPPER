import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
      <Header />
      <main>
       <Routes>
        <Route path="/" element={<LandingPage/>} exact />
        <Route path="/mynotes" element={<MyNotes />} exact />
       </Routes>
       </main>

      <Footer />
    
  </BrowserRouter>
);

export default App;
