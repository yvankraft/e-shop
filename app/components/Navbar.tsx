"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi2";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); // Récupération de la session
  const userLetter = session?.user?.name
    ? session.user.name.charAt(0).toUpperCase()
    : session?.user?.email?.charAt(0).toUpperCase();
  // On définit la destination dynamiquement
  // Si session existe -> /pages/account, sinon -> /login
  const accountHref = session ? "/pages/account" : "/login";

  const getStyle = (href: string) => {
    const isActive = pathname === href;
    const baseStyle =
      "flex items-center gap-2 px-4 py-1 rounded-2xl transition-all duration-300";
    return isActive
      ? `${baseStyle} bg-slate-500 text-white`
      : `${baseStyle} hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:hover:text-slate-200 dark:text-slate-400`;
  };

  return (
    <nav>
      <motion.nav
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className=" nav fixed left-1/2 -translate-x-1/2 w-[96%] flex z-50 justify-evenly p-1 text-slate-800 dark:bg-zinc-900 dark:text-white rounded-2xl bg-white shadow-lg gap-4 max-w-400 my-1 border border-slate-200  dark:border-slate-700 dark:shadow-slate-700"
      >
        <div>
          <motion.div id="fisrt" className=" flex items-center h-full">
            <p className="text-2xl font-bold">logo</p>
          </motion.div>
        </div>
        <div className="flex ">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/" className={getStyle("/")}>
              Acceuil
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/pages/homme" className={getStyle("/pages/homme")}>
              hommes
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/pages/femmes" className={getStyle("/pages/femmes")}>
              femmes
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="div"
          >
            <Link href="/pages/enfants" className={getStyle("/pages/enfants")}>
              enfants
            </Link>
          </motion.div>
        </div>
        <div className="flex">
          <Link href="/pages/panier" className={getStyle("/pages/panier")}>
            <HiOutlineShoppingBag size={28} title="Panier" />
          </Link>
          <Link href={accountHref} className={getStyle(accountHref)}>
            {session ? (
              // L'AVATAR AVEC LA LETTRE (STYLE GOOGLE)
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-white text-sm font-bold border border-slate-700 shadow-sm">
                {userLetter}
              </div>
            ) : (
              // L'ICÔNE SI DÉCONNECTÉ
              <HiOutlineUser size={28} title="Profil" />
            )}
          </Link>
        </div>
      </motion.nav>
    </nav>
  );
};

export default Navbar;
