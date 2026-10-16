import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

export default function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Profile></Profile>
    <Repositories></Repositories>
    <Footer></Footer>
    </>
  );
}
