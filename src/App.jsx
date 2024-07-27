// @ts-nocheck
import { useState } from 'react'
import './App.css'
import Navbar from './Header/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import { Newspaper } from 'lucide-react'
import Newsletter from './pages/Newsletter'
import { Footer } from 'flowbite-react'
import { FooterWithSocialLinks } from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Products />
        <Blog />
        <Newsletter />
      </main>
      <FooterWithSocialLinks />
    </>
  )
}

export default App
