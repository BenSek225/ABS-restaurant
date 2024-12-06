import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

   useEffect(() => {
      const handleResize = () => {
         setIsLargeScreen(window.innerWidth > 1000);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
   };

   const buttonVariants = {
      initial: { scale: 1 },
      hover: { 
         scale: 1.05,
         boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
      },
      tap: { scale: 0.95 }
   };

   const backgroundStyle = {
      backgroundImage: `url(${isLargeScreen ? '/Images/Bg_grand.jpg' : '/Images/Bg_petit.jpg'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
   };

   const handleScroll = (elementId) => {
      const element = document.querySelector(elementId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section id="home" className="relative h-screen w-full overflow-hidden">
         {/* Background Video or Image */}
         <div 
            className="absolute inset-0"
            style={backgroundStyle}
         >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
         </div>

         {/* Content */}
         <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center">
               <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  Bienvenue chez<br />
                  <span className="text-purple-400">ABS Restaurant</span>
               </motion.h1>

               <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
               >
                  Découvrez une expérience culinaire unique, où la tradition rencontre l'innovation.
               </motion.p>

               <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  <motion.button
                     variants={buttonVariants}
                     initial="initial"
                     whileHover="hover"
                     whileTap="tap"
                     className="px-8 py-3 bg-purple-600 text-white rounded-lg text-lg font-semibold 
                        transform transition-all duration-300 hover:bg-purple-700 focus:outline-none 
                        focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                     onClick={() => handleScroll('#menu')}
                  >
                     Voir le Menu
                  </motion.button>

                  <motion.button
                     variants={buttonVariants}
                     initial="initial"
                     whileHover="hover"
                     whileTap="tap"
                     className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg 
                        text-lg font-semibold transform transition-all duration-300 
                        hover:bg-white hover:text-purple-600 focus:outline-none"
                     onClick={() => handleScroll('#reservation')}
                  >
                     Réserver une table
                  </motion.button>
               </motion.div>
            </div>
         </div>

         {/* Scroll Indicator */}
         <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
         >
            <div className="w-6 h-10 border-2 border-white rounded-full p-1">
               <motion.div
                  className="w-1 h-2 bg-white rounded-full mx-auto"
                  animate={{
                     y: [0, 12, 0],
                  }}
                  transition={{
                     duration: 1.5,
                     repeat: Infinity,
                     repeatType: "reverse",
                  }}
               />
            </div>
         </motion.div>
      </section>
   );
}

export default Hero;
