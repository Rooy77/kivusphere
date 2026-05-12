"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
}

export const Card = ({
  children,
  className = "",
  hoverEffect = true,
  glass = true,
}: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      className={`
        relative rounded-3xl overflow-hidden p-6
        ${glass ? "bg-white/5 backdrop-blur-xl border border-white/10" : "bg-secondary"}
        ${className}
      `}
    >
      {/* Subtle background glow on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-br from-action/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-6 pt-4 border-t border-white/5 ${className}`}>{children}</div>
);
