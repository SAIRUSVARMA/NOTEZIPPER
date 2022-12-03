import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Header />
    <main>
      <Route path="/" element={LandingPage} exact />
      <Route path="/mynotes" element={<MyNotes />} exact />
    </main>

    <Footer />
  </Routes>
);

export default App;
