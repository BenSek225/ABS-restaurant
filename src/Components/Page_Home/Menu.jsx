import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const categories = ['Tous', 'Entrées', 'Plats', 'Desserts'];

const menuItems = [
   {
      image: "/Images/Img_1.jpg",
      title: "Frites d'ignames",
      description: "Description du plat 1. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "12.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_2.jpg",
      title: "Tchêp",
      description: "Description du plat 2. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "15.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_3.jpg",
      title: "Riz cantonnais",
      description: "Description du plat 3. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "13.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_4.jpg",
      title: "Frites et Viandes",
      description: "Description du plat 4. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "16.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_5.jpg",
      title: "Crudité",
      description: "Description du plat 5. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "8.99€",
      category: "Entrées"
   },
   {
      image: "/Images/Img_6.jpg",
      title: "Poulet Flambée",
      description: "Description du plat 6. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "18.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_7.jpg",
      title: "Spaguetti Bollo",
      description: "Description du plat 7. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "14.99€",
      category: "Plats"
   },
   {
      image: "/Images/Img_8.jpg",
      title: "Poulet Panée",
      description: "Description du plat 8. Viande grillée à la perfection pour une texture tendre et succulente.",
      price: "17.99€",
      category: "Plats"
   }
];

function Menu() {
   const [selectedCategory, setSelectedCategory] = useState('Tous');
   const [hoveredItem, setHoveredItem] = useState(null);

   const filteredItems = selectedCategory === 'Tous'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5
         }
      }
   };

   return (
      <section id="menu" className="py-20 bg-gradient-to-b from-[#2A0F0F] to-[#3C1414]">
         <div className="container mx-auto px-4">
            {/* Section Title */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre Menu</h2>
               <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Découvrez notre sélection de plats exquis, préparés avec passion et des ingrédients de qualité.
               </p>
            </motion.div>

            {/* Categories */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-wrap justify-center gap-4 mb-12"
            >
               {categories.map((category, index) => (
                  <motion.button
                     key={category}
                     onClick={() => setSelectedCategory(category)}
                     className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300
                        ${selectedCategory === category
                           ? 'bg-purple-600 text-white'
                           : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {category}
                  </motion.button>
               ))}
            </motion.div>

            {/* Menu Items Grid */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {filteredItems.map((item, index) => (
                  <motion.div
                     key={index}
                     variants={itemVariants}
                     onHoverStart={() => setHoveredItem(index)}
                     onHoverEnd={() => setHoveredItem(null)}
                     className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm
                        transform transition-all duration-300 hover:scale-105"
                  >
                     <div className="relative aspect-[4/3] overflow-hidden">
                        <LazyLoadImage
                           src={item.image}
                           alt={item.title}
                           effect="blur"
                           className="w-full h-full object-cover"
                        />
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                           className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                           <button className="px-6 py-2 bg-purple-600 text-white rounded-full
                              transform hover:scale-105 transition-transform">
                              Voir les détails
                           </button>
                        </motion.div>
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                           <span className="text-purple-400 font-semibold text-lg">{item.price}</span>
                           <button className="text-white bg-purple-600 px-4 py-2 rounded-lg
                              hover:bg-purple-700 transition-colors">
                              Commander
                           </button>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}

export default React.memo(Menu);
