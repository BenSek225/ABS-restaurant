import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Header from '../Components/Header';
import Hero from '../Components/Page_Home/HeroSection';
import FeaturedDishes from '../Components/Page_Home/FeaturedDishes';
import Menu from '../Components/Page_Home/Menu';
import About from '../Components/Page_Home/About';
import Reservation from '../Components/Page_Home/Reservation';
import Testimonials from '../Components/Page_Home/Testimonials';
import Footer from '../Components/Footer';

// Configuration des animations
const sectionVariants = {
   hidden: { opacity: 0 },
   visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
   }
};

const HomePage = () => {
   // Effet de scroll fluide pour la navigation
   useEffect(() => {
      const handleSmoothScroll = (e) => {
         if (e.target.hash) {
            e.preventDefault();
            const element = document.querySelector(e.target.hash);
            if (element) {
               window.scrollTo({
                  top: element.offsetTop - 80, // Ajustement pour le header fixe
                  behavior: 'smooth'
               });
            }
         }
      };

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', handleSmoothScroll);
      });

      return () => {
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', handleSmoothScroll);
         });
      };
   }, []);

   return (
      <AnimatePresence>
         <div className='relative bg-gradient-to-b from-[#3C1414] to-[#2A0F0F] min-h-screen'>
            {/* Éléments décoratifs */}
            <div className="fixed inset-0 pointer-events-none">
               <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
               <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            </div>

            {/* Contenu principal */}
            <div className="relative z-10">
               {/* Header */}
               <motion.section
                  initial="hidden"
                  animate="visible"
                  variants={sectionVariants}
                  className="sticky top-0 z-50"
               >
                  <Header />
               </motion.section>

               {/* Hero Section */}
               <motion.section
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                  viewport={{ once: true }}
                  id="home"
                  className="relative z-10"
               >
                  <Hero />
               </motion.section>

               {/* Featured Dishes */}
               <LazyLoadComponent>
                  <motion.section
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                     className="py-10 md:py-16"
                  >
                     <FeaturedDishes />
                  </motion.section>
               </LazyLoadComponent>

               {/* Menu Section */}
               <LazyLoadComponent>
                  <motion.section
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                     id="menu"
                  >
                     <Menu />
                  </motion.section>
               </LazyLoadComponent>

               {/* About Section */}
               <LazyLoadComponent>
                  <motion.section
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                     id="about"
                     className="py-10 md:py-16"
                  >
                     <About />
                  </motion.section>
               </LazyLoadComponent>

               {/* Reservation Section */}
               <LazyLoadComponent>
                  <motion.section
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                     id="reservation"
                  >
                     <Reservation />
                  </motion.section>
               </LazyLoadComponent>

               {/* Testimonials Section */}
               <LazyLoadComponent>
                  <motion.section
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                     className="py-10 md:py-16"
                  >
                     <Testimonials />
                  </motion.section>
               </LazyLoadComponent>

               {/* Footer */}
               <LazyLoadComponent>
                  <motion.footer
                     initial="hidden"
                     whileInView="visible"
                     variants={sectionVariants}
                     viewport={{ once: true }}
                  >
                     <Footer />
                  </motion.footer>
               </LazyLoadComponent>
            </div>
         </div>
      </AnimatePresence>
   );
};

export default React.memo(HomePage);
