"use client";
import Link from 'next/link'
import { motion } from 'motion/react';
import { usePathname } from "next/navigation";
import { div } from 'motion/react-client';

export default function Navbar() {
   const pathname = usePathname();

   const getStyle = (href: string) => {
    const isActive = pathname === href;
    return isActive 
      ? "bg-slate-500 p-1 rounded-2xl w-auto text-white flex items-center justify-center" 
      : "flex items-center justify-center p-1 rounded-2xl w-auto hover:bg-slate-100 active:bg-slate-700 active:duration-0 duration-1000 active:text-white transition-colors";
  };
  return (
    <div className="relative flex justify-center ">
    <motion.nav 
    animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 100, damping: 10}}
  whileHover={{ scale: 1.1 }}
      className="nav flex justify-evenly border border-slate-200 items-center p-2 text-slate-800 rounded-2xl bg-white shadow-lg w-[60%]">
        <Link href="/" className={getStyle("/")}>Home</Link>
        <Link href="/product/categories/accesoires" className={getStyle("/product/categories/accesoires")}>accessoires</Link>
        <Link href="/product/categories/hauts" className={getStyle("/product/categories/hauts")}>hauts</Link>
        <Link href="/product/categories/bas" className={getStyle("/product/categories/bas")}>bas</Link>
        <Link href="/product/categories/chaussures" className={getStyle("/product/categories/chaussures")}>chaussures</Link>
        <Link href="/contact" className={getStyle("/contact")}>Contact</Link>
    </motion.nav>
    </div>
  )
}
