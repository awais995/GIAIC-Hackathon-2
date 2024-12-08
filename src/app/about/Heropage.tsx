import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Heropage = () => {
  return (
    <div className="relative h-[300px] w-full">
      {/* Use Image component for optimized image loading */}
      <Image
        src="/aboutpage/shoplist.png" // Update the path to be relative to the public folder
        alt="About Page Background"
        layout="fill" // This makes the image cover the div
        objectFit="cover"
        objectPosition="center"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About Us</h1>
        <div className="flex items-center gap-2 text-lg sm:text-xl">
          <Link href="/" className="text-white hover:text-orange-500">
            Home
          </Link>
          <span className="text-white">&gt;</span>
          <span className="text-orange-500">About</span>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
