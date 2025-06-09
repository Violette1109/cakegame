'use client';

import useCakeStore from '@/app/store';
import Image from 'next/image';
import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import star from '@/../public/star.png';
import noStar from '@/../public/nostar.png';
import resultBtn from '@/../public/resultBtn.png';
import againBtn from '@/../public/againBtn.png';

export default function ResultPage({ handleAgain }) {
  const {
    selectedCake, selectedCream, selectedFruit, selectedSprin,
    orderCake
  } = useCakeStore();

  const matchCount = [
    selectedCake === orderCake.cake,
    selectedCream === orderCake.cream,
    selectedFruit === orderCake.fruit,
    selectedSprin === orderCake.sprinkle
  ].filter(Boolean).length;

  const renderStars = () => {
    if (matchCount === 4) return [1, 2, 3];
    if (matchCount === 3) return [1, 2];
    if (matchCount === 2) return [1];
    return [];
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div className="relative flex flex-col w-full h-full items-center justify-center">

          {/* 訂單蛋糕 */}
          <div className="absolute top-[25%] left-[20%] w-[300px] h-[400px] border-4 border-gray-400 bg-pink-100 flex items-center justify-center">
            {orderCake.cake && (
                <Image
                src={orderCake.cake}
                alt="cake"
                width={250}
                height={250}
                className="absolute bottom-[2%] left-1/2 translate-x-[-50%] object-contain"
                />
            )}
            {orderCake.cream && (
                <Image
                src={orderCake.cream}
                alt="cream"
                width={220}
                height={220}
                className="absolute bottom-[32%] left-1/2 translate-x-[-50%] object-contain"
                />
            )}
            {orderCake.fruit && (
                <Image
                src={orderCake.fruit}
                alt="fruit"
                width={180}
                height={180}
                className="absolute bottom-[60%] left-1/2 translate-x-[-50%] object-contain"
                />
            )}
            {orderCake.sprinkle && (
                <Image
                src={orderCake.sprinkle}
                alt="sprinkle"
                width={220}
                height={220}
                className="absolute bottom-[10%] left-1/2 translate-x-[-50%] object-contain"
                />
            )}
        </div>


          <Image className="absolute top-[8%] w-[250px] cursor-pointer" src={resultBtn} alt="resultBtn" />
          
          {/* 你的蛋糕 */}
          <div className="absolute top-[25%] left-[65%] translate-x-[-50%] flex flex-col items-center gap-4">

            {/* 星星 */}
            <div className="flex gap-2 mt-2">
              {renderStars().map((_, index) => (
                <Image key={index} src={star} alt="star" className="w-20" />
              ))}
              {renderStars().length === 0 && (
                <Image src={noStar} alt="no star" className="w-20" />
              )}
            </div>

            {/* 你的蛋糕 */}

            <div className="relative w-64 h-73 flex items-center justify-center mt-4">
            {selectedCake && (
                <Image
                src={selectedCake}
                alt="cake"
                width={200}
                height={200}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain"
                />
            )}
            {selectedCream && (
                <Image
                src={selectedCream}
                alt="cream"
                width={180}
                height={180}
                className="absolute bottom-[32%] left-1/2 -translate-x-1/2 object-contain"
                />
            )}
            {selectedFruit && (
                <Image
                src={selectedFruit}
                alt="fruit"
                width={150}
                height={150}
                className="absolute bottom-[64%] left-1/2 -translate-x-1/2 object-contain"
                />
            )}
            {selectedSprin && (
                <Image
                src={selectedSprin}
                alt="sprinkle"
                width={200}
                height={200}
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 object-contain"
                />
            )}
        </div>


            
          </div>

          {/* again 按鈕 */}
          <Image
            onClick={handleAgain}
            className="w-[200px] cursor-pointer hover:translate-y-0.5 transition absolute bottom-[5%] left-[50%] translate-x-[-50%]"
            src={againBtn}
            alt="againBtn"
          />
        </div>
      </DessertFrame>
    </div>
  );
}
