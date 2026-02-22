import React from 'react'

export default function page({params}:any) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  )
}
