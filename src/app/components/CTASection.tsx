"use client"
import React from 'react';

export function CTASection() {
  return (
    <section className="overflow-hidden w-full bg-[#022E50] max-md:max-w-full">
      <div className="flex gap-18 w-full max-md:max-w-full max-md:flex-wrap">
        <img
          src="/contact/contact-2.jpeg"
          alt="Background"
          className='w-1/2 max-md:w-full'
        />
        <div className="flex flex-col justify-center items-center max-w-full w-[559px] max-md:mb-2.5 max-md:px-[16px] max-md:pb-12">
          <h2 className="text-[36px] font-extrabold text-white leading-normal max-md:max-w-full">
            Sẵn sàng nâng cấp trải nghiệm?
          </h2>
          <div className="mt-4 text-white font-semibold text-[20px] max-md:text-base max-md:max-w-full">
            Đặt hàng ngay và tận hưởng chính sách <span className="font-semibold">1 đổi 1</span> trong 6 tháng đầu tiên.
          </div>
          <div className="mt-1 w-full text-[#FFFFFFB2] italic text-[16px] font-semibold max-md:text-xs max-md:max-w-full">
            *Nếu có lỗi từ NSX
          </div>
          <button
            onClick={() => {
              const distributorSection = document.getElementById('distributor');
              if (distributorSection) {
                distributorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="cursor-pointer gap-2.5 self-start px-5 py-3 mt-8 text-base font-semibold bg-white rounded-3xl min-h-11 text-zinc-900">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </section>
  );
}
