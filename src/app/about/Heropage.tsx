import React from 'react'
import Link from 'next/link'
const Heropage = () => {
  return (
    <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url("my-project\public\aboutpage\shoplist.png")` }}>
<div className="absolute inset-0 bg-black/50" />
<div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
  <h1 className="mb-4 text-5xl font-bold text-white">About Us</h1>
  <div className="flex items-center gap-2 text-lg">
    <Link href="/" className="text-white hover:text-orange-500">
      Home
    </Link>
    <span className="text-white">&gt;</span>
    <span className="text-orange-500">About</span>
  </div>
</div>
</div>
  )
}

export default Heropage

