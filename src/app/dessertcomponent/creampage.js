'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import nextBtn from '@/../public/nextBtn.png';
import cream1 from '@/../public/cream/cream1.png';
import cream2 from '@/../public/cream/cream2.png';
import cream3 from '@/../public/cream/cream3.png';
import cream4 from '@/../public/cream/cream4.png';
import Image from 'next/image';
import useCakeStore from '@/app/store';

export default function CreamPage({ nextStep }) {
  const { selectedCake, selectedCream, setSelectedCream } = useCakeStore();

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div
          className="relative flex justify-center items-center flex-col w-full h-full"
          style={{
            backgroundImage: "url('/make.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* 奶油選擇 */}
          <div className="absolute top-[11%] flex flex-row gap-8">
            <Image onClick={() => setSelectedCream(cream1)} src={cream1} className="w-[150px] cursor-pointer" alt="cream1" />
            <Image onClick={() => setSelectedCream(cream2)} src={cream2} className="w-[150px] cursor-pointer" alt="cream2" />
            <Image onClick={() => setSelectedCream(cream3)} src={cream3} className="w-[150px] cursor-pointer" alt="cream3" />
            <Image onClick={() => setSelectedCream(cream4)} src={cream4} className="w-[150px] cursor-pointer" alt="cream4" />
          </div>

          {/* 已選蛋糕放平台 */}
          {selectedCake && (
            <Image
              src={selectedCake}
              className="w-[250px] absolute bottom-[12%] left-[43.5%] translate-x-[-50%]"
              alt="selected cake"
            />
          )}

          {/* 已選奶油放在蛋糕上方 */}
          {selectedCream && (
            <Image
              src={selectedCream}
              className="w-[200px] absolute bottom-[28%] left-[43.5%] translate-x-[-50%]"
              alt="selected cream"
            />
          )}

          {/* 下一步 */}
          <Image
            onClick={nextStep}
            className="w-[200px] cursor-pointer hover:translate-y-0.5 transition absolute bottom-[5%] right-[18%]"
            src={nextBtn}
            alt="nextBtn"
          />
        </div>
      </DessertFrame>
    </div>
  );
}
