"use client";

import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FormSelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

export default function FormSelect({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
  error,
  placeholder = "Selecciona una opción",
  className = "",
}: FormSelectProps) {
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
        <motion.select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          whileFocus={{ scale: 1.02 }}
          className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 appearance-none bg-white/80 backdrop-blur-sm cursor-pointer ${
            error
              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:ring-brand-gold focus:border-brand-gold hover:border-gray-400"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </motion.select>

        {/* Custom dropdown icon */}
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

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