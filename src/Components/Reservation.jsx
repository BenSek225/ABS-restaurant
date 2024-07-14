import React from 'react';

function Reservation() {
   return (
      <section className="py-14 p-4 bg-gray-200">
         <div className="container mx-auto text-center flex flex-col md:flex-row items-center">

            <div className='hidden md:block'>
               <div className='p-24'>
                  <img src="/Images/Ap_grand.jpg" alt="Reservation" className='rounded-2xl shadow-xl' />
               </div>
            </div>
            
            <div>
               <h2 className="tracking-wider text-3xl md:text-6xl md:mt-8 font-bold mb-8 md:mb-24">Souhaitez-vous faire des réservations ?</h2>

               <form className="w-full max-w-2xl mx-auto px-6 py-2">
                  <div className="flex flex-wrap -mx-3 mb-6">

                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                        <input className="appearance-none block w-full bg-gray-100 text-black border border-black rounded-xl py-3 md:py-4 px-4 focus:outline-none focus:bg-white" type="text" placeholder="Nom"/>
                     </div>

                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                        <input className="appearance-none block w-full bg-gray-100 text-black border border-black rounded-xl py-3 md:py-4 px-4 focus:outline-none focus:bg-white" type="text" placeholder="Prénom"/>
                     </div>

                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-10">
                        <input className="appearance-none block w-full bg-gray-100 text-black border border-black rounded-xl py-3 md:py-4 px-4 focus:outline-none focus:bg-white" type="text" placeholder="Contact"/>
                     </div>

                     <div className="w-full md:w-1/2 px-3 md:mb-10">
                        <input className="appearance-none block w-full bg-gray-100 text-black border border-black rounded-xl py-3 md:py-4 px-4 focus:outline-none focus:bg-white" type="email" placeholder="Email"/>
                     </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                     <div className="w-full px-3">
                        <textarea className="appearance-none block w-full bg-gray-100 text-black border border-black rounded-xl py-3 md:py-4 px-4 focus:outline-none focus:bg-white" placeholder="Votre message..."></textarea>
                     </div>
                  </div>

                  <button
                     className="inline-block bg-black font-bold text-white p-3 mt-6 text-lg tracking-widest
                        border-2 shadow-sm rounded-tr-2xl rounded-tl-2xl 
                        rounded-br-2xl rounded-bl-none transition duration-300 hover:border-black hover:bg-white hover:text-black
                        md:text-xl md:font-bold md:border-4 md:shadow-xl md:p-4">
                     Soumettre
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default Reservation;
