import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const dishes = [
   {
      id: 1,
      title: 'Frites d\'ignames',
      description: 'Description du plat 1. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_1.jpg',
      price: '12.99€'
   },
   {
      id: 2,
      title: 'Tchêp',
      description: 'Description du plat 2. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_2.jpg',
      price: '15.99€'
   },
   {
      id: 3,
      title: 'Riz Cantonnais',
      description: 'Description du plat 3. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_3.jpg',
      price: '13.99€'
   },
   {
      id: 4,
      title: 'Frites et Viandes',
      description: 'Description du plat 4. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_4.jpg',
      price: '16.99€'
   },
   {
      id: 5,
      title: 'Crudité',
      description: 'Description du plat 5. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_5.jpg',
      price: '11.99€'
   }
];

const DishCard = React.memo(({ dish, isActive }) => (
   <motion.div 
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
   >
      <div className="relative overflow-hidden rounded-xl group">
         <LazyLoadImage
            src={dish.image}
            alt={dish.title}
            effect="blur"
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            placeholderSrc="/Images/placeholder.jpg"
         />
         <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20 opacity-0 hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0 }}
         />
         <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10"
         >
            <h3 className="text-2xl font-bold mb-2">{dish.title}</h3>
            <p className="text-sm text-gray-200 mb-2">{dish.description}</p>
            <p className="text-xl font-bold text-yellow-400">{dish.price}</p>
         </motion.div>
      </div>
   </motion.div>
));

function FeaturedDishes() {
   const [currentDishIndex, setCurrentDishIndex] = useState(0);
   const [touchStartX, setTouchStartX] = useState(null);

   const handleNext = useCallback(() => {
      setCurrentDishIndex((prevIndex) => (prevIndex + 1) % dishes.length);
   }, []);

   const handlePrevious = useCallback(() => {
      setCurrentDishIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
   }, []);

   const handleTouchStart = useCallback((e) => {
      setTouchStartX(e.touches[0].clientX);
   }, []);

   const handleTouchEnd = useCallback((e) => {
      if (touchStartX === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
         if (diff > 0) handleNext();
         else handlePrevious();
      }
      setTouchStartX(null);
   }, [touchStartX, handleNext, handlePrevious]);

   const visibleDishes = useMemo(() => {
      const dishes_count = window.innerWidth >= 1024 ? 3 : 1;
      const result = [];
      for (let i = 0; i < dishes_count; i++) {
         const index = (currentDishIndex + i) % dishes.length;
         result.push(dishes[index]);
      }
      return result;
   }, [currentDishIndex]);

   return (
      <motion.section 
         className="py-20 bg-gradient-to-b from-gray-50 to-white"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         <div className="container mx-auto px-4">
            <motion.div 
               className="text-center mb-16"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
            >
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Plats Vedettes</h2>
               <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </motion.div>

            <div className="relative px-8">
               <div 
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
               >
                  <AnimatePresence mode="wait">
                     {visibleDishes.map((dish, index) => (
                        <DishCard 
                           key={`${dish.id}-${index}`} 
                           dish={dish} 
                           isActive={index === 1}
                        />
                     ))}
                  </AnimatePresence>
               </div>

               <motion.button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  <FaRegArrowAltCircleLeft className="w-6 h-6" />
               </motion.button>

               <motion.button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  <FaRegArrowAltCircleRight className="w-6 h-6" />
               </motion.button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
               {dishes.map((_, index) => (
                  <motion.button
                     key={index}
                     className={`w-3 h-3 rounded-full ${
                        index === currentDishIndex ? 'bg-yellow-400' : 'bg-gray-300'
                     }`}
                     whileHover={{ scale: 1.2 }}
                     onClick={() => setCurrentDishIndex(index)}
                  />
               ))}
            </div>
         </div>
      </motion.section>
   );
}

export default React.memo(FeaturedDishes);
