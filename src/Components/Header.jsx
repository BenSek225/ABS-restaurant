import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const navItems = [
      { href: '#home', label: 'Accueil' },
      { href: '#menu', label: 'Menu' },
      { href: '#about', label: 'À Propos' },
      { href: '#reservation', label: 'Réservation' },
      { href: "#contact", label: "Contact" }
   ];

   const handleScroll = (elementId) => {
      const element = document.querySelector(elementId);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsOpen(false);
      }
   };

   return (
      <motion.header 
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         className={`fixed top-0 left-0 right-0 bg-white w-full z-50 transition-all duration-300 ${
            scrolled ? 'shadow-lg py-2' : 'py-4'
         }`}
      >
         <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div 
               className="flex-none"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
            >
               <img 
                  src="/Logo/LogoABS_Restauration-white.png" 
                  alt="Logo" 
                  className={`transition-all duration-300 ${
                     scrolled ? 'h-16 md:h-20' : 'h-20 md:h-28'
                  }`}
               /> 
            </motion.div>
            
            <nav className="flex-grow">
               <ul className="hidden md:flex justify-center space-x-8">
                  {navItems.map((item, index) => (
                     <motion.li 
                        key={item.label}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="tracking-widest text-lg font-bold"
                     >
                        <a 
                           href={item.href} 
                           className="relative py-2 px-1 text-gray-800 hover:text-black transition-colors duration-300"
                           onClick={() => handleScroll(item.href)}
                        >
                           {item.label}
                           <motion.div
                              className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.2 }}
                           />
                        </a>
                     </motion.li>
                  ))}
               </ul>
            </nav>

            {/* Le boutton */}
            <motion.div 
               className="flex-none hidden md:block"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
            >
               <a 
                  className="text-lg tracking-widest font-bold bg-black text-white px-6 py-3 
                     rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-black 
                     border-2 border-transparent hover:border-black"
               >
                  Commandes
               </a>
            </motion.div>

            <button 
               onClick={() => setIsOpen(!isOpen)}
               className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
               aria-label="Menu"
            >
               <motion.svg 
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
               >
                  <path 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     strokeWidth="2" 
                     d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
               </motion.svg>
            </button>
         </div>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white border-t"
               >
                  <nav className="container mx-auto px-4 py-4">
                     <ul className="space-y-4">
                        {navItems.map((item, index) => (
                           <motion.li
                              key={item.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="tracking-widest text-lg font-medium"
                           >
                              <a
                                 href={item.href}
                                 className="block py-2 text-gray-800 hover:text-black transition-colors duration-200"
                                 onClick={() => handleScroll(item.href)}
                              >
                                 {item.label}
                              </a>
                           </motion.li>
                        ))}
                        <motion.li
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.4 }}
                           className="pt-4"
                        >
                           <a
                              className="inline-block w-full text-center text-lg tracking-widest font-bold 
                                 bg-black text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 
                                 hover:bg-white hover:text-black border-2 border-transparent hover:border-black"
                           >
                              Commandes
                           </a>
                        </motion.li>
                     </ul>
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.header>
   );
}

export default Header;
