import React from 'react';

const menuItems = [
   {
      image: "/Images/Img_1.jpg",
      title: "Frites d'ignames",
      description: "Description du plat 1. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_2.jpg",
      title: "Tchêp",
      description: "Description du plat 2. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_3.jpg",
      title: "Riz cantonnais",
      description: "Description du plat 3. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_4.jpg",
      title: "Frites et Viandes",
      description: "Description du plat 4. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_5.jpg",
      title: "Crudité",
      description: "Description du plat 5. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_6.jpg",
      title: "Poulet Flambée",
      description: "Description du plat 6. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_7.jpg",
      title: "Spaguetti Bollo",
      description: "Description du plat 7. Viande grillée à la perfection pour une texture tendre et succulente."
   },
   {
      image: "/Images/Img_8.jpg",
      title: "Poulet Panée",
      description: "Description du plat 8. Viande grillée à la perfection pour une texture tendre et succulente."
   }
];

function Menu() {
   return (
      <section className="py-14 p-4 md:py-18 bg-gray-200">
         <div className="container mx-auto text-center mt-8 md:px-14">

            <div className='mb-10 md:mb-20'>
               <h2 className="tracking-wider text-3xl md:text-5xl font-bold mb-4 md:mb-8">MENU</h2>
               <p className='tracking-wider md:text-2xl px-2 md:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sapiente maiores eaque fugit iure similique <br /> quas assumenda necessitatibus.</p>
            </div>

            <div className="flex flex-wrap justify-center space-4">
               {menuItems.map((item, index) => (
                  <div key={index} className="w-full md:w-1/3 p-4 md:p-10">
                     <img src={item.image} alt={`Menu Item ${index + 1}`} className="rounded-3xl shadow-xl mb-2"/>
                     <p className="font-bold text-2xl md:text-4xl md:mb-4">{item.title}</p>
                     <p className='md:text-xl'>{item.description}</p>
                  </div>
               ))}
            </div>

            <div className='relative'>
               <a href="#menu" 
                  className="inline-block bg-black font-bold text-white p-3 mt-6 text-lg tracking-widest 
                     border-2 shadow-sm  rounded-tr-2xl rounded-tl-2xl 
                     rounded-br-none rounded-bl-2xl transition duration-300 hover:border-black hover:bg-white hover:text-black
                     md:text-xl md:border-4 md:shadow-xl md:p-4">
                  En savoir plus
               </a>
            </div>
         </div>
      </section>
   );
}

export default Menu;
