import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const testimonials = [
   {
      id: 1,
      text: "Un excellent service et des plats délicieux. L'ambiance est chaleureuse et le personnel très attentionné !",
      name: "John Doe",
      role: "Client Fidèle",
      image: "/Images/Testimonials_1.jpg",
      rating: 5
   },
   {
      id: 2,
      text: "Les plats sont un vrai délice, je recommande fortement. La qualité est toujours au rendez-vous !",
      name: "Jane Smith",
      role: "Critique Culinaire",
      image: "/Images/Testimonials_2.jpg",
      rating: 5
   },
   {
      id: 3,
      text: "Livraison rapide et service impeccable. Les plats arrivent toujours chauds et bien présentés.",
      name: "Alex Johnson",
      role: "Client Régulier",
      image: "/Images/Testimonials_3.jpg",
      rating: 4
   },
   {
      id: 4,
      text: "Une expérience culinaire inoubliable. Chaque visite est un moment de plaisir gustatif.",
      name: "Emily Davis",
      role: "Blogueuse Culinaire",
      image: "/Images/Testimonials_4.jpg",
      rating: 5
   },
   {
      id: 5,
      text: "Ambiance conviviale et plats savoureux. Un véritable voyage gustatif à chaque visite !",
      name: "Michael Brown",
      role: "Chef d'Entreprise",
      image: "/Images/Testimonials_5.jpg",
      rating: 5
   }
];

const TestimonialCard = React.memo(({ testimonial, index }) => {
   return (
      <motion.div 
         className="w-full md:w-1/3 p-4 md:p-6"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
      >
         <motion.div 
            className="bg-white/90 backdrop-blur-sm text-black p-6 rounded-2xl shadow-xl relative overflow-hidden group"
            whileHover={{ y: -5 }}
         >
            <FaQuoteLeft className="text-4xl text-[#3C1414]/10 absolute top-4 left-4 transform -rotate-12" />
            
            <motion.div
               className="relative z-10"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
            >
               <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700">{testimonial.text}</p>
               
               <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                     <LazyLoadImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        effect="blur"
                        className="w-12 h-12 rounded-full object-cover shadow-lg"
                     />
                     <div className="absolute inset-0 rounded-full border-2 border-[#3C1414] opacity-0 group-hover:opacity-100 transform scale-110 transition-all duration-300" />
                  </div>
                  
                  <div>
                     <p className="font-bold text-lg">{testimonial.name}</p>
                     <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
               </div>

               <div className="absolute top-4 right-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                     <motion.span 
                        key={i}
                        className="text-yellow-400"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                     >
                        ★
                     </motion.span>
                  ))}
               </div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
});

function Testimonials() {
   const [currentTestimonial, setCurrentTestimonial] = useState(0);

   const handleNext = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
   };

   const handlePrev = () => {
      setCurrentTestimonial((prev) => 
         prev === 0 ? testimonials.length - 1 : prev - 1
      );
   };

   return (
      <motion.section 
         className="py-14 p-4 bg-gradient-to-b from-[#3C1414] to-[#2A0F0F] md:py-18 text-white relative overflow-hidden"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
      >
         {/* Cercles décoratifs */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

         <div className="container mx-auto text-center mt-8 md:px-14 relative z-10">
            <motion.div 
               className='mb-10 md:mb-20'
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="tracking-wider text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                  Découvrez ce que nos clients <br />satisfaits ont à dire
               </h2>
               <div className="w-24 h-1 bg-white/20 mx-auto"></div>
            </motion.div>

            <div className="flex flex-wrap justify-center">
               {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                     key={testimonial.id} 
                     testimonial={testimonial} 
                     index={index}
                  />
               ))}
            </div>
         </div>
      </motion.section>
   );
}

export default React.memo(Testimonials);
