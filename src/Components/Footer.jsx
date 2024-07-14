import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 p-4">
      
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Logos et lien */}
        <div className='mx-auto flex md:flex-col items-center space-x-16 md:space-x-0 md:space-y-16'>
          <div className='rounded-xl bg-white border'>
              <img src="/Logo/LogoABS_Restauration-black.png" alt="Logo" className='h-24 md:h-32'/> 
          </div>
          
          <div>
              <ul className='flex flex-col space-y-2 mb-5'>
                <li className='tracking-widest text-1lg md:text-xl font-bold hover:text-purple-500 hover:underline'>
                  <a href="#home">Acceuil</a>
                </li>

                <li className='tracking-widest text-1lg md:text-xl font-bold hover:text-purple-500 hover:underline'>
                  <a href="#menu">Menu</a>
                </li>

                <li className='tracking-widest text-1lg md:text-xl font-bold hover:text-purple-500 hover:underline'>
                  <a href="#reservation">Réservation</a>
                </li>

                <li className='tracking-widest text-1lg md:text-xl font-bold hover:text-purple-500 hover:underline'>
                  <a href="#about">A propos</a>
                </li>
              </ul>
          </div>
          
        </div>

        <div className='border md:hidden mx-4 my-4'></div>
        
        {/* Heures d'ouverture */}
        <div className='md:text-center'>
          <h2 className="tracking-widest text-3xl text-center mb-10 font-bold">Heures d'ouverture</h2>
          <ul>
            <li className="md:tracking-widest text-xl mb-5">Lundi _..............._08:30 - 16:30</li>
            <li className="md:tracking-widest text-xl mb-5">Mardi _..............._08:30 - 16:30</li>
            <li className="md:tracking-widest text-xl mb-5">Mercredi _.........._08:30 - 16:30</li>
            <li className="md:tracking-widest text-xl mb-5">Jeudi _................_08:30 - 16:30</li>
            <li className="md:tracking-widest text-xl mb-5">Vendredi _.........._08:30 - 16:30</li>
            <li className="md:tracking-widest text-xl mb-5">Samedi _......................._<span className='text-purple-500'>Fermé</span></li>
            <li className="md:tracking-widest text-xl mb-5">Dimanche _..................._<span className='text-purple-500'>Fermé</span></li>
          </ul>
        </div>

        <div className='border md:hidden mx-4 my-4'></div>
        
        {/* Colonne des contacts */}
        <div id="contact" className='text-center'>
          <h2 className="tracking-widest text-3xl mb-10 text-center font-bold">Contact</h2>
          <ul>
            <li className="md:tracking-widest text-xl mb-5"><a href="https://maps.app.goo.gl/jJeAkFfTjpbHrGzz6">Adresse:  <span className='text-purple-500 hover:underline'>Boulevard Principale, <br />Yopougon selmer, Abidjan</span></a></li>
            <li className="md:tracking-widest text-xl mb-5">Téléphone: +225 0556289835</li>
            <li className="md:tracking-widest text-xl mb-5">Téléphone: +225 0710504007</li>
            <li className="md:tracking-widest text-xl mb-5">Téléphone: +225 0505004517</li>
            <li className="md:tracking-widest text-xl mb-5">Téléphone: +225 0749542806</li>
            <li className="md:tracking-widest text-xl mb-5"><a href="mailto:sekongobienvenu22@gmail.com">Email:  <span className='text-purple-500 hover:underline'>contact@absgroupe.ci</span></a></li>
          </ul>
        </div>

        {/* Colonne des réseaux sociaux */}
        {/* <div>
          <h2 className="text-3xl mb-10">Suivez-nous</h2>

          <div>
            <a to="https://www.facebook.com/profile.php?id=100095418309636" className={`text-purple-500 text-xl flex mb-5`}>
                <div className="bg-white w-7 h-7 rounded-full p-0.5 hover:bg-purple-500 mr-2">
                  <img 
                    src="/Icones/facebook.png"
                    alt="LogoFacebook" />
                </div>
                Facebook
            </a>

            <a to="https://www.instagram.com/larhumerie.z4?igsh=OTdjMXBwNjQwdDdi" className={`text-purple-500 text-xl flex mb-5`}>
                <div className="bg-white w-7 h-7 rounded-full p-0.5 hover:bg-purple-500 mr-2">
                  <img 
                    src="/Icones/instagram.png"
                    alt="LogoInstagram" />
                </div>
                Instagram
            </a>
          </div>
        </div> */}
      </div>
      
      {/* Barre inférieure */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          <div className="tracking-widest text-lg text-center">
              &copy; 2024 Abs-Restauration. Relume. All rights reserved.
          </div>

          <div
            className="tracking-widest text-xl text-center mt-4 md:mt-0 hover:underline">
              Site developer by  
                <a 
                  className='ms-1 text-purple-500 hover:underline'
                  href="https://www.instagram.com/sek.y_ben?igsh=MTBnN3hybnp1eGpnbw==">
                    Ben
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;