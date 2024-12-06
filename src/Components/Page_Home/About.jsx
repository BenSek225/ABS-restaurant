import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const fadeIn = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.6 }
};

const About = () => {
   return (
      <motion.section 
         className="py-14 p-4 bg-gradient-to-b from-white to-gray-50"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div 
               className="w-full md:w-1/2 p-4 relative group"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={fadeIn}
            >
               <div className="overflow-hidden rounded-2xl shadow-xl">
                  <LazyLoadImage
                     src="Images/Ap_petit.jpg"
                     alt="Notre Restaurant"
                     effect="blur"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
               </div>
               <motion.div 
                  className="absolute -bottom-6 -right-6 bg-black text-white p-4 md:p-6 rounded-2xl shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
               >
                  <p className="text-lg md:text-xl font-bold">Depuis 2020</p>
                  <p className="text-sm md:text-base">À votre service</p>
               </motion.div>
            </motion.div>

            <motion.div 
               className="w-full md:w-1/2 p-4 space-y-6"
               initial="initial"
               whileInView="animate"
               viewport={{ once: true }}
               variants={fadeIn}
            >
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <h2 className="tracking-wider text-3xl md:text-6xl font-bold mb-6">À Propos de Nous</h2>
                  <div className="w-20 h-1 bg-black mb-6"></div>
               </motion.div>

               <motion.p 
                  className='tracking-wider text-lg md:text-2xl text-gray-700 leading-relaxed'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
               >
                  Chez Abs-restauration, nous sommes passionnés par la cuisine et nous mettons tout notre amour dans chaque plat que nous préparons. Notre équipe dévouée s'efforce de créer une expérience culinaire unique qui éveillera vos sens.
               </motion.p>

               <motion.div 
                  className="grid grid-cols-2 gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
               >
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                     <h3 className="text-2xl md:text-4xl font-bold mb-2">5+</h3>
                     <p className="text-gray-600">Années d'expérience</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                     <h3 className="text-2xl md:text-4xl font-bold mb-2">1000+</h3>
                     <p className="text-gray-600">Clients satisfaits</p>
                  </div>
               </motion.div>

               <motion.button
                  className="mt-8 px-8 py-3 bg-black text-white rounded-full font-semibold 
                     transition-all duration-300 hover:bg-white hover:text-black border-2 border-black
                     transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  En savoir plus
               </motion.button>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default React.memo(About);
