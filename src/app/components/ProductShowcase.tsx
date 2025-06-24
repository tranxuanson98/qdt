"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductProps {
  image: string;
  imageHover: string;
  title: string;
  description: string;
  specs: string[];
  link: string;
}

function ProductDisplay({ image, imageHover, title, description, specs }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex flex-wrap gap-10 items-center mt-10 w-full max-md:max-w-full first:mt-0"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.21 }}
        className="flex overflow-hidden flex-col justify-center items-center self-stretch px-20 py-32 my-auto !rounded-tr-3xl !rounded-br-3xl 2xl:rounded-3xl bg-zinc-200 min-w-60 w-[800px] max-md:px-5 max-md:py-6 max-md:max-w-[99%]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={isHovered ? "hover" : "normal"}
            src={isHovered ? imageHover : image}
            className="object-contain max-w-full aspect-[1.27] w-[553px] !rounded-tr-3xl !rounded-br-3xl"
            alt={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="flex flex-col flex-1 justify-center min-w-60 text-zinc-900 max-md:max-w-full max-md:px-[16px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, delay: 0.06 }}
      >
        <div className="max-w-full">
          <motion.h2
            className="text-[48px] font-extrabold text-[#1B1B1C] max-md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {title}
          </motion.h2>
          {/* <motion.p
            className="mt-2.5 text-[#1B1B1C] text-[16px] font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.03 }}
          >
            {size}
          </motion.p> */}
          <motion.p
            className="mt-2.5 text-[20px] font-semibold text-[#1B1B1C]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.06 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          className="mt-16 text-base max-md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          {Array.isArray(specs) && specs.map((spec, index) => (
            <motion.div
              key={index}
              className={index > 0 ? "mt-2.5 text-[#1B1B1C] text-[16px] font-normal" : ""}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.21 + index * 0.03 }}
            >
              {spec}
            </motion.div>
          ))}
          <motion.a
            onClick={() => {
              const distributorSection = document.getElementById('distributor');
              if (distributorSection) {
                distributorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex cursor-pointer items-center max-w-[190px] gap-2 mt-18 px-8 py-3 rounded-full bg-[#2A2AFF] text-white text-lg font-medium hover:bg-zinc-800 transition-colors duration-200 max-md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.21 + (specs?.length || 0) * 0.03 }}
            whileHover={{ scale: 1.05 }}
          >
            Xem thêm
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function ProductShowcase() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const products = [
    {
      image: "/showcase/22in.png",
      imageHover: "/showcase/22in_hover.png",
      title: "QT22MF",
      description: "NHỎ GỌN - TINH TẾ - ĐA DỤNG.",
      specs: [
        "Tần số quét: 100 Hz",
        "Độ phân giải: 1920x1080 FHD",
        "Thiết kế: Viền mỏng, Đế vuông",
        "Kích cỡ: 22\"",
        "Phù hợp với không gian nhỏ hoặc dùng làm màn hình bổ sung"
      ],
      link: "#distributor"
    },
    {
      image: "/showcase/24in.png",
      imageHover: "/showcase/24in_hover.png",
      title: "QT24MF",
      description: "CÂN BẰNG KHÔNG GIAN & TRẢI NGHIỆM.",
      specs: [
        "Tấm nền: IPS (BOE)",
        "Tần số quét: 100 Hz",
        "Độ phân giải: 1920x1080 FHD",
        "Thiết kế: Viền mỏng, Đế chữ V",
        "Kích cỡ: 24\"",
        "Hỗ trợ đa tác vụ cho người dùng chuyên nghiệp"
      ],
      link: "#distributor"
    },
    {
      image: "/showcase/27in.png",
      imageHover: "/showcase/27in_hover.png",
      title: "QT27MF",
      description: "TẦM NHÌN RỘNG MỞ CHO MỌI NHU CẦU.",
      specs: [
        "Tấm nền: IPS (BOE)",
        "Tần số quét: 100 Hz",
        "Độ phân giải: 1920x1080 FHD",
        "Thiết kế: Viền mỏng, Đế chữ V",
        "Kích cỡ: 27\"",
        "Từ công việc đến giải trí – mọi thứ trong tầm mắt."
      ],
      link: "#distributor"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollProgress = (scrollPosition - sectionTop) / (sectionHeight - windowHeight);
      const itemScrollLength = products.length * 1;
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollProgress * itemScrollLength)),
        products.length - 1
      );

      setCurrentProductIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600vh] max-md:min-h-[450vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden w-full bg-zinc-100 max-md:max-w-full">
        <div className="flex min-h-[100vh] flex-wrap gap-10 items-center justify-center w-full max-md:max-w-full 2xl:max-w-[1920px] 2xl:mx-auto">
          <AnimatePresence mode="wait">
            <ProductDisplay key={currentProductIndex} {...products[currentProductIndex]} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
