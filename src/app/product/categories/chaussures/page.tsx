import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />
      <h1>liste de chaussures</h1>
        <Link href="/product/2">Products 2</Link>
    </div>
  )
}
