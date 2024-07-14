import React from 'react';

function About() {
   return (
      <section className="py-14 p-4 bg-white mb-20 md:mb-32">
         <div className="container mx-auto flex flex-col md:flex-row items-center">

            <div className="w-full md:w-1/2 p-4">
               <img src="Images/Ap_petit.jpg" alt="About Us" className="rounded-2xl shadow-xl mb-4"/>
            </div>

            <div className="w-full md:w-1/2 p-4">
               <h2 className="tracking-wider text-3xl md:text-6xl md:text-center font-bold mb-4 md:mb-20">A Propos de nous</h2>
               <p className='tracking-wider text-xl md:text-3xl md:text-center'>Chez Abs-restauration, nous sommes passionnés par la cuisine et nous mettons tout notre amour dans chaque plat que nous préparons. Venez découvrir une expérience culinaire unique qui éveillera vos sens.</p>
            </div>
         </div>
      </section>
   );
}

export default About;
