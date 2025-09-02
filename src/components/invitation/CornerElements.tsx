'use client';
import { motion } from 'framer-motion';

const CornerElements = () => {
  const cornerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } }
  };

  return (
    <>
      <motion.div className="corner-element top-left" variants={cornerVariants} initial="hidden" animate="visible" />
      <motion.div className="corner-element top-right" variants={cornerVariants} initial="hidden" animate="visible" />
      <motion.div className="corner-element bottom-left" variants={cornerVariants} initial="hidden" animate="visible" />
      <motion.div className="corner-element bottom-right" variants={cornerVariants} initial="hidden" animate="visible" />
    </>
  );
};

export default CornerElements;
