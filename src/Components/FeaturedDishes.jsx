import React, { useState } from 'react';

const dishes = [
   {
      id: 1,
      title: 'Frites d\'ignames',
      description: 'Description du plat 1. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_1.jpg',
   },
   {
      id: 2,
      title: 'Tchêp',
      description: 'Description du plat 2. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_2.jpg',
   },
   {
      id: 3,
      title: 'Riz Cantonnais',
      description: 'Description du plat 3. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_3.jpg',
   },
   {
      id: 4,
      title: 'Frites et Viandes',
      description: 'Description du plat 4. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_4.jpg',
   },
   {
      id: 5,
      title: 'Crudité',
      description: 'Description du plat 5. Viande grillée à la perfection pour une texture tendre et succulente.',
      image: '/Images/Img_5.jpg',
   }
];

function FeaturedDishes() {
   const [currentDishIndex, setCurrentDishIndex] = useState(0);

   const handleNext = () => {
      setCurrentDishIndex((prevIndex) => (prevIndex + 1) % dishes.length);
   };

   const handlePrevious = () => {
      setCurrentDishIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
   };

   const handleTouchStart = (e) => {
      const touchStartX = e.touches[0].clientX;
      setTouchStartX(touchStartX);
   };

   const handleTouchMove = (e) => {
      if (!touchStartX) return;
      const touchCurrentX = e.touches[0].clientX;
      const diffX = touchCurrentX - touchStartX;

      if (diffX > 50) {
         handlePrevious();
         setTouchStartX(null);
      } else if (diffX < -50) {
         handleNext();
         setTouchStartX(null);
      }
   };

   const [touchStartX, setTouchStartX] = useState(null);

   const currentDish = dishes[currentDishIndex];

   return (
      <section className="py-14 p-4 w-full">
         <div className="container mx-auto text-center w-full py-4">
            
            <div className="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
               <div onClick={handlePrevious}
                  className="absolute left-5 md:left-20 md:w-14 md:h-14 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full 
                     shadow-xl z-2">
                  <img src="/Icones/flecheGauche.png" className='w-full h-full' alt="Fleche" />
               </div>

               <div className="w-full md:w-1/2 mx-auto p-4 text-white">
                  <img src={currentDish.image} alt={currentDish.title} className="rounded-2xl shadow-xl mb-6"/>
                  <h2 className="tracking-wider text-3xl md:text-5xl font-bold mb-4">{currentDish.title}</h2>
                  <p className='tracking-wider md:text-2xl'>{currentDish.description}</p>
               </div>

               <div onClick={handleNext}
                  className="absolute right-5 md:right-20 md:w-14 md:h-14 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full 
                  shadow-xl z-2">
                  <img src="/Icones/flecheDroite.png" className='w-full h-full' alt="Fleche" />
               </div>
            </div>

            <div className="flex justify-center mt-4 md:mt-6">
               {dishes.map((_, index) => (
                  <div
                  key={index}
                  className={`h-2 w-2 mx-1 md:h-4 md:w-4 md:mx-4 rounded-full ${index === currentDishIndex ? 'bg-gray-200' : 'bg-black'}`}
                  />
               ))}
            </div>

            <a href="#menu" 
               className="inline-block bg-white font-bold text-black p-3 mt-6 text-lg tracking-widest
                  border-2 shadow-sm rounded-tr-2xl rounded-tl-2xl 
                  rounded-br-2xl rounded-bl-none transition duration-300 hover:bg-black hover:text-white
                  md:text-xl md:font-bold md:border-4 md:shadow-xl md:p-4">
               En savoir plus
            </a>
         </div>
      </section>
   );
}

export default FeaturedDishes;
