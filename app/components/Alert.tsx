"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle, HiExclamationCircle, HiXMark } from "react-icons/hi2";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type?: "success" | "error";
}

const Alert = ({ isOpen, onClose, message, type = "success" }: AlertProps) => {
  // Auto-fermeture après 3 secondes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed top-24 right-6 z-[110] flex items-center gap-3 px-5 py-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl min-w-[300px]"
        >
          {/* Icône dynamique selon le type */}
          {type === "success" ? (
            <HiCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <HiExclamationCircle className="text-red-500 text-2xl" />
          )}

          <p className="flex-1 text-sm font-medium text-slate-700 dark:text-zinc-200">
            {message}
          </p>

          {/* Bouton de fermeture manuelle */}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-colors"
          >
            <HiXMark className="text-xl" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
