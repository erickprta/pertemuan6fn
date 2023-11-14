// Import Footer, Hero, Movies, Navbar Components
import React from 'react'
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

import Navbar from '../components/Navbar/Navbar';
import Movies from '../components/Movies/Movies';

function Main() {
  return (
    <main>
     <Hero />
     <Movies/>
    </main>
  )
}
/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */

function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>    
    </>
  )
}
export default Home