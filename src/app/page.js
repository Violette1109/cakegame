'use client';

import StartPage from '@/app/dessertcomponent/startpage';
import InsPage from '@/app/dessertcomponent/inspage';
import OrderPage from '@/app/dessertcomponent/orderpage';
import CakePage from '@/app/dessertcomponent/cakepage';
import CreamPage from '@/app/dessertcomponent/creampage';
import FruitPage from '@/app/dessertcomponent/fruitpage';
import SprinPage from '@/app/dessertcomponent/sprinklepage';
import ResultPage from '@/app/dessertcomponent/resultpage';
import { useState } from 'react';
import useCakeStore from '@/app/store'

export default function CupcakeGame() {
  const [step, setStep] = useState('start');
  const resetCake = useCakeStore((state) => state.reset);

  const goTo = (nextStep) => setStep(nextStep);

  return (
    <>
      {step === 'start' && <StartPage nextStep={() => goTo('ins')} />}
      {step === 'ins' && <InsPage nextStep={() => goTo('order')} />}
      {step === 'order' && <OrderPage nextStep={() => goTo('cake')} />}
      {step === 'cake' && <CakePage nextStep={() => goTo('cream')} />}
      {step === 'cream' && <CreamPage nextStep={() => goTo('fruit')} />}
      {step === 'fruit' && <FruitPage nextStep={() => goTo('sprin')} />}
      {step === 'sprin' && <SprinPage nextStep={() => goTo('result')} />}
      {step === 'result' && (
        <ResultPage
        handleAgain={() => {
          resetCake();
          goTo('order');
        }}
        />
      )}
    </>
  );
}