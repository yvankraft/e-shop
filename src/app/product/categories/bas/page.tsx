import React from 'react'
import Link from 'next/link'
import { i } from 'motion/react-client'
import Navbar from '@/app/components/Navbar'

export default function page() {
  return (
    <div>
        <Navbar />
      <h1>liste de bas</h1>
        <Link href="/product/12">Products 12</Link>
    </div>
  )
}
