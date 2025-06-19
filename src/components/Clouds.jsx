'use client';
import { useEffect, useRef } from 'react';

export default function Clouds() {
  const cloudRefs = useRef([]);

  useEffect(() => {
    const animateClouds = () => {
      cloudRefs.current.forEach(cloud => {
        // Random movement parameters
        const duration = 60 + Math.random() * 60; // 60-120 seconds
        const xDistance = 50 + Math.random() * 30; // 50-80vw movement
        const direction = Math.random() > 0.5 ? 1 : -1; // Left or right
        
        cloud.style.setProperty('--duration', `${duration}s`);
        cloud.style.setProperty('--distance', `${xDistance * direction}vw`);
        cloud.style.setProperty('--start', `${Math.random() * 20}vw`);
        cloud.style.setProperty('--delay', `${Math.random() * 20}s`);
      });
    };

    animateClouds();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud 1 */}
      <div 
        ref={el => cloudRefs.current[0] = el}
        className="absolute top-[10%] cloud-animate opacity-85"
        style={{
          '--start': '5vw',
          '--distance': '60vw',
          '--duration': '80s',
          '--delay': '0s'
        }}
      >
        <div className="w-48 h-16 bg-[#00ffff] rounded-full relative">
          <div className="absolute -top-6 -left-4 w-16 h-16 bg-[#00ffff] rounded-full"></div>
          <div className="absolute -top-8 right-4 w-20 h-20 bg-[#00ffff] rounded-full"></div>
        </div>
      </div>

      {/* Cloud 2 */}
      <div 
        ref={el => cloudRefs.current[1] = el}
        className="absolute top-[25%] cloud-animate opacity-85"
        style={{
          '--start': '15vw',
          '--distance': '-70vw',
          '--duration': '100s',
          '--delay': '5s'
        }}
      >
        <div className="w-64 h-20 bg-[#00ffff] rounded-full relative">
          <div className="absolute -top-8 -left-6 w-24 h-24 bg-[#00ffff] rounded-full"></div>
          <div className="absolute -top-10 right-8 w-28 h-28 bg-[#00ffff] rounded-full"></div>
        </div>
      </div>
{/* Cloud 3 */}
<div 
  ref={el => cloudRefs.current[2] = el}
  className="absolute top-[40%] cloud-animate opacity-50"
  style={{
    '--start': '30vw',
    '--distance': '55vw',
    '--duration': '90s',
    '--delay': '10s'
  }}
>
  <div className="w-40 h-12 bg-[#00ffff] rounded-full relative">
    <div className="absolute -top-5 -left-3 w-12 h-12 bg-[#00ffff] rounded-full"></div>
    <div className="absolute -top-6 right-2 w-16 h-16 bg-[#00ffff] rounded-full"></div>
  </div>
</div>

{/* Cloud 4 */}
<div 
  ref={el => cloudRefs.current[3] = el}
  className="absolute top-[60%] cloud-animate opacity-80"
  style={{
    '--start': '60vw',
    '--distance': '-65vw',
    '--duration': '110s',
    '--delay': '15s'
  }}
>
  <div className="w-56 h-18 bg-[#00ffff] rounded-full relative">
    <div className="absolute -top-7 -left-5 w-20 h-20 bg-[#00ffff] rounded-full"></div>
    <div className="absolute -top-9 right-6 w-24 h-24 bg-[#00ffff] rounded-full"></div>
  </div>
</div>

{/* Cloud 5 */}
<div 
  ref={el => cloudRefs.current[4] = el}
  className="absolute top-[30%] cloud-animate opacity-40"
  style={{
    '--start': '80vw',
    '--distance': '-45vw',
    '--duration': '70s',
    '--delay': '8s'
  }}
>
  <div className="w-32 h-10 bg-[#00ffff] rounded-full relative">
    <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#00ffff] rounded-full"></div>
    <div className="absolute -top-5 right-1 w-14 h-14 bg-[#00ffff] rounded-full"></div>
  </div>
</div>

{/* Cloud 6 */}
<div 
  ref={el => cloudRefs.current[5] = el}
  className="absolute top-[70%] cloud-animate opacity-90"
  style={{
    '--start': '10vw',
    '--distance': '75vw',
    '--duration': '120s',
    '--delay': '3s'
  }}
>
  <div className="w-72 h-24 bg-[#00ffff] rounded-full relative">
    <div className="absolute -top-10 -left-8 w-28 h-28 bg-[#00ffff] rounded-full"></div>
    <div className="absolute -top-12 right-10 w-32 h-32 bg-[#00ffff] rounded-full"></div>
  </div>
</div>


    </div>
  );
}