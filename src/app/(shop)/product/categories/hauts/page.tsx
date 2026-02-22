import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />
      <h1>liste de hauts</h1>   
        <Link href="/product/13">Products 13</Link>
    </div>
  )
}
