'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import nextBtn from '@/../public/nextBtn.png';
import cake1 from '@/../public/cake/cake1.png';
import cake2 from '@/../public/cake/cake2.png';
import cake3 from '@/../public/cake/cake3.png';
import cake4 from '@/../public/cake/cake4.png';
import Image from 'next/image';
import useCakeStore from '@/app/store';

export default function CakePage({ nextStep }) {
  const { selectedCake, setSelectedCake } = useCakeStore();

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
          {/* 蛋糕選擇 */}
          <div className="absolute top-[12%] flex flex-row gap-4">
            <Image onClick={() => setSelectedCake(cake1)} src={cake1} className="w-[180px] cursor-pointer" alt="cake1" />
            <Image onClick={() => setSelectedCake(cake2)} src={cake2} className="w-[180px] cursor-pointer" alt="cake2" />
            <Image onClick={() => setSelectedCake(cake3)} src={cake3} className="w-[180px] cursor-pointer" alt="cake3" />
            <Image onClick={() => setSelectedCake(cake4)} src={cake4} className="w-[180px] cursor-pointer" alt="cake4" />
          </div>

          {/* 已選蛋糕放平台 */}
          {selectedCake && (
            <Image
              src={selectedCake}
              className="w-[250px] absolute bottom-[12%] left-[43.5%] translate-x-[-50%]"
              alt="selected cake"
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
