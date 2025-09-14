'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Target date: September 19, 2025, 00:00:00 Colombia Time (UTC-5)
    const targetDate = new Date('2025-09-19T00:00:00-05:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    // Render a placeholder or nothing on the server
    return null;
  }

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.8 }}
    >
      <div className="flex justify-center gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-5xl font-headline text-white tabular-nums" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.7)' }}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-yellow-200/70 mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
