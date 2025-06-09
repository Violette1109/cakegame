'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import startBtn from '@/../public/startBtn.png';
import Image from 'next/image';

export default function StartPage({ nextStep }) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div
          className="flex flex-col items-center justify-between w-full h-full relative p-6"
          style={{ backgroundImage: "url('/start.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* 上方空白 */}
          <div className="h-[10%]"></div>

          {/* 中間空白 or 標題放這裡 */}

          <div className="flex-1 flex items-center justify-center"></div>

          {/* 開始按鈕 */}
          <div className="flex justify-center mb-[5%]">
            <Image
              onClick={nextStep}
              className="w-[14vw] max-w-[220px] cursor-pointer hover:translate-y-0.5 transition"
              src={startBtn}
              alt="startBtn"
            />
          </div>
        </div>
      </DessertFrame>
    </div>
  );
}
