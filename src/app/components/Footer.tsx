import React from 'react';

export function Footer() {
  return (
    <footer className="flex overflow-hidden flex-wrap gap-10 justify-between items-start p-10 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="text-sm text-white">
        <img
          src="/common/logo-trans.png"
          className="object-contain max-w-full aspect-[3.5] w-[126px]"
          alt="QDT Logo"
        />
        <div className="flex flex-col items-start mt-8">
          <div className="flex gap-2 items-center self-stretch">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/2ab274621e608a2d3d9c796da8a0a22cbe361548?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Location"
            />
            <div className="self-stretch my-auto">
              Số 1, đường A, Q. B
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/ab5bf057ac7f05cafac49dafc1a7c17d8383a275?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Phone"
            />
            <div className="self-stretch my-auto">0241374566</div>
          </div>
          <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/eb4489b160420fd852340aef8c786b8eace85575?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Email"
            />
            <div className="self-stretch my-auto">
              mail@email.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/3945544b8fe6cd8ad4dd8a453911fba78baff95c?placeholderIfAbsent=true"
          className="cursor-pointer object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          alt="Social Media"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/89b21dbcaf414bcdae50f036c8c0488d/1fa83b004e203f6454bd2461dd0bdcdce5b06aad?placeholderIfAbsent=true"
          className="cursor-pointer object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          alt="Social Media"
        />
      </div>
    </footer>
  );
}
