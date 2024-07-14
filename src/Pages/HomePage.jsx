import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/HeroSection';
import FeaturedDishes from '../Components/FeaturedDishes';
import Menu from '../Components/Menu';
import About from '../Components/About';
import Reservation from '../Components/Reservation';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';

function HomePage() {
   return (
      <div className='bg-[#3C1414] px-3 md:px-6'>

         <div id="home">
            <Header />
         </div>

         <Hero />

         <FeaturedDishes />

         <div id="menu">
            <Menu />
         </div>

         <div id="about">
            <About />
         </div>

         <div id="reservation">
            <Reservation />
         </div>

         <Testimonials />

         <Footer />
         
      </div>
   );
}

export default HomePage;
