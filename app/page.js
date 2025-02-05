"use client"
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Qualifications from "./components/Qualifications";
import Skills from "./components/Skills";

export default function Home() {
  return (
   <>
   <Navbar/>
  {/* Content Below */}
  {/* <div className="relative -z-0"> */}
    
  <Header/>
   <About/>
   <Skills/>
   <Qualifications/>
  {/* </div> */}
   </>
  );
}
