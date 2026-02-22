// Page de la catégorie chaussures
import React from 'react'
import Link from 'next/link'

export default function chaussures() {
  // Rendu de la liste de chaussures
  return (
    <div>
      <h1>liste de chaussures</h1>
      {/* Lien vers un produit spécifique */}
      <Link href="/product/2">Products 2</Link>
    </div>
  )
}
