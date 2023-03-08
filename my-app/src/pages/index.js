import Navbar from '../components/Navbar';
import Sidebar from'../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import React, {useState} from 'react';
import LoginPage from '../components/Login';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection />
        <LoginPage />
    </>
  );
};

export default Home;