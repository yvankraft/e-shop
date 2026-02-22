import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function layout({ children }: { children: React.ReactNode }) {
  // Rendu du layout pour la section shop
  return (
    <div>
      {/* Navbar en haut */}
      <Navbar />
      {/* Contenu de la page */}
      {children}
      {/* Footer en bas */}
      <Footer />
    </div>
  )
}
