'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ParticleBackground from "@/components/invitation/ParticleBackground";
import InvitationCard from "@/components/invitation/InvitationCard";
import DownloadButton from "@/components/invitation/DownloadButton";
import EventDetails from "@/components/invitation/EventDetails";
import CornerElements from "@/components/invitation/CornerElements";
import CustomCursor from "@/components/invitation/CustomCursor";

export default function GraduationInvitationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] font-body text-white overflow-hidden relative flex flex-col items-center justify-center p-4">
      <CustomCursor />
      
      <ParticleBackground />
      
      <CornerElements />

      <div className="ambient-glow" />
      
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full max-w-lg z-10 relative"
      >
        <InvitationCard />
        <EventDetails />
        
        <div className="mt-12 flex justify-center">
          <DownloadButton />
        </div>
      </motion.main>
    </div>
  );
}
