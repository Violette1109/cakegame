'use client';
import { useEffect, useState } from 'react';

export default function CountdownBar({ duration, onTimeUp }) {
    // 檢查一下 onTimeUp 有沒有進來
    console.log('onTimeUp:', onTimeUp);  // 應該是一個函數
  
    const [timeLeft, setTimeLeft] = useState(duration);
  
    useEffect(() => {
      if (timeLeft === 0) {
        if (typeof onTimeUp === 'function') {
          onTimeUp();  // 這樣保險
        }
        return;
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }, [timeLeft]);

      return (
      <div className="w-full max-w-[1013px] h-[65px] bg-blue-100 overflow-hidden mx-auto">
        <div
          className="h-full bg-[#8ea8b3] transition-all duration-1000"
          style={{ width: `${(timeLeft / duration) * 100}%` }}
        ></div>
      </div>
    );
  }
  