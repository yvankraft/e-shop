"use client";
import { FaGoogle, FaFacebook, FaApple, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
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

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login"); // Redirection vers login après succès
      } else {
        const data = await res.json();
        setError(data.message || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-slate-50 dark:bg-zinc-950 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Créer un compte
          </h1>
          {error && (
            <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-xl">
              {error}
            </p>
          )}
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Rejoignez notre communauté shopping
          </p>
        </div>

        {/* Formulaire d'inscription */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Champ Nom */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium px-1 text-slate-700 dark:text-slate-300">
              Nom
            </label>
            <input
              required
              type="text"
              placeholder="Jean Dupont"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
            />
          </div>

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

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-slate-800 dark:bg-white dark:text-zinc-900 text-white font-semibold rounded-2xl shadow-lg hover:bg-slate-700 transition-colors"
          >
            {loading ? "Chargement..." : "S'inscrire"}
          </motion.button>
        </form>
        {/* Séparateur */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink mx-4 text-xs text-slate-400 uppercase tracking-widest">
            S'inscrire avec
          </span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        {/* Boutons Sociaux */}
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

        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Déjà un compte ?{" "}
          <Link
            href="/login"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline  underline-offset-4"
          >
            Se connecter
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
