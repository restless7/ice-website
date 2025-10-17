"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number";
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      required = false,
      min,
      max,
      value,
      onChange,
      error,
      className = "",
    },
    ref
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`space-y-2 ${className}`}
      >
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-800"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        <div className="relative">
          <motion.input
            ref={ref}
            id={name}
            name={name}
            type={type}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            whileFocus={{ scale: 1.02 }}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
              error
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-brand-gold focus:border-brand-gold hover:border-gray-400"
            } bg-white/80 backdrop-blur-sm`}
          />
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 left-0 text-xs text-red-500"
            >
              {error}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;