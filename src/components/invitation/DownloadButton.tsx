'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/invitacion.jpg';
    link.download = 'invitacion-graduacion.jpg';
    
    // Append to the document, click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="inline-flex items-center justify-center px-8 py-3 bg-black/20 border border-primary/30 rounded-full text-base font-medium text-gray-200 hover:bg-primary/20 hover:text-white transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download className="w-5 h-5 mr-2 transition-transform group-hover:text-primary" />
      Descargar Invitación
    </motion.button>
  );
};

export default DownloadButton;
