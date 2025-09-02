'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  type: 'diamond' | 'circle';
  color: 'gold' | 'white';
};

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

type Meteor = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  size: number;
  angle: number;
};

type Orb = {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isClient) return;

    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      duration: Math.random() * 10 + 5,
      type: Math.random() > 0.7 ? 'diamond' : 'circle',
      color: Math.random() > 0.5 ? 'gold' : 'white'
    }));
    setParticles(newParticles);

    const newSparkles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 1,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 5
    }));
    setSparkles(newSparkles);

    const newOrbs = Array.from({ length: 2 }, (_, i) => ({
      id: i,
      width: Math.random() * 150 + 80,
      height: Math.random() * 150 + 80,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 5,
      delay: Math.random() * 4,
    }));
    setOrbs(newOrbs);

    const meteorInterval = setInterval(() => {
      setMeteors(prev => [...prev, {
        id: Date.now() + Math.random(),
        startX: Math.random() * 120 - 10,
        startY: -20,
        endX: Math.random() * 120 - 10,
        endY: 120,
        duration: Math.random() * 2 + 1,
        size: Math.random() * 1.5 + 0.5,
        angle: Math.random() * 60 + 30
      }]);
    }, 5000);

    return () => clearInterval(meteorInterval);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const cleanup = setInterval(() => {
      setMeteors(prev => prev.slice(-10));
    }, 5000);
    return () => clearInterval(cleanup);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'pattern-drift 30s linear infinite'
        }}
      />
      
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'diamond' ? 'transform rotate-45' : 'rounded-full'}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.color === 'gold' 
              ? 'radial-gradient(circle, #FFD700, #FFA500)' 
              : 'radial-gradient(circle, #FFFFFF, #E0E0E0)',
            boxShadow: particle.color === 'gold'
              ? '0 0 8px rgba(255, 215, 0, 0.7)'
              : '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, Math.sin(particle.id) * 15, 0],
            scale: [0.9, 1.1, 0.9],
            opacity: [particle.opacity * 0.4, particle.opacity, particle.opacity * 0.4],
            rotate: particle.type === 'diamond' ? [45, 135, 45] : [0, 360, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, sparkle.size, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div 
              className="absolute bg-yellow-300"
              style={{
                width: `${sparkle.size * 3}px`,
                height: '1.5px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
              }}
            />
            <div 
              className="absolute bg-yellow-300"
              style={{
                width: '1.5px',
                height: `${sparkle.size * 3}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 6px rgba(255, 255, 0, 0.7)'
              }}
            />
          </div>
        </motion.div>
      ))}

      {meteors.map(meteor => (
        <motion.div
          key={meteor.id}
          className="absolute"
          style={{
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            transform: `rotate(${meteor.angle}deg)`,
          }}
          animate={{
            x: [(meteor.endX - meteor.startX) * dimensions.width / 100],
            y: [(meteor.endY - meteor.startY) * dimensions.height / 100],
          }}
          transition={{
            duration: meteor.duration,
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            setMeteors(prev => prev.filter(m => m.id !== meteor.id));
          }}
        >
          <div 
            className="bg-gradient-to-r from-transparent via-yellow-300 to-yellow-500 opacity-70"
            style={{
              width: `${meteor.size * 25}px`,
              height: `${meteor.size}px`,
              borderRadius: '50px',
              boxShadow: '0 0 12px rgba(255, 215, 0, 0.7)',
              filter: 'blur(0.5px)'
            }}
          />
          
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-200 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity
            }}
            style={{
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
            }}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full"
            style={{
              width: orb.width,
              height: orb.height,
              left: orb.left,
              top: orb.top,
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.06), transparent)',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}
