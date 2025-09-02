'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  return (
    <motion.a
      href="/invitation.pdf" 
      download
      className="animated-border-button group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="animated-border-button-inner">
        <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
        Descargar Invitación
      </span>
    </motion.a>
  );
};

export default DownloadButton;
