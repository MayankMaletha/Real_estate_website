import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Footer";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // REPLACE 'Real_estate_website' WITH YOUR EXACT REPO NAME
  // If your repo is named differently, update the text between the slashes below
  base: "/Real_estate_website/", 
})

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
