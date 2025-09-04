// app/components/UpcomingMatch.tsx
"use client";
import Image from "next/image";
import baseballCourt2 from '@/assets/images/home/upcoming-match/baseball-court2.jpg'
import baseballLogo1 from '@/assets/images/home/upcoming-match/baseball1.png'
import baseballLogo2 from '@/assets/images/home/upcoming-match/baseball2.png'
import Text from "../ui/Text";
import Button from "../ui/Button";




export default function UpcomingMatch() {


  return (
    <section
     className={`relative py-24 bg-cover bg-center h-64 w-full object-center`} 
     style={{ 
        backgroundImage: `url(${baseballCourt2.src})`, 
        height: '100%',
        backgroundPosition: "center center",
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
    }}
     >

      {/* Section Title */}
      <div className="text-center mb-8">
        <Text size="5xl" weight="extrabold">UPCOMING BIG MATCH</Text>
      </div>


      {/* Match Info */}
      <div className="flex flex-col md:flex-row items-center justify-between relative z-10 max-w-5xl mx-auto mt-20 ">

        {/* Left Club */}
        <div className="flex items-center mb-6 md:mb-0 md:mr-12 ">
          <div className="max-w-[200px]">
            <Image
              src={baseballLogo1}
              alt="Dragons"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center mx-8">
          <Text size="xl" weight="bold" > August 26, 2023 5:45 PM</Text>
          <div className="flex gap-2.5 my-7 items-center">
            <Text size="4xl" weight="bold" >Dragons</Text>
            <Text size="base" weight="bold" > VS</Text>
            <Text size="4xl" weight="bold" > Bulls</Text>
          </div>
           
          <Button variant="orange" >GET TICKET</Button>
        </div>

        {/* Right Club */}
       <div className="flex items-center">
          <div className="max-w-[200px]">
            <Image
              src={baseballLogo2}
              alt="Bulls"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

      </div>


      {/* Countdown */}
      <div className="mt-12 flex justify-center items-center">
        <div className="flex space-x-4">

          <div className="flex flex-col justify-center items-center gap-3 py-5 px-2  w-[140px] h-[140px]  border-[1px] border-[#f6f6f633] rounded-sm">
            <Text size="5xl" color="white" weight="extrabold" >-608</Text>
            <p className="text-sm uppercase font-semibold text-white">DAYS</p>
          </div>

           <div className="flex flex-col justify-center items-center gap-4 py-5 px-3  w-[140px] h-[140px]  border-[1px] border-[#f6f6f633] rounded-sm">
            <Text size="5xl" color="white" weight="extrabold" >0-8</Text>
            <p className="text-sm uppercase font-semibold text-white">Hours</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 py-5 px-3  w-[140px] h-[140px] border-[1px] border-[#f6f6f633] rounded-sm">
            <Text size="5xl" color="white" weight="extrabold" >1-0</Text>
            <p className="text-sm uppercase font-semibold text-white">Mitins</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 py-5 px-3 w-[140px] h-[140px]  border-[1px] border-[#f6f6f633] rounded-sm">
            <Text size="5xl" color="white" weight="extrabold" >5-9</Text>
            <p className="text-sm uppercase font-semibold text-white">Secound</p>
          </div>

        </div>
      </div>

      {/* Background "LIVE" Watermark */}
      <span className="absolute inset-0 flex justify-center items-center text-gray-200 font-bold text-[12rem] md:text-[18rem] -z-10 select-none opacity-40">
        LIVE
      </span>
    </section>
  );
}
