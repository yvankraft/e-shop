"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  danger?: boolean; // Si vrai, le bouton principal sera rouge
}

const Modal = ({ isOpen, onClose, title, children, danger }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 1. Backdrop avec flou progressif */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* 2. Fenêtre de la Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden bg-white/90 dark:bg-zinc-900/90 border border-white/20 dark:border-zinc-800 shadow-2xl rounded-[2.5rem]"
          >
            {/* Barre de décoration haute */}
            <div
              className={`h-2 w-full ${danger ? "bg-red-500" : "bg-blue-500"}`}
            />

            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              {/* Corps */}
              <div className="text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
