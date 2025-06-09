'use client';
import Image from 'next/image';

export default function DessertFrame({ children }) {
  return (
    <div className="flex items-center justify-center w-full h-full bg-pink-50">
      <div className="relative w-[90vw] max-w-[1600px] aspect-[16/9] rounded-2xl bg-[url('/bg.png')] bg-cover bg-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}
