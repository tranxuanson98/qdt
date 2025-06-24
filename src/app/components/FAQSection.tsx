"use client";
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
  onClick?: () => void;
}

function FAQItem({ question, answer, isOpen = false, onClick }: FAQItemProps) {
  return (
    <div className={`overflow-hidden px-6 py-5 w-full flex-col flex justify-center bg-white rounded-3xl shadow-[0px_4px_36px_rgba(0,0,0,0.14)] text-zinc-900 max-md:px-5 max-md:max-w-full transition-all duration-300 ease-in-out ${isOpen ? 'shadow-lg' : 'shadow-sm'} min-h-[72px]`}>
      <button
        className="text-xl cursor-pointer font-extrabold max-md:max-w-full text-left w-full flex justify-between items-center"
        onClick={onClick}
      >
        <span className="font-extrabold text-[22px] max-md:text-[16px]" style={{ color: isOpen ? '#1B1B1C' : "#9F9F9F" }}>
          {question}
        </span>
        {/* <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span> */}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className="max-md:max-w-full font-normal text-[18px] max-md:text-[14px] text-[#1B1B1C]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Màn có thể treo tường không?",
      answer: "Có. Cả 3 mẫu đều hỗ trợ ngàm VESA tiêu chuẩn 75x75mm hoặc 100x100mm để treo tường hoặc arm gắn bàn."
    },
    {
      question: "Màn có loa không?",
      answer: "Không có loa tích hợp. Bạn có thể dùng tai nghe hoặc loa ngoài qua cổng máy tính như bình thường."
    },
    {
      question: "Màn có bị hở sáng không?",
      answer: "Rất hạn chế. QDT dùng tấm nền IPS chất lượng cao từ BOE - một trong những thương hiệu sản xuất panel lớn và lâu đời nhất thế giới."
    },
    {
      question: "Có hỗ trợ cổng VGA cho máy cũ không?",
      answer: "Có. Cả 3 mẫu đều có cổng VGA và HDMI, hỗ trợ cả máy mới lẫn máy đời cũ."
    },
    {
      question: "Tần số quét 100Hz có khác gì so với 60Hz?",
      answer: "Có. 100Hz giúp chuyển động mượt hơn, đặc biệt dễ chịu khi lướt mạng, xem video, chơi game."
    },
    {
      question: "Màn có điều chỉnh được độ nghiêng không?",
      answer: "Có. Chân đế có thể ngửa lên/xuống tùy chỉnh, giúp người dùng đỡ mỏi cổ khi làm việc lâu."
    },
    {
      question: "Tôi có thể bảo hành ở đâu?",
      answer: "Màn hình QDT được phân phối chính hãng toàn quốc tại nhiều tỉnh thành, với 2 chi nhánh bảo hành chính thức tại Hà Nội và Thành phố Hồ Chí Minh."
    }
  ];

  return (
    <section className="flex overflow-hidden overflow-x-auto flex-col items-center py-32 w-full bg-zinc-100 max-md:py-12 max-md:max-w-full max-md:px-[16px]">
      <h2 className="text-[48px] uppercase font-extrabold text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:text-center">
        Câu hỏi thường gặp
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center mt-12 max-w-full text-neutral-400 w-[1200px] max-md:mt-10">
        <div className="flex flex-col items-center">
          <img
            src="/question/question_1.png"
            className="object-contain self-stretch my-auto aspect-[1.27] min-w-60 w-[508px] max-md:max-w-full"
            alt="FAQ Illustration"
          />
          <button
            className="mt-10 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200 max-md:py-2"
            onClick={() => {
              const distributorSection = document.getElementById('distributor');
              if (distributorSection) {
                distributorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Liên hệ Đại lý
          </button>
        </div>

        <div className="min-h-[700px] flex flex-col gap-4 flex-1 shrink justify-center self-stretch my-auto basis-0 !min-w-60 max-md:max-w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
