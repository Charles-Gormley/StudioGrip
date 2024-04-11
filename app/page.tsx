import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import StudioGrip from '../components/Studiogrip'

export default function Home() {
  return (
    <>
    <Navbar /> {/* Correctly using the Navbar component with a capital N */}
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 class="text-h1">The Future of Hardware is Here</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <StudioGrip />
      </div>
    </main>
    </>
  )
}
