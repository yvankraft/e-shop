import Link from 'next/link'
import Navbar from '@/app/components/Navbar'

export default function accessories() {
  return (
    <div>
        <Navbar />
        <h1>liste d'accesoires</h1>
        <Link href="/product/1">Products 1</Link>
    </div>
  )
}
