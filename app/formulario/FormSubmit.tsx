"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface FormSubmitProps {
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function FormSubmit({
  isLoading = false,
  disabled = false,
  children,
  onClick,
  className = "",
}: FormSubmitProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type="submit"
      disabled={isDisabled}
      onClick={onClick}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      className={`w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:from-brand-orange hover:to-brand-gold transform"
      } ${className}`}
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          <span>Enviando...</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <ArrowRightIcon className="w-5 h-5" />
        </>
      )}
    </motion.button>
  );
}