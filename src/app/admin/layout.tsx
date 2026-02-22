import React from 'react'

export default function layout({ children }:any) {
  // Rendu du layout pour la section admin
  return (
    <div>
      {/* Affichage des enfants (pages admin) */}
      {children}
    </div>
  )
}
