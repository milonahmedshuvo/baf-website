import { SportsNewsCard } from "../Card/NewsCard"
import news1 from '@/assets/images/home/latest-news/news1.jpg'
import news2 from '@/assets/images/home/latest-news/news2.jpg'
import news3 from '@/assets/images/home/latest-news/news3.jpg'
import author1 from '@/assets/images/home/latest-news/author1.png'
import Text from "../ui/Text"


export default function HomePage() {

  const sportsNews = [
    {
      id: 1,
      title: "National Athletics Championships",
      category: "CHAMPION",
      author: {
        name: "Anisur Rahman",
        avatar: author1,
      },
      date: "Aug 02, 2025",
      backgroundImage: news1, 
    },
    {
      id: 2,
      title: "Veteran Athletics Championships",
      category: "VETERAN",
      author: {
        name: "Arafat Zubayer",
        avatar: author1,
      },
      date: "Aug 15, 2025",
      backgroundImage: news2,
    },
    {
      id: 3,
      title: "Bangladesh National Marathon",
      category: "MARATHON",
      author: {
        name: "Imran Mahmud",
        avatar: author1,
      },
      date: "Aug 25, 2025",
      backgroundImage: news3,
    },
  ]


  return (
    <main className="min-h-screen bg-background p-4 md:p-8 mt-20">
      <div className="max-w-7xl mx-auto">

        <div className=" w-full lg:w-1/2 mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center uppercase">OUR LATEST NEWS</h1>
             <p className="text-[#999999] font-normal text-[16px] roboto-font text-center mt-6 mb-14 " >Bangladesh Athletics Federation runs youth training programs and seasonal camps to develop emerging athletes nationwide.</p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {sportsNews.map((news) => (
            <SportsNewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </main>
  )
}
