"use client"
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface ProductCardProps {
  image: string;
  title: string;
  specs: {
    display: string;
    refresh: string;
    resolution: string;
    design: string;
    size: string;
    price: string;
    target: string;
  };
  featured?: boolean;
}

function ProductCard({ image, title, specs, featured = false }: ProductCardProps) {
  const cardClass = featured
    ? "flex flex-col grow shrink justify-center items-center px-5 pt-10 pb-5 bg-white min-w-60 rounded-[30px] shadow-[0px_4px_36px_rgba(69,82,255,0.18)] w-[232px] max-md:w-full"
    : "flex flex-col grow shrink justify-center items-center px-2.5 pt-10 pb-5 text-base bg-white min-w-60 rounded-[30px] text-zinc-900 w-[232px] max-md:w-full";

  return (
    <div className={cardClass}>
      <div className="flex flex-col items-center max-w-full w-[200px]">
        <div className="flex flex-col justify-center px-3 py-2.5 w-full">
          <img
            src={image}
            className="object-contain w-full aspect-[1.27]"
            alt={title}
          />
        </div>
        <h3 className="mt-2.5 text-center text-[20px] font-extrabold text-[#1B1B1C] max-md:text-[22px]">
          {title}
        </h3>
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.display}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.refresh}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.resolution}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.design}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.size}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.price}
      </div>
      <div className="mt-8 text-[16px] text-center text-[#1B1B1C] font-normal max-md:text-[18px]">
        {specs.target}
      </div>
      <div className='flex justify-center'>
        <button className="cursor-pointer gap-2.5 self-stretch px-5 py-3 mt-8 text-base font-semibold text-white rounded-3xl bg-zinc-900 min-h-11 w-[200px]">
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export function ProductComparison() {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/bc40e4012b94ebcbfa030a589d4af54b4ac3060b?placeholderIfAbsent=true",
      title: "QDT QT22MF",
      specs: {
        display: "IPS",
        refresh: "100Hz",
        resolution: "1920x1080 FHD",
        design: "Mỏng 3 cạnh, cân đối",
        size: "22 inch",
        price: "~2.2 triệu",
        target: "Làm việc + thiết kế + game nhẹ"
      },
      featured: true
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/8ed7e1b62352809bdff710dd8dfbd12f518796db?placeholderIfAbsent=true",
      title: "QDT QT24MF",
      specs: {
        display: "IPS",
        refresh: "100Hz",
        resolution: "1920x1080 FHD",
        design: "Mỏng 3 cạnh, cân đối",
        size: "24 inch",
        price: "~2.5–3.2 triệu",
        target: "Làm việc + thiết kế + game nhẹ"
      }
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/b43702365149689e8396d34fc98c435a360abe5c?placeholderIfAbsent=true",
      title: "QDT QT27MF",
      specs: {
        display: "IPS",
        refresh: "100Hz",
        resolution: "1920x1080 FHD",
        design: "Mỏng 3 cạnh, cân đối",
        size: "27 inch",
        price: "~2.5–3.2 triệu",
        target: "Làm việc + thiết kế + game nhẹ"
      }
    }
  ];

  const specLabels = [
    "Chế độ hiển thị",
    "Tần số quét",
    "Độ phân giải",
    "Thiết kế viền",
    "Kích thước",
    "Giá bán dự kiến",
    "Mục tiêu người dùng"
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center py-16 w-full bg-zinc-200 max-md:max-w-full">
      <h2 className="text-xl font-extrabold text-center text-zinc-900 w-[1038px] max-md:max-w-full max-md:px-[16px]">
        QDT được tinh chỉnh để phù hợp hơn với nhu cầu thực tế
        <br />
        Những điểm QDT tập trung tối ưu hóa cho người dùng trẻ hiện đại
      </h2>
      <div className="flex flex-wrap gap-9 items-start mt-10 max-w-full container mx-auto max-md:hidden">
        <div className="flex flex-col items-end pt-3.5 pb-8 text-base font-semibold text-center min-h-[638px] rounded-[30px] text-zinc-900 max-md:hidden">
          <div className="flex max-w-full min-h-[231px] w-[122px]" />
          {specLabels.map((label, index) => (
            <div
              key={index}
              className="gap-2.5 self-stretch px-4 py-2.5 mt-2.5 bg-white rounded-[40px] shadow-[0px_4px_36px_rgba(0,0,0,0.05)]"
            >
              {label}
            </div>
          ))}
        </div>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="flex flex-wrap gap-9 items-start mt-10 max-w-full container mx-auto md:hidden px-[16px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loopAdditionalSlides={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide className='!w-full' key={index}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
