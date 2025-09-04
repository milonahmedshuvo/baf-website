'use client'
import Image from "next/image";
import adBannar from '@/assets/images/ad-banner.jpg'


export default function AdBanner() {

  return (
    <div className="flex justify-center items-center h-[300px]">
      <Image
        src={adBannar}
        alt="Ad Banner"
        width={1280} 
        height={300} 
        className="object-contain"
        priority
      />
    </div>
  );
}
