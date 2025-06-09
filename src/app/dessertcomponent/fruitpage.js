'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import nextBtn from '@/../public/nextBtn.png';
import fruit1 from '@/../public/fruit/fruit1.png';
import fruit2 from '@/../public/fruit/fruit2.png';
import fruit3 from '@/../public/fruit/fruit3.png';
import fruit4 from '@/../public/fruit/fruit4.png';
import fruit11 from '@/../public/fruit/fruit11.png';
import fruit12 from '@/../public/fruit/fruit12.png';
import fruit13 from '@/../public/fruit/fruit13.png';
import fruit14 from '@/../public/fruit/fruit14.png';
import Image from 'next/image';
import useCakeStore from '@/app/store';

export default function FruitPage({ nextStep }) {
  const { selectedCake, selectedCream, selectedFruit, setSelectedFruit } = useCakeStore();

  const fruitMap = {
    [fruit1.src]: fruit11,
    [fruit2.src]: fruit13,
    [fruit3.src]: fruit14,
    [fruit4.src]: fruit12,
  };

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
          {/* 水果選擇 */}
          <div className="absolute top-[11%] flex flex-row gap-8">
            {[fruit1, fruit2, fruit3, fruit4].map((fruit, index) => (
              <Image
                key={index}
                onClick={() => setSelectedFruit(fruitMap[fruit.src])}
                src={fruit}
                className="w-[150px] cursor-pointer"
                alt={`fruit${index + 1}`}
              />
            ))}
          </div>

          {/* 已選蛋糕放平台 */}
          {selectedCake && (
            <Image
              src={selectedCake}
              className="w-[250px] absolute bottom-[12%] left-[43.5%] translate-x-[-50%]"
              alt="selected cake"
            />
          )}

          {/* 已選奶油放蛋糕上 */}
          {selectedCream && (
            <Image
              src={selectedCream}
              className="w-[200px] absolute bottom-[28%] left-[43.5%] translate-x-[-50%]"
              alt="selected cream"
            />
          )}

          {/* 已選水果放奶油上 */}
          {selectedFruit && (
            <Image
              src={selectedFruit}
              className="w-[150px] absolute bottom-[45%] left-[43.5%] translate-x-[-50%]"
              alt="selected fruit"
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
