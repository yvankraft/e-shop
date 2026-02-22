// Page de la catégorie accessoires
import Link from 'next/link'

export default function accessories() {
  // Rendu de la liste d'accessoires
  return (
    <div>
      <h1>liste d'accesoires</h1>
      {/* Lien vers un produit spécifique */}
      <Link href="/product/1">Products 1</Link>
    </div>
  )
}
