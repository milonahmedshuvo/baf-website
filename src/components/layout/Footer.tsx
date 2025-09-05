
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import logo from '@/assets/images/logo_title_white.png';
import Link from "next/link";
import post1 from '@/assets/images/home/footer/small-post4.png'
import post2 from '@/assets/images/home/footer/small-post5.png'


export default function Footer() {
  const quickLinks = [
    { name: "About Club", href: "#" },
    { name: "Contacts", href: "#" },
    { name: "Price Table", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Our Players", href: "#" },
  ]

  const posts = [
    {
      id: 1,
      title: "A Batter Who's Catches A Pitch While Batting",
      date: "June 21, 2023",
      image: post1,
    },
    {
      id: 2,
      title: "A Batter Who's Catches A Pitch While Batting",
      date: "June 21, 2023",
      image: post2,
    },
  ]

  return (
    <footer className="bg-black text-foreground py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">


          {/* Logo and Description Section */}
          <div className="lg:col-span-1">

            <div className="flex items-center gap-3 mb-6">
               <Image src={logo} width={200} height={200} alt="logo" className="object-cover"/>
            </div>

            <p className="text-muted-foreground font-[500] text-base leading-relaxed mb-6 text-[#888888] roboto-font pr-10">
              It was the end of a period in the 1980s in which it seemed like every NBA Finals matchup featured the
              Celtics sports club.
            </p>


            <div className="flex gap-4">

              <Link href="#" className="text-muted-foreground transition-colors bg-[#1d1d1d] text-white h-[50px] w-[50px] rounded-full flex justify-center items-center duration-300 hover:bg-[#e41b23]">
                <Facebook  size={20} />
              </Link>

             <Link href="#" className="text-muted-foreground transition-colors bg-[#1d1d1d] text-white h-[50px] w-[50px] rounded-full flex justify-center items-center duration-300 hover:bg-[#e41b23]">
                <Twitter size={20} />
              </Link>

                <Link href="#" className="text-muted-foreground transition-colors bg-[#1d1d1d] text-white h-[50px] w-[50px] rounded-full flex justify-center items-center duration-300 hover:bg-[#e41b23]">
                   <span className="text-xs font-bold text-background">Be</span>
              </Link>

            <Link href="#" className="text-muted-foreground transition-colors bg-[#1d1d1d] text-white h-[50px] w-[50px] rounded-full flex justify-center items-center duration-300 hover:bg-[#e41b23]">
                   <Youtube size={20} />
              </Link>
              
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1  lg:mx-auto ">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-[#888888]  transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>



          {/* Post Gallery Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Post Gallery</h3>
            <div className="space-y-4">

                
              {posts.map((post) => (
                <div key={post.id} className="bg-card border-border hover:bg-accent/10 transition-colors">
                  <div className="">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={90}
                          height={90}
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#888888] mb-1">{post.date}</p>
                        <h4 className="text-white text-base uppercase leading-6.5 font-semibold mt-1.5  line-clamp-2">{post.title}</h4>
                      </div>

                    </div>
                  </div>
                </div>
              ))}



            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">Get In Touch</h3>
            <div className="space-y-4">

              <div className="flex items-center gap-3 border-b border-[#212121] pb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#e41b23]  " />
                </div>
                <a
                  href="mailto:info@webmail.com"
                  className="text-white  transition-colors text-base font-medium"
                >
                  INFO@WEBMAIL.COM
                </a>
              </div>



              <div className="flex items-center gap-3 border-b border-[#212121] pb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#e41b23] " />
                </div>
                <a
                  href="tel:098777888990"
                  className="text-white hover:text-primary transition-colors text-base font-medium"
                >
                  098 777 888 90
                </a>
              </div>

              <div className="flex items-start gap-3 border-b border-[#212121] pb-4 ">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-[#e41b23]" />
                </div>
                <div className="text-white text-sm font-medium leading-relaxed">
                  <p>USA, CALIFORNIA 20, FIRST</p>
                  <p>AVENUE, CALIFORNIA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    
        {/* Footer end here........  */}
        <div className="bg-[#1A1A1A] p-10 flex flex-col md:flex-row justify-between mt-10 lg:mt-24 ">
            <h1 className="font-medium text-base text-[#FFFFFF] ">Design and Developed By <span className="text-[#e41b23]">SkyTech Global Ltd.</span> - 2025</h1>

            <div className="flex gap-10 mt-3 md:mt-0">
                <h5 className="font-medium text-[#8b8b8b] text-base uppercase" >TERMS & CONDITONS</h5>
                 <h5 className="font-medium text-[#8b8b8b] text-base uppercase" > FAQ</h5>
                  <h5 className="font-medium text-[#8b8b8b] text-base uppercase" > CAREER</h5>
            </div>
        </div>
        
      </div>
    </footer>
  )
}
