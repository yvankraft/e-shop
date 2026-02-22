// Page de la catégorie hommes
import React from 'react'
import Link from 'next/link'

export default function homme() {
  // Rendu de la liste de produits pour hommes
  return (
    <div>
      <h1>liste de hauts</h1>
      {/* Lien vers un produit spécifique */}
      <Link href="/product/13">Products 13</Link>
    </div>
  )
}
