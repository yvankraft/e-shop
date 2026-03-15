"use client";
import { FaGoogle, FaFacebook, FaApple, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // NextAuth gère le voyage vers le serveur tout seul
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false, // On empêche la redirection auto pour gérer l'erreur nous-mêmes
    });

    if (res?.error) {
      setError("Email ou mot de passe incorrect");
      setLoading(false);
    } else {
      // Si ça marche, on redirige manuellement
      router.push("/pages/account");
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-slate-50 dark:bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-200 dark:border-slate-700 
                rounded-3xl shadow-xl flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Connexion
          </h1>
          {error && (
            <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-xl">
              {error}
            </p>
          )}
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Heureux de vous revoir !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Champ Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium px-1 text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder="votre@email.com"
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            />
          </div>

          {/* Champ Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium px-1 text-slate-700 dark:text-slate-300">
              Mot de passe
            </label>
            <input
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            />
          </div>

          {/* Bouton Login */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-slate-800 dark:bg-white dark:text-zinc-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-slate-700 transition-colors"
          >
            {loading ? "Chargement..." : "Se connecter"}
          </motion.button>
        </form>
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Pas encore de compte ?{" "}
          <Link
            href="/signup"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-4"
          >
            Créer un compte
          </Link>
          ou vous pouvez tous simplement utiliser
        </p>
        <div className="flex justify-evenly">
          {" "}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-1 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="text-lg">
              {<FaGoogle className="text-red-500" />}
            </span>
            <span className="text-xs font-medium">Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-1 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="text-lg">
              {<FaFacebook className="text-blue-600" />}
            </span>
            <span className="text-xs font-medium">facebook</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-1 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="text-lg">
              {<FaApple className="text-black dark:text-white" />}
            </span>
            <span className="text-xs font-medium">apple</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-2.5 px-1 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="text-lg">
              {<FaTiktok className="text-black dark:text-white" />}
            </span>
            <span className="text-xs font-medium">tiktok</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
