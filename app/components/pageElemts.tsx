import React, { useMemo } from "react";

interface AvatarProps {
  name?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const COLORS = [
  // Couleurs standards
  "bg-blue-600",
  "bg-red-600",
  "bg-green-600",
  "bg-amber-600",
  "bg-purple-600",
  "bg-orange-600",
  "bg-pink-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-cyan-600",
  "bg-sky-600",
  "bg-violet-600",
  "bg-fuchsia-600",
  "bg-rose-600",
  "bg-emerald-600",
  "bg-lime-600",

  // Couleurs plus sombres / neutres
  "bg-slate-700",
  "bg-zinc-700",
  "bg-neutral-700",
  "bg-stone-700",
];

const SIZES = {
  sm: "w-10 h-10 text-xl",
  md: "w-20 h-20 text-3xl",
  lg: "w-40 h-40 text-6xl",
  xl: "w-60 h-60 text-8xl",
};

export const Avatar = ({ name, size = "md", className = "" }: AvatarProps) => {
  const char = name?.charAt(0).toUpperCase() || "U";

  // Génère une couleur fixe basée sur le nom pour éviter le flash au re-render
  const backgroundColor = useMemo(() => {
    if (!name) return COLORS[0];
    const charCodeSum = name
      .split("")
      .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    return COLORS[charCodeSum % COLORS.length];
  }, [name]);

  return (
    <div
      className={`
      ${SIZES[size]} 
      ${backgroundColor} 
      ${className}
      rounded-full flex items-center justify-center text-white font-bold uppercase shadow-sm
    `}
    >
      {char}
    </div>
  );
};
