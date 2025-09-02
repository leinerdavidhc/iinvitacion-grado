'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, GraduationCap, Award } from 'lucide-react';

export default function InvitationCard() {
  return (
    <div className="text-center relative p-6 md:p-10 pt-10">
      <motion.div
        className="flex items-end justify-center space-x-8 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <GraduationCap className="w-10 h-10 text-yellow-400 icon-glow-intense" />
        </motion.div>
        
        <motion.div
          className="crown-glow"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Crown className="w-12 h-12 text-yellow-300" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Award className="w-10 h-10 text-yellow-400 icon-glow-intense" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="space-y-4 mb-8"
      >
        <div className="font-headline text-lg tracking-wide text-gray-300">
          Juana María Cabrera Ramos &amp; Wilmar Enrique Hoyos Mestra
        </div>
        <p className="text-yellow-200/80 text-sm uppercase tracking-widest font-light">
          participan a ustedes al grado de su hijo:
        </p>
      </motion.div>

      <motion.div
        className="graduate-name-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.5, type: 'spring' }}
      >
        <h2 
          className="font-headline text-white relative z-10 text-3xl md:text-5xl whitespace-nowrap"
          style={{ 
            textShadow: `
              0 0 30px rgba(255, 255, 255, 0.8),
              0 0 60px rgba(255, 215, 0, 0.6),
              0 0 90px rgba(255, 215, 0, 0.4),
              2px 2px 4px rgba(0, 0, 0, 0.3)
            `,
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          Leiner David Hoyos Cabrera
        </h2>
        
        <div className="name-underline" />
      </motion.div>
      
      <div className="premium-section-divider">
        <div className="divider-line" />
        <div className="divider-ornament">
          <div className="ornament-center" />
        </div>
        <div className="divider-line" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="space-y-4"
      >
        <h3 className="degree-title">
          Ingeniero de Sistemas
        </h3>
        <p className="text-yellow-200/70 text-sm uppercase tracking-widest">
          Título otorgado por la
        </p>
        <p className="university-name">
          Universidad de La Guajira
        </p>
      </motion.div>

      <div className="invitation-footer">
        <div className="footer-ornament-line" />
        <div className="footer-center-ornament">
          <div className="footer-inner-circle" />
        </div>
        <div className="footer-ornament-line" />
      </div>
    </div>
  );
}
