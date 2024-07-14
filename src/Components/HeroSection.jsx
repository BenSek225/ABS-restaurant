import React from 'react';

function Hero() {
   return (
      <section
         className=" bg-cover bg-center bg-hero-small bg-hero-large w-full">

         <div className="h-full w-full py-20 bg-black bg-opacity-50 flex flex-col justify-center items-center 
            text-white text-center p-8 md:p-40">

            <h1 className="tracking-wider text-3xl md:text-6xl font-bold border-2 md:border-none p-3 mb-5">
               Découvrez ABS-Restauration, là où la gourmandise rencontre la qualité
            </h1>

            <p className="tracking-wider text-xl md:text-2xl mb-5 md:mb-20 mt-5">
               Savourez nos mets délicieux et profitez d'un moment de détente et de plaisir.
            </p>

            <a href="#reservation" 
               className="tracking-widest mt-5 bg-white text-black text-lg font-bold p-4 shadow-xl 
                  rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-2xl transition duration-300 
                  hover:bg-transparent hover:text-white hover:border-4"> 
               Réserver une table
            </a>
         </div>

      </section>
   );
}

export default Hero;
