"use client";

import { dotIcon, emailIcon, facebookIcon } from '@/utils/icon';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function FooterV2() {

  const navItems = [
    { text: "Trang chủ", href: "/" },
    { text: "Đại lý", href: "https://manhinh.qdt.com.vn/#distributor" },
  ];
  // const twitter = (
  //   <a
  //     href="#"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     {xIcon}
  //   </a>
  // );

  const mail = (
    <a
      className='flex gap-2 items-center'
      href="mailto:info@qdt.com.vn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {emailIcon}
      info@qdt.com.vn
    </a>
  );

  const facebook = (
    <a
      href="https://www.facebook.com/qdt.tech/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {facebookIcon}
    </a>
  );

  // const telegram = (
  //   <a
  //     href="#"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     {tgIcon}
  //   </a>
  // );

  // const linkedin = (
  //   <a href="#" target="_blank" rel="noopener noreferrer">
  //     {linkedinIcon}
  //   </a>
  // );

  interface NavItemProps {
    text: string;
    href: string;
    showDot?: boolean;
  }

  const NavItem: React.FC<NavItemProps> = ({ text, href, showDot = true }) => {
    const router = useRouter();
    const pathname = usePathname();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (href === '/#distributor') {
        e.preventDefault();
        if (pathname === '/') {
          const distributorSection = document.getElementById('distributor');
          if (distributorSection) {
            distributorSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          router.push('/#distributor');
        }
      } else if (href === '/') {
        e.preventDefault();
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          router.push('/');
        }
      }
    };
    return (
      <a href={href} className="flex gap-3 text-[18px]" onClick={handleClick}>
        <div className="self-stretch my-auto">{text}</div>
        {showDot && dotIcon}
      </a>
    );
  }

  return (
    <footer>
      <div className="flex flex-wrap gap-10 justify-between lg:px-24 px-6 py-[40px] lg:py-16 bg-[#252527] max-md:px-5">
        <div className="flex flex-col my-auto">
          <img className="max-w-[126px]" src="/common/logo-trans.png" alt='logo-qdt' />
          <div className="flex gap-6 items-center mt-8 text-white">
            <div className="flex gap-5 items-center self-stretch my-auto w-[30px] h-[30px] rounded-3xl bg-opacity-20">
              {facebook}
            </div>
            <div className="flex gap-5 items-center self-stretch my-auto w-[30px] h-[30px] rounded-3xl bg-opacity-20">
              {mail}
            </div>
            {/* <div className="flex gap-5 items-center self-stretch my-auto w-[30px] h-[30px] rounded-3xl bg-opacity-20">
              {linkedin}
            </div>
            <div className="flex gap-5 items-center self-stretch my-auto w-[30px] h-[30px] rounded-3xl bg-opacity-20">
              {twitter}
            </div>
            <div className="flex gap-5 items-center self-stretch my-auto w-[30px] h-[30px] rounded-3xl bg-opacity-20">
              {telegram}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between lg:items-end items-start font-medium min-w-[240px]">
          <div className="flex gap-2.5 items-center text-base tracking-tight text-white whitespace-nowrap">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                href={item.href}
                showDot={index !== navItems.length - 1}
              />
            ))}
          </div>
          <div className="mt-16 text-sm tracking-tight text-[#FFFFFFB2] text-[16px] max-md:mt-10">
            Copyright ©{new Date().getFullYear()} QDT. All rights reserved.
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
