'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const details = [
  { icon: Calendar, text: 'Sábado, 28 de Septiembre, 2024' },
  { icon: Clock, text: '7:00 PM' },
  { icon: MapPin, text: 'Salón de eventos "La Gala"' },
];

const EventDetails = () => {
  return (
    <motion.div 
      className="mt-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <p className="text-center text-lg italic text-yellow-200/90 font-headline shimmer-text">
        "Con nuestros mejores deseos para un futuro brillante."
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-center mt-6">
        {details.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <item.icon className="w-6 h-6 text-primary icon-glow-intense" />
            <span className="text-base text-gray-300">{item.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventDetails;
