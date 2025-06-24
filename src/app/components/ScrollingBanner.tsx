import React from 'react';

const items = [
  "BẢO HÀNH TOÀN QUỐC 24 THÁNG",
  "TỐI ƯU CÔNG VIỆC",
  "MÀN HÌNH ĐA NĂNG"
];

export function ScrollingBanner() {
  return (
    // <section className="flex overflow-hidden gap-5 items-center py-8 pl-10 w-full  max-md:pl-5 max-md:max-w-full max-md:text-4xl">
    <div className="marquee-container py-[30px] overflow-hidden">
      <div className="marquee-content text-white text-[36px] font-semibold flex items-center gap-[48px] animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <React.Fragment key={item + idx}>
            <span>{item}</span>
            {idx < items.length * 2 - 1 && (
              <span className="mx-[32px] text-[36px]">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
    // </section>
  );
}
