"use client"
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
   <>
   <Navbar/>
  <Header/>
   <About/>
   <Skills/>
   <Qualifications/>
   <Work/>
   </>
 
 
  );
}
