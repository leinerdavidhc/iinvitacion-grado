'use client';
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ParticleBackground from "@/components/invitation/ParticleBackground";
import InvitationCard from "@/components/invitation/InvitationCard";
import DownloadButton from "@/components/invitation/DownloadButton";
import CornerElements from "@/components/invitation/CornerElements";
import CustomCursor from "@/components/invitation/CustomCursor";
import EventDetails from "@/components/invitation/EventDetails";
import CountdownTimer from "@/components/invitation/CountdownTimer";

export default function GraduationInvitationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] font-body text-white overflow-hidden relative flex flex-col items-center justify-center p-4 pb-20">
      <CustomCursor />
      
      <ParticleBackground />
      
      <CornerElements />

      <div className="ambient-glow" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full max-w-lg z-10 relative"
          >
            <InvitationCard />
            <CountdownTimer />
            <EventDetails />
            
            <div className="mt-8 flex justify-center">
              <DownloadButton />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
