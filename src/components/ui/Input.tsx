"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, error, icon, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/70 mb-2 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-action transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3
            ${icon ? "pl-12" : ""}
            text-white placeholder:text-white/20
            focus:outline-none focus:border-action focus:ring-4 focus:ring-action/10
            transition-all duration-300
            ${error ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10" : ""}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-red-400 ml-1">{error}</p>}
    </div>
  );
};

export const TextArea = ({ label, error, className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string, error?: string }) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/70 mb-2 ml-1">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 min-h-[120px]
          text-white placeholder:text-white/20
          focus:outline-none focus:border-action focus:ring-4 focus:ring-action/10
          transition-all duration-300
          ${error ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-400 ml-1">{error}</p>}
    </div>
  );
};
