import React from 'react'

export default function page({params}:any) {
  // Rendu de la page produit avec paramètre ID
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  )
}
