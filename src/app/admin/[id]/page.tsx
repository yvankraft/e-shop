import React from 'react'
import Link from 'next/link'

export default function page({ params }: { params: { id: string } }) {
  // Rendu de la page produits (admin)
  return (
    <div>
      <div className='Product 1'> produit {params.id} </div>
    </div>
  )
}
