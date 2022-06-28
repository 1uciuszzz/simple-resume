import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FindMe from "./components/FindMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Works />
      <FindMe />
      <Contact />
      <Footer />
    </div>
  );
}
