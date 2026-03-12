"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  UserPen, // Changer de nom
  ShoppingBag, // Historique des commandes
  CreditCard, // Paiement
  ShieldCheck, // Sécurité
  Fingerprint, // Protection des données
  LogOut, // Déconnexion
  Trash2, //Supprimer le compte
  ChevronRight,
} from "lucide-react";
import { Avatar } from "@/app/components/pageElemts";
import { signOut } from "next-auth/react";
import Modal from "@/app/components/Modal";

const page = () => {
  // 1. Récupération des données de l'utilisateur
  const { data: session, status } = useSession();
  //etat de chargemnet
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    isOpen: false,
    message: "",
    type: "success" as "success" | "error",
  });
  // 2. Gestion du chargement
  if (status === "loading") {
    return (
      <div className="">
        <p className="pt-24 text-center">Chargement du profil...</p>
      </div>
    );
  }

  // 3. Sécurité : si pas de session, on redirige vers login
  if (!session) {
    redirect("/login");
  }

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/delete", { method: "DELETE" });

      if (res.ok) {
        // TRÈS IMPORTANT : On déconnecte l'utilisateur AVANT de le rediriger
        signOut({ callbackUrl: "/" });
      } else {
        setShowAlert({
          isOpen: true,
          message: "Erreur lors de la suppression" as string,
          type: "error",
        });
      }
    } catch (err) {
      setShowAlert({
        isOpen: true,
        message: "Serveur injoignable",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" pt-[9%]  p-2">
      <Modal
        isOpen={isLogoutModalOpen} // On passe la variable d'état
        onClose={() => setIsLogoutModalOpen(false)} // On passe la fonction pour fermer
        title="Déconnexion"
        danger={true}
      >
        {/* Contenu de la modale */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => signOut({ callbackUrl: "/" })} // Action finale
            className="..."
          >
            Confirmer
          </button>

          <button
            onClick={() => setIsLogoutModalOpen(false)} // Annulation
            className="..."
          >
            Annuler
          </button>
        </div>
      </Modal>
      {/* MODE DESKTOP : Grille visible uniquement sur grand écran */}
      <div className="hidden md:grid grid-cols-7 gap-2">
        <div className="col-span-2">
          <div
            className=" min-h-screen p-8 -mt-16
                backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-200 dark:border-slate-700 
                rounded-3xl shadow-xl flex flex-col items-center"
          >
            <Avatar name={session.user?.name} size="xl" />
          </div>
        </div>
        <div className="col-span-5"></div>
      </div>

      {/* MODE MOBILE : Liste simple, le clic redirige vers une autre page */}
      <div className="md:hidden mt-8 p-2 flex flex-col gap-4 w-full">
        <div className="flex items-center flex-col">
          <Avatar name={session.user?.name} size="lg" />
          <p className="underline-offset-4 underline text-blue-600">
            modifier la photo +
          </p>
          <h1 className="text-3xl font-bold">{session.user?.name} </h1>
        </div>
        <div
          className="w-[95%] backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-200 dark:border-slate-700 
                rounded-3xl shadow-xl flex flex-col p-4"
        >
          <div className="flex items-center w-full py-3 border-b border-slate-100 last:border-0">
            {/* 1. Conteneur Icône : Largeur fixe pour l'alignement vertical */}
            <div className="w-10 flex justify-start">
              <UserPen size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Texte : Il prend tout l'espace restant (flex-1) */}
            <Link
              href="/pages/account/orders/profil"
              className="flex-1 text-left px-2 text-gray-700 font-medium"
            >
              Profil
            </Link>

            {/* 3. Flèche : Toujours collée à droite */}
            <div className="text-slate-400">
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="flex items-center w-full py-3 border-b border-slate-100 last:border-0">
            {/* 1. Conteneur Icône : Largeur fixe pour l'alignement vertical */}
            <div className="w-10 flex justify-start">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Texte : Il prend tout l'espace restant (flex-1) */}
            <Link
              href="/pages/account/orders/historique"
              className="flex-1 text-left px-2 text-gray-700 font-medium"
            >
              Historique des commandes
            </Link>

            {/* 3. Flèche : Toujours collée à droite */}
            <div className="text-slate-400">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        <div
          className="w-[95%] max-w-md backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-200 dark:border-slate-700 
                rounded-3xl shadow-xl flex flex-col p-4"
        >
          <div className="flex items-center w-full py-3 border-b border-slate-100 last:border-0">
            {/* 1. Conteneur Icône : Largeur fixe pour l'alignement vertical */}
            <div className="w-10 flex justify-start">
              <CreditCard size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Texte : Il prend tout l'espace restant (flex-1) */}
            <Link
              href="/pages/account/orders/paiement"
              className="flex-1 text-left px-2 text-gray-700 font-medium"
            >
              Paiement
            </Link>

            {/* 3. Flèche : Toujours collée à droite */}
            <div className="text-slate-400">
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="flex items-center w-full py-3 border-b border-slate-100 last:border-0">
            {/* 1. Conteneur Icône : Largeur fixe pour l'alignement vertical */}
            <div className="w-10 flex justify-start">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Texte : Il prend tout l'espace restant (flex-1) */}
            <Link
              href="/pages/account/orders/sicherheit"
              className="flex-1 text-left px-2 text-gray-700 font-medium"
            >
              Sécurité
            </Link>

            {/* 3. Flèche : Toujours collée à droite */}
            <div className="text-slate-400">
              <ChevronRight size={20} />
            </div>
          </div>
          <div className="flex items-center w-full py-3 border-b border-slate-100 last:border-0">
            {/* 1. Conteneur Icône : Largeur fixe pour l'alignement vertical */}
            <div className="w-10 flex justify-start">
              <Fingerprint size={24} strokeWidth={1.5} />
            </div>

            {/* 2. Texte : Il prend tout l'espace restant (flex-1) */}
            <Link
              href="/pages/account/orders/Protect"
              className="flex-1 text-left px-2 text-gray-700 font-medium"
            >
              Protection des données
            </Link>

            {/* 3. Flèche : Toujours collée à droite */}
            <div className="text-slate-400">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>{" "}
        <div className="flex items-center flex-col">
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="py-2 px-4 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 
                border border-slate-200 dark:border-slate-700 
                rounded-2xl shadow-xl flex flex-co mt-2 gap-2"
          >
            <LogOut size={28} className="text-red-600" />
            <span className="font-medium">Déconnexion</span>
          </button>

          {/* Bouton Supprimer - Style alerte */}
          <button
            disabled={loading}
            onClick={() => {
              if (confirm("Supprimer définitivement votre compte ?"))
                handleDeleteAccount();
            }}
            className="flex items-center justify-center gap-4 w-full p-4 text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={20} strokeWidth={1.5} />
            <span className="font-medium">Supprimer mon compte</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
