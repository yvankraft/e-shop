"use client";
import { motion, AnimatePresence } from "framer-motion"; // Ajoute AnimatePresence pour l'exit
import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  danger?: boolean;
}

const Modal = ({ isOpen, onClose, title, children, danger }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* L'Arrière-plan flouté (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 z-40 backdrop-blur-xl"
          />

          {/* La Boite de la Modal (Centrée) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white dark:bg-zinc-900 
                border border-slate-200 dark:border-slate-800 
                rounded-3xl shadow-2xl flex flex-col 
                w-[clamp(50%,700px,95%)] h-[min(50vh,350px)] 
                overflow-hidden z-10"
          >
            {/* Barre de couleur danger/info */}
            <div
              className={`h-2 w-full ${danger ? "bg-red-500" : "bg-blue-500"}`}
            />

            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {title}
                </h2>
              </div>

              {/* Contenu */}
              <div className="flex-1 overflow-y-auto text-slate-600 dark:text-zinc-400">
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
