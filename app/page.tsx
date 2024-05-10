import React from 'react';
import Navbar from '../components/Navbar';
import StudioGrip from '../components/StudioGrip'; // Make sure the name matches the file and export
import StarsBackground from '../components/StarsBackground';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="flex flex-col items-center justify-center p-24 z-10">
        <h1 className="text-h1 text-black dark:text-white">The Future of Hardware is Here</h1>
        <div className="w-full max-w-5xl flex items-center justify-between font-mono text-sm lg:flex">
          <StudioGrip />
        </div>
      </main>
    </div>
  );
}
