'use client';

import { useEffect, useState } from 'react';
import DessertFrame from '@/app/dessertcomponent/layout/DessertFrame';
import CountdownBar from '@/app/dessertcomponent/CountdownBar';
import useCakeStore from '@/app/store';
import order from '@/../public/order.png';
import Image from 'next/image';

import cake1 from '@/../public/cake/cake1.png';
import cake2 from '@/../public/cake/cake2.png';
import cake3 from '@/../public/cake/cake3.png';
import cake4 from '@/../public/cake/cake4.png';
import cream1 from '@/../public/cream/cream1.png';
import cream2 from '@/../public/cream/cream2.png';
import cream3 from '@/../public/cream/cream3.png';
import cream4 from '@/../public/cream/cream4.png';
import fruit1 from '@/../public/fruit/fruit11.png';
import fruit2 from '@/../public/fruit/fruit12.png';
import fruit3 from '@/../public/fruit/fruit13.png';
import fruit4 from '@/../public/fruit/fruit14.png';
import sprin1 from '@/../public/sprinkle/sprin1.png';
import sprin2 from '@/../public/sprinkle/sprin2.png';
import sprin3 from '@/../public/sprinkle/sprin3.png';
import sprin4 from '@/../public/sprinkle/sprin4.png';

export default function OrderPage({ nextStep }) {
  const cakeImgs = [cake1, cake2, cake3, cake4];
  const creamImgs = [cream1, cream2, cream3, cream4];
  const fruitImgs = [fruit1, fruit2, fruit3, fruit4];
  const sprinkleImgs = [sprin1, sprin2, sprin3, sprin4];

  const [randomCake, setRandomCake] = useState(null);
  const [randomCream, setRandomCream] = useState(null);
  const [randomFruit, setRandomFruit] = useState(null);
  const [randomSprinkle, setRandomSprinkle] = useState(null);

  const { setOrderCake } = useCakeStore();

  useEffect(() => {
    const cake = cakeImgs[Math.floor(Math.random() * cakeImgs.length)];
    const cream = creamImgs[Math.floor(Math.random() * creamImgs.length)];
    const fruit = fruitImgs[Math.floor(Math.random() * fruitImgs.length)];
    const sprinkle = sprinkleImgs[Math.floor(Math.random() * sprinkleImgs.length)];

    setRandomCake(cake);
    setRandomCream(cream);
    setRandomFruit(fruit);
    setRandomSprinkle(sprinkle);

    setOrderCake({ cake, cream, fruit, sprinkle });
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-pink-50">
      <DessertFrame>
        <div
          className="flex flex-col items-center justify-between w-full h-full relative p-6"
          style={{ backgroundImage: "url('/order.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

          {/* 疊蛋糕素材 - 使用百分比定位和寬度百分比 */}
          {randomCake && (
            <Image
              src={randomCake}
              alt="cake"
              style={{ position: 'absolute', bottom: '13%', width: '20%' }}
            />
          )}
          {randomCream && (
            <Image
              src={randomCream}
              alt="cream"
              style={{ position: 'absolute', bottom: '30%', width: '18%' }}
            />
          )}
          {randomFruit && (
            <Image
              src={randomFruit}
              alt="fruit"
              style={{ position: 'absolute', bottom: '49%', width: '12%' }}
            />
          )}
          {randomSprinkle && (
            <Image
              src={randomSprinkle}
              alt="sprinkle"
              style={{ position: 'absolute', bottom: '19%', width: '18%' }}
            />
          )}

          {/* 倒數條 */}
          <div className="absolute bottom-0 w-full">
            <CountdownBar duration={5} onTimeUp={nextStep} />
          </div>
        </div>
      </DessertFrame>
    </div>
  );
}
