'use client';

import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import serveBtn from '@/../public/serveBtn.png';
import sprin1 from '@/../public/sprinkle/sprin1.png';
import sprin2 from '@/../public/sprinkle/sprin2.png';
import sprin3 from '@/../public/sprinkle/sprin3.png';
import sprin4 from '@/../public/sprinkle/sprin4.png';
import Image from 'next/image';
import useCakeStore from '@/app/store';

export default function SprinPage({ nextStep }) {
  const { selectedCake, selectedCream, selectedFruit, selectedSprin, setSelectedSprin } = useCakeStore();

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div
          className="relative flex justify-center items-center flex-col w-full h-full"
          style={{ backgroundImage: "url('/make.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* 裝飾選擇 */}
          <div className="absolute top-[12%] flex flex-row gap-6">
            {[sprin1, sprin2, sprin3, sprin4].map((sprin, index) => (
              <Image
                key={index}
                onClick={() => setSelectedSprin(sprin)}
                src={sprin}
                className="w-[160px] cursor-pointer hover:scale-105 transition"
                alt={`sprin${index + 1}`}
              />
            ))}
          </div>

          {/* 蛋糕疊層 */}
          {selectedCake && (
            <Image
              src={selectedCake}
              className="w-[250px] absolute bottom-[12%] left-[43.5%] translate-x-[-50%]"
              alt="selected cake"
            />
          )}

          {selectedCream && (
            <Image
              src={selectedCream}
              className="w-[200px] absolute bottom-[28%] left-[43.5%] translate-x-[-50%]"
              alt="selected cream"
            />
          )}

          {selectedFruit && (
            <Image
              src={selectedFruit}
              className="w-[150px] absolute bottom-[45%] left-[43.5%] translate-x-[-50%]"
              alt="selected fruit"
            />
          )}

          {selectedSprin && (
            <Image
              src={selectedSprin}
              className="w-[220px] absolute bottom-[18%] left-[43.5%] translate-x-[-50%]"
              alt="selected sprin"
            />
          )}

          {/* 完成按鈕 */}
          <Image
            onClick={nextStep}
            className="w-[200px] cursor-pointer hover:translate-y-0.5 transition absolute bottom-[5%] right-[18%]"
            src={serveBtn}
            alt="serveBtn"
          />
        </div>
      </DessertFrame>
    </div>
  );
}
