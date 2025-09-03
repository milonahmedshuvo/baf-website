import Image from "next/image"
import { ArrowRight, Users, Trophy, UserCheck } from "lucide-react"
import about1 from '@/assets/images/about1.jpg'
import about2 from '@/assets/images/about2.jpg'
import Text from "../ui/Text"
import Button from "../ui/Button"


export default function AthleticsAboutSection() {


  const handleAbout = () => {

  }

  return (
    <section className="bg-black text-white py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4 items-center">

            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image src={about1} alt="Soccer players in action" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[3/5] overflow-hidden rounded-lg">
                <Image src={about2} alt="Soccer players in action" fill className="object-cover" />
              </div>
            </div>

          </div>



          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                ABOUT THE
                <br />
                <span className="text-white">BANGLADESH ATHLETICS FEDERATION</span>
              </h2> */}
              <Text size="4xl" weight="extrabold" color="white" >ABOUT THE</Text>
              <Text size="5xl" weight="extrabold" color="white" >BANGLADESH ATHLETICS FEDERATION</Text>
              
              <Text size="base" weight="normal" color="gray"> Bangladesh Athletics Federation is dedicated to promoting and developing athletics across the country.
                We aim to nurture talent, organize competitions, and foster a culture of excellence in track and field
                sports. Our programs focus on empowering athletes, coaches, and officials, while upholding the highest
                standards of sportsmanship and integrity.</Text>
            </div>



            {/* Stats Section */}
            <div className="flex justify-between gap-4 ">


              <div className="flex items-center gap-2">
                 <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto">
                  <UserCheck className="w-6 h-6 text-black" />
                </div>

                <div>
                  <Text size="xl" color="white" weight="medium" >Manager</Text>
                   <Text size="xl" color="white" weight="bold" >PRO 05</Text>
                </div>
              </div>

              <div className="flex items-center gap-2">
                 <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto">
                  <UserCheck className="w-6 h-6 text-black" />
                </div>

                <div>
                  <Text size="xl" color="white" weight="medium" >Manager</Text>
                   <Text size="xl" color="white" weight="bold" >PRO 05</Text>
                </div>
              </div>

              <div className="flex items-center gap-2">
                 <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto">
                  <UserCheck className="w-6 h-6 text-black" />
                </div>

                <div>
                  <Text size="xl" color="white" weight="medium" >Manager</Text>
                   <Text size="xl" color="white" weight="bold" >PRO 05</Text>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <Button variant="orange" buttonEvent={handleAbout} >Our Team</Button>
          </div>

        </div>
      </div>
    </section>
  )
}
