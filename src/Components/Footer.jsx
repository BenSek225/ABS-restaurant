import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const navigationLinks = [
  { href: "#home", text: "Accueil" },
  { href: "#menu", text: "Menu" },
  { href: "#about", text: "A propos" },
  { href: "#reservation", text: "Réservation" },
  { href: "#contact", text: "Contact" }
];

const openingHours = [
  { day: "Lundi", hours: "08:30 - 16:30" },
  { day: "Mardi", hours: "08:30 - 16:30" },
  { day: "Mercredi", hours: "08:30 - 16:30" },
  { day: "Jeudi", hours: "08:30 - 16:30" },
  { day: "Vendredi", hours: "08:30 - 16:30" },
  { day: "Samedi", hours: "Fermé", closed: true },
  { day: "Dimanche", hours: "Fermé", closed: true }
];

const phones = [
  "+225 0556289835",
  "+225 0710504007",
  "+225 0505004517",
  "+225 0749542806"
];

const socialLinks = [
  { 
    platform: "Facebook",
    icon: <FaFacebookF className="w-5 h-5" />,
    url: "https://www.facebook.com/profile.php?id=100095418309636"
  },
  {
    platform: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    url: "https://www.instagram.com/larhumerie.z4?igsh=OTdjMXBwNjQwdDdi"
  }
];

function Footer() {
  const handleScroll = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-[#1a1a1a] text-white py-14 p-4 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Logo et Navigation */}
        <motion.div 
          className='flex flex-col items-center space-y-8'
          {...fadeInUp}
        >
          <motion.div 
            className='rounded-xl bg-white/95 backdrop-blur-sm border shadow-xl p-2'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LazyLoadImage
              src="/Logo/LogoABS_Restauration-black.png"
              alt="Logo"
              effect="blur"
              className='h-24 md:h-32'
            />
          </motion.div>
          
          <nav>
            <ul className='flex flex-col space-y-3'>
              {navigationLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='tracking-widest text-lg md:text-xl font-medium'
                >
                  <a
                    href={link.href}
                    className="relative group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-400">
                      {link.text}
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Heures d'ouverture */}
        <motion.div 
          className='text-center lg:text-left'
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h2 className="tracking-widest text-2xl mb-6 font-bold flex items-center justify-center lg:justify-start gap-2">
            <FaClock className="text-purple-400" />
            Heures d'ouverture
          </h2>
          <ul className="space-y-3">
            {openingHours.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="tracking-wider text-lg flex justify-between items-center"
              >
                <span>{item.day}</span>
                <span className={item.closed ? 'text-purple-400' : ''}>
                  {item.hours}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div 
          id="contact" 
          className='text-center lg:text-left'
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <h2 className="tracking-widest text-2xl mb-6 font-bold flex items-center justify-center lg:justify-start gap-2">
            <FaPhone className="text-purple-400" />
            Contact
          </h2>
          <ul className="space-y-3">
            <motion.li 
              className="tracking-wider text-lg group"
              whileHover={{ x: 5 }}
            >
              <a 
                href="https://maps.app.goo.gl/jJeAkFfTjpbHrGzz6"
                className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="text-purple-400" />
                Boulevard Principale,<br />Yopougon selmer, Abidjan
              </a>
            </motion.li>
            
            {phones.map((phone, index) => (
              <motion.li 
                key={index}
                className="tracking-wider text-lg flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FaPhone className="text-purple-400" />
                {phone}
              </motion.li>
            ))}

            <motion.li 
              className="tracking-wider text-lg group"
              whileHover={{ x: 5 }}
            >
              <a 
                href="mailto:contact@absgroupe.ci"
                className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-purple-400" />
                contact@absgroupe.ci
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div 
          className='text-center lg:text-left'
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="tracking-widest text-2xl mb-6 font-bold">Suivez-nous</h2>
          <div className="flex flex-col space-y-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.div>
                <span className="group-hover:text-purple-400 transition-colors duration-300">
                  {social.platform}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Copyright */}
      <motion.div 
        className="border-t border-white/10 mt-12 pt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="tracking-wider text-sm text-white/60">
            &copy; {new Date().getFullYear()} Abs-Restauration. Tous droits réservés.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default React.memo(Footer);