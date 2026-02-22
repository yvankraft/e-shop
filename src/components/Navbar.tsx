"use client";
import Link from "next/link";
import {
  Home,
  Shirt,
  Layers,
  Watch,
  ShoppingBag,
  Mail,
  UserCircle,
} from "lucide-react";
import { motion } from "framer-motion"; // Utilise 'framer-motion' pour plus de stabilité
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    const baseStyle =
      "flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300";
    return isActive
      ? `${baseStyle} bg-slate-500 text-white`
      : `${baseStyle} hover:bg-slate-100 text-slate-600`;
  };

  return (
     <div className="relative flex justify-center ">
    <motion.nav 
    animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 10}}
      className="mt-2 flex justify-evenly border border-slate-200 items-center w-full p-2 text-slate-800 rounded-2xl bg-white shadow-lg max-w-[1200px]">
        <div className="Logo">
          <img
            src="/logo.png"
            alt="Logo de l'application"
            className="h-8 w-8"
          />
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            <Link href="/" className={getStyle("/")}>
            <Home size={18} />
            Accueil
          </Link></motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link
            href="/product/categories/hommes"
            className={getStyle("/product/categories/hommes")}
          >
            <Layers size={18} />
            Hommes
          </Link>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link
            href="/product/categories/jeunes"
            className={getStyle("/product/categories/jeunes")}
          >
            <Shirt size={18} />
            Jeunes
          </Link></motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link
            href="/product/categories/chaussures"
            className={getStyle("/product/categories/chaussures")}
          >
            <Watch size={18} />
            Chaussures
          </Link></motion.div>
          <motion.div whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link
            href="/product/categories/accesoires"
            className={getStyle("/product/categories/accesoires")}
          >
            <ShoppingBag size={18} />
            Accessoires
          </Link></motion.div>
        </div>
        <div className="flex items-center flex-end">
          
          <Link href="/contact" className={getStyle("/contact")}>
            <Mail size={18} />
            Contact
          </Link>

          <Link href="/auth/login" className={getStyle("/auth/login")}>
            <UserCircle size={18} />
            Login
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
