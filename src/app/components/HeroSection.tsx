"use client"
import React from 'react';



export function HeroSection() {

  return (
    <section
      className="bg-neutral-800  relative overflow-hidden"
    >
      <div className='flex justify-center items-center py-[20px]'>
        <img src="/common/logo-trans.png" className='h-[36px] w-auto' alt="logo" />
      </div>
    </section>
  );
}
export default HeroSection;

