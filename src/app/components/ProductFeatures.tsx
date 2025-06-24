import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
}

function FeatureCard({ icon, title }: FeatureCardProps) {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-4 mx-auto text-sm font-semibold text-center text-white rounded-3xl bg-zinc-900 h-[180px] min-h-[180px] shadow-[0px_3px_30px_rgba(0,0,0,0.14)] w-[180px] max-md:mt-10 transition-colors duration-200 hover:bg-[#5058C2]">
      <img
        src={icon}
        className="object-contain self-center aspect-square w-[65px]"
        alt={title}
      />
      <p className="mt-2">{title}</p>
    </div>
  );
}

export function ProductFeatures() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/d624e53fba4d3411a44e3ad0c19a005c1ceee5ec?placeholderIfAbsent=true",
      title: "Giải pháp đa dụng cho mọi môi trường"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/41a7438360815a74e857dd95ff3ef12fa577c09e?placeholderIfAbsent=true",
      title: "Hiệu suất hình ảnh tối ưu cho công việc"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/70493ca3ad8cf6079d7c92ce87ed67b61d9d3f53?placeholderIfAbsent=true",
      title: "Làm việc thoải mái, bảo vệ đôi mắt"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1e84aeed4624676cb8b845b9548ddd918cf4bd43?placeholderIfAbsent=true",
      title: "Thiết kế tối ưu cho không gian làm việc"
    }
  ];

  return (
    <section className="flex gap-10 justify-center items-start py-20 w-full bg-[#1E1E68] max-md:max-w-full max-md:py-10">
      <div className="flex flex-wrap gap-10 items-center container mx-auto">
        <div className="overflow-hidden self-stretch my-auto flex flex-col gap-6 min-w-[400px] max-md:min-w-full max-md:items-center max-md:justify-center max-md:gap-0">
          <div className="flex gap-4 justify-between">
            <div className="flex-[0_0_47%] justify-between max-md:ml-0 max-md:w-full">
              <FeatureCard
                icon={features[0].icon}
                title={features[0].title}
              />
            </div>
            <div className="flex-[0_0_4%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                icon={features[1].icon}
                title={features[1].title}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex-[0_0_47%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                icon={features[2].icon}
                title={features[2].title}
              />
            </div>
            <div className="flex-[0_0_47%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
              />
            </div>
          </div>
        </div>
        <div className="px-[16px] flex flex-col flex-1 shrink justify-center self-stretch my-auto text-base leading-7 text-white basis-0 min-w-60 max-md:max-w-full">
          <img
            src="/common/logo-trans.png"
            className="object-contain max-w-full aspect-[3.5] w-[126px]"
            alt="QDT Logo"
          />
          <p className="mt-5 max-md:max-w-full text-white text-[16px] font-normal leading-[180%]">
            Dòng màn hình QDT QT-MF được thiết kế để đáp ứng nhu cầu làm việc đa dạng trong môi trường văn phòng, giáo dục và không gian làm việc riêng. Với công nghệ IPS hiện đại, tần số quét 100Hz và các tính năng hỗ trợ sức khỏe đôi mắt, đây là giải pháp lý tưởng cho các doanh nghiệp, trường học và những người làm việc tự do.
            <div className='mt-5'>
              Với thiết kế hiện đại và đa dạng kích thước (22” - 24” - 27”), chúng tôi muốn mang tới một dòng màn hình với chất lượng tốt, đa dạng mục đích sử dụng để nâng cao trải nghiệm và chất lượng sản phẩm công nghệ cho người Việt Nam.
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
