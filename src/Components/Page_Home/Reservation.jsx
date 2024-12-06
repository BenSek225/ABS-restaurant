import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const InputField = ({ type, placeholder, value, onChange }) => (
   <motion.div 
      className="w-full md:w-1/2 px-3 mb-6 md:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
   >
      <input 
         className="appearance-none block w-full bg-white/80 backdrop-blur-sm
            text-black border-2 border-gray-300 rounded-xl py-3 md:py-4 px-4
            transition-all duration-300
            focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
      />
   </motion.div>
);

function Reservation() {
   const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      contact: '',
      email: '',
      message: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Ici, vous pouvez ajouter la logique d'envoi du formulaire
      console.log('Formulaire soumis:', formData);
   };

   return (
      <motion.section 
         className="py-14 p-4 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         {/* Cercles décoratifs */}
         <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20" />
         <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-200 rounded-full opacity-20" />

         <div className="container mx-auto text-center flex flex-col md:flex-row items-center relative">
            <motion.div 
               className='hidden md:block w-full md:w-1/2'
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <div className='p-8 md:p-16'>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                     <LazyLoadImage
                        src="/Images/Ap_grand.jpg"
                        alt="Notre Restaurant"
                        effect="blur"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
               </div>
            </motion.div>
            
            <div className="w-full md:w-1/2">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <h2 className="tracking-wider text-3xl md:text-5xl font-bold mb-8 md:mb-12">
                     Réservez Votre Table
                  </h2>
                  <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
               </motion.div>

               <motion.form 
                  className="w-full max-w-2xl mx-auto px-6 py-2"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <div className="flex flex-wrap -mx-3 mb-6">
                     <InputField
                        type="text"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={(e) => handleChange({ target: { name: 'nom', value: e.target.value } })}
                     />
                     <InputField
                        type="text"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={(e) => handleChange({ target: { name: 'prenom', value: e.target.value } })}
                     />
                     <InputField
                        type="tel"
                        placeholder="Contact"
                        value={formData.contact}
                        onChange={(e) => handleChange({ target: { name: 'contact', value: e.target.value } })}
                     />
                     <InputField
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
                     />
                  </div>

                  <motion.div 
                     className="flex flex-wrap -mx-3 mb-6"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                  >
                     <div className="w-full px-3">
                        <textarea 
                           className="appearance-none block w-full bg-white/80 backdrop-blur-sm
                              text-black border-2 border-gray-300 rounded-xl py-3 md:py-4 px-4 mb-8
                              transition-all duration-300 min-h-[150px]
                              focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20"
                           placeholder="Votre message..."
                           value={formData.message}
                           onChange={(e) => handleChange({ target: { name: 'message', value: e.target.value } })}
                        />
                     </div>
                  </motion.div>

                  <motion.button
                     type="submit"
                     className="inline-block bg-black text-white px-8 py-3 rounded-full
                        border-2 border-black font-semibold tracking-wider
                        transition-all duration-300 transform
                        hover:bg-white hover:text-black hover:scale-105"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     Réserver maintenant
                  </motion.button>
               </motion.form>
            </div>
         </div>
      </motion.section>
   );
}

export default React.memo(Reservation);
