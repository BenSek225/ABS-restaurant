import React from 'react';

function Testimonials() {
   const testimonials = [
      {
         id: 1,
         text: "Un excellent service et des plats délicieux Un excellent service et des plats délicieux !",
         name: "John Doe",
         role: "Client",
         image: "/Images/Testimonials_1.jpg"
      },
      {
         id: 2,
         text: "Les plats sont un vrai délice, je recommande fortement Un excellent service et des plats !",
         name: "Jane Smith",
         role: "Fournisseur",
         image: "/Images/Testimonials_2.jpg"
      },
      {
         id: 3,
         text: "Livraison rapide et service impeccable. Un excellent service et des plats délicieux",
         name: "Alex Johnson",
         role: "Livreur",
         image: "/Images/Testimonials_3.jpg"
      },
      {
         id: 4,
         text: "Une expérience culinaire inoubliable. Un excellent service et des plats délicieux",
         name: "Emily Davis",
         role: "Directeur",
         image: "/Images/Testimonials_4.jpg"
      },
      {
         id: 5,
         text: "Ambiance conviviale et plats savoureux. Un excellent service et des plats délicieux",
         name: "Michael Brown",
         role: "Client",
         image: "/Images/Testimonials_5.jpg"
      }
   ];

   return (
      <section className="py-14 p-4 bg-[#3C1414] md:py-18 text-white">
         <div className="container mx-auto text-center mt-8 md:px-14">
            <div className='mb-10 md:mb-20'>
               <h2 className="tracking-wider text-3xl md:text-5xl font-bold mb-4 md:mb-8">
                  Découvrez ce que nos clients <br />satisfaits ont à dire
               </h2>
            </div>

            <div className="flex flex-wrap justify-center space-4">
               {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="w-full md:w-1/3 p-4 md:p-10">
                     <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                        <p className="mb-4 text-xl md:text-2xl">{testimonial.text}</p>
                        <div className="flex items-center">
                           <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 shadow-xl" />
                           <div>
                              <p className="font-bold text-lg md:text-xl">{testimonial.name}</p>
                              <p className="text-2sm md:text-lg">{testimonial.role}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Testimonials;
