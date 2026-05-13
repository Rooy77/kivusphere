"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  icon?: any;
  isLoading?: boolean;
}

export const Button = ({
  children,
  icon: Icon = ArrowRight,
  isLoading,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative inline-flex items-center justify-center
        bg-secondary text-white font-medium 
        ${Icon ? "pl-6 pr-1.5 justify-between" : "px-6 justify-center"} 
        rounded-full h-[42px] min-w-[120px]
        focus:outline-none transition-all group cursor-pointer
        ${className} ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>
      ) : (
        <>
          <span className="text-sm truncate">{children}</span>
          {Icon && (
            <div className="size-8 rounded-full bg-action-soft flex items-center justify-center text-secondary shrink-0 z-10 ml-2">
              <Icon
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          )}
        </>
      )}
    </motion.button>
  );
};
