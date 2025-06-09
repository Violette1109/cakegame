'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import startBtn from '@/../public/startBtn.png';
import Image from 'next/image';

export default function InsPage({ nextStep }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div
          className="flex flex-col items-center justify-between w-full h-full relative p-6"
          style={{ backgroundImage: "url('/ins.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="h-[10%]"></div>

          <div className="flex-1 flex items-center justify-center"></div>

          <div className="flex justify-center mb-[9%]">
            <Image
              onClick={nextStep}
              className="w-[10vw] max-w-[160px] cursor-pointer hover:translate-y-0.5 transition"
              src={startBtn}
              alt="startBtn"
            />
          </div>
        </div>
      </DessertFrame>
    </div>
  );
}
