'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const details = [
  { icon: Calendar, text: '19 de Septiembre, 2025' },
];

const EventDetails = () => {
  return (
    <motion.div 
      className="mt-12 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h4 className="font-headline text-2xl text-yellow-200/90">
          Ceremonia de Grado
        </h4>
        {details.map((item, index) => (
          <div key={index} className="flex items-center gap-3 bg-black/20 border border-primary/20 rounded-full px-6 py-3 w-full max-w-xs justify-center">
            <item.icon className="w-5 h-5 text-primary" />
            <span className="text-base text-gray-200">{item.text}</span>
          </div>
        ))}
      </div>
       <p className="text-center text-lg italic text-yellow-200/90 font-headline mt-8">
        "Su presencia será nuestro mayor honor"
      </p>
    </motion.div>
  );
};

export default EventDetails;
