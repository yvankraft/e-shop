"use client";
import Link from 'next/link';
import { motion } from 'framer-motion'; // Utilise 'framer-motion' pour plus de stabilité
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    return isActive 
      ? "bg-slate-500 p-2 min-w-20 rounded-2xl text-white flex items-center justify-center transition-all" 
      : "flex items-center min-w-20 justify-center p-2 rounded-2xl hover:bg-slate-100 active:bg-slate-700 active:text-white transition-all duration-300";
  };

  // Liste des liens pour éviter la répétition
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accessoires", href: "/product/categories/accesoires" },
    { name: "Hauts", href: "/product/categories/hauts" },
    { name: "Bas", href: "/product/categories/bas" },
    { name: "Chaussures", href: "/product/categories/chaussures" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="relative flex justify-center mt-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-evenly border border-slate-200 items-center p-2 text-slate-800 rounded-2xl bg-white shadow-lg w-auto px-4"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.href}
            whileHover={{ scale: 1.1 }} // Animation individuelle au survol
            whileTap={{ scale: 0.95 }}   // Petit effet de clic
          >
            <Link href={link.href} className={getStyle(link.href)}>
              {link.name}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
}
