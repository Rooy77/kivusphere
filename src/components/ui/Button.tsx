"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  isLoading,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none overflow-hidden group cursor-pointer";

  const variants = {
    primary: "bg-[#4576FD] text-white hover:bg-[#1746E9] shadow-lg shadow-[#4576FD]/20",
    secondary: "bg-[#F49C00] text-white hover:opacity-90 shadow-lg shadow-[#F49C00]/20",
    outline: "border-2 border-[#4576FD] text-[#4576FD] hover:bg-[#4576FD] hover:text-white",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="mr-2 w-5 h-5" />}
          {children}
          {Icon && iconPosition === "right" && (
            <Icon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
        </>
      )}
    </motion.button>
  );
};
