import { useState } from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Client from './Components/Client'
import Layanan from './Pages/Layanan'
import Timeline from './Components/Timeline'
import Faq from './Pages/Faq'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { motion, useScroll } from "framer-motion";
import Bantuan from './Pages/Bantuan'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function App() {
    const [count, setCount] = useState(0)
    const { scrollYProgress } = useScroll();


    return (
        <div className='overflow-hidden'>
             <motion.div
        className="progress-bar "
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar/>
            <Home/>
            <Profile/>
            <Client/>
            <Layanan/>
            <Timeline/>
            <Faq/>
            <Bantuan/>
            <Footer/>
        </div>
    )
}

export default App
