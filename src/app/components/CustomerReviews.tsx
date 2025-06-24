'use client';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

interface ReviewCardProps {
  avatar?: string;
  name: string;
  rating: string;
  review: string;
  featured?: boolean;
}

function ReviewCard({ avatar, name, rating, review, isActive = false }: ReviewCardProps & { isActive?: boolean }) {
  const cardClass = "overflow-hidden self-stretch p-8 my-auto bg-white rounded-3xl min-w-60 shadow-[0px_4px_36px_rgba(0,0,0,0.14)] max-md:px-5";

  const activeClass = isActive ? "scale-110 transition-transform duration-300" : "";

  return (
    <div className={`${cardClass} ${activeClass}`}>
      <div className="flex gap-10 justify-between items-center w-full">
        <div className="flex gap-2.5 items-center self-stretch my-auto text-xl font-extrabold text-zinc-900">
          {avatar ? (
            <img
              src={avatar}
              className="object-contain shrink-0 self-stretch my-auto w-8 rounded-3xl aspect-square"
              alt={name}
            />
          ) : (
            <div className="flex shrink-0 self-stretch my-auto w-8 h-8 rounded-3xl bg-zinc-300" />
          )}
          <div className="self-stretch my-auto">{name}</div>
        </div>
        <div className="flex gap-1.5 items-center self-stretch my-auto">
          <div className="self-stretch my-auto text-xl font-bold text-zinc-900">
            {rating}
          </div>
          {avatar ? (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/96a816ede0c2e885f022a33779358e7093019c2b?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Star"
            />
          ) : (
            <div className="flex flex-col justify-center self-stretch px-px py-0.5 my-auto w-4">
              <div className="flex shrink-0 bg-amber-400 h-[13px]" />
            </div>
          )}
        </div>
      </div>
      <p className="mt-5 text-sm text-zinc-900 h-[80px]">{review}</p>
    </div>
  );
}

// Hook kiểm tra mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const reviews = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Quang X.Đ.",
      rating: "5.0",
      review: "Mình dùng QT24 làm màn phụ để chỉnh ảnh. Màu sắc chân thực, panel có tí nịnh mắt nên xem phim khá thích."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",

      name: "Phúc N.H.",
      rating: "5.0",
      review: "Đế chữ V nhìn gọn bàn lắm nha. 27 hơi to so với bàn của mình nên mình dùng 24, chưa biết sao nhưng giờ đang ưng nha."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Nhất N.V.",
      rating: "5.0",
      review: "Từ khi dùng màn QDT, tôi cảm thấy đôi mắt của mình như được thanh tẩy. Từng pixel hiện lên như những đốm sáng mờ ảo như ánh sao đêm, thắp sáng cho tâm hồn tôi."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",

      name: "Tú N.M.",
      rating: "5.0",
      review: "Mua cái đầu vì rẻ, mua tiếp cái 2 vì chất. Lắp thêm con dual arm thì ối dồi ôi luôn."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Linh N.T.",
      rating: "5.0",
      review: "Tôi đặt 5 cái về cho team, thấy mọi người cũng khen á."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Quang X.Đ.",
      rating: "5.0",
      review: "Mình dùng QT24 làm màn phụ để chỉnh ảnh. Màu sắc chân thực, panel có tí nịnh mắt nên xem phim khá thích."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Phúc N.H.",
      rating: "5.0",
      review: "Đế chữ V nhìn gọn bàn lắm nha. 27 hơi to so với bàn của mình nên mình dùng 24, chưa biết sao nhưng giờ đang ưng nha."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Nhất N.V.",
      rating: "5.0",
      review: "Từ khi dùng màn QDT, tôi cảm thấy đôi mắt của mình như được thanh tẩy. Từng pixel hiện lên như những đốm sáng mờ ảo như ánh sao đêm, thắp sáng cho tâm hồn tôi."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Tú N.M.",
      rating: "5.0",
      review: "Mua cái đầu vì rẻ, mua tiếp cái 2 vì chất. Lắp thêm con dual arm thì ối dồi ôi luôn."
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1966d92d204603ab9eadaf589a8b84d52f0e26f4?placeholderIfAbsent=true",
      name: "Linh N.T.",
      rating: "5.0",
      review: "Tôi đặt 5 cái về cho team, thấy mọi người cũng khen á."
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center py-24 w-full bg-white max-md:max-w-full max-md:pt-10 max-md:pb-0">
      <h2 className="text-[48px] uppercase font-extrabold text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:text-center max-md:px-[10px]">
        Cảm nhận người dùng
      </h2>
      <div className="mt-12 w-full max-w-[1394px] max-md:mt-0">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          loopAdditionalSlides={3}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="customer-reviews-swiper"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 50,
              loop: true,
              loopAdditionalSlides: 1
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
              loop: true,
              loopAdditionalSlides: 2
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
              loop: true,
              loopAdditionalSlides: 3
            }
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="w-[400px]">
              <ReviewCard
                {...review}
                isActive={isMobile ? false : index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
