// Page de la catégorie jeunes
import Link from 'next/link'

export default function jeneus() {
  // Rendu de la liste de produits pour jeunes
  return (
    <div>
      <h1>liste de bas</h1>
      {/* Lien vers un produit spécifique */}
      <Link href="/product/12">Products 12</Link>
    </div>
  )
}
