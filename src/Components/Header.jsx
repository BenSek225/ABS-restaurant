import React, { useState } from 'react';

function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="bg-white border-b shadow-xl w-full z-10 px-4">
         <div className="container mx-auto flex justify-between items-center">

            <div className="flex-none"> 
               <img src="/Logo/LogoABS_Restauration-white.png" alt="Logo" className='h-24 md:h-32'/> 
            </div>
            
            <div className="flex-grow text-center">
               <nav>
                  <ul className="hidden md:flex justify-center space-x-4">
                     <li className="tracking-widest text-xl font-bold">
                        <a href="#home" className="hover:text-gray-500 text-black mr-10">Acceuil</a>
                     </li>

                     <li className="tracking-widest text-xl font-bold">
                        <a href="#menu" className="hover:text-gray-500 text-black mr-10">Menu</a>
                     </li>

                     <li className="tracking-widest text-xl font-bold">
                        <a href="#reservation" className="hover:text-gray-500 text-black mr-10">Réservation</a>
                     </li>

                     <li className="tracking-widest text-xl font-bold">
                        <a href="#about" className="hover:text-gray-500 text-black">A propos</a>
                     </li>
                  </ul>
               </nav>
            </div>

            <div className="flex-none hidden md:block">
               <a href="#contact" 
                  className="text-xl tracking-widest font-bold bg-black border-4 shadow-xl p-4 
                     text-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-none transition 
                     duration-300 hover:bg-white hover:text-black hover:border-black">
                  Contactez nous !
               </a>
            </div>

            <div className="md:hidden p-4">
               <button onClick={toggleMenu} className="text-black focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                  </svg>
               </button>
            </div>
         </div>

         {/* Menu déroulant pour les appareils mobiles */}
         {isOpen && (
         <div className="md:hidden transition-opacity duration-700 ease-in-out">
            <ul className="flex flex-col items-center space-y-4 mb-5">
               <li className="tracking-widest text-1lg font-bold">
                  <a href="#home" className="hover:text-gray-500 text-black">Acceuil</a>
               </li>

               <li className="tracking-widest text-1lg font-bold">
                  <a href="#menu" className="hover:text-gray-500 text-black">Menu</a>
               </li>

               <li className="tracking-widest text-1lg font-bold">
                  <a href="#reservation" className="hover:text-gray-500 text-black">Réservation</a>
               </li>

               <li className="tracking-widest text-1lg font-bold">
                  <a href="#about" className="hover:text-gray-500 text-black">A propos de nous</a>
               </li>

               <li>
                  <a href="#contact"
                     className="text-lg tracking-widest bg-black border-2 shadow-sm p-2
                        text-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-none 
                        transition duration-300 hover:bg-white hover:text-black hover:border-black">
                     Contactez nous !
                  </a>
               </li>
            </ul>
         </div>
         )}
      </header>
   );
}

export default Header;
