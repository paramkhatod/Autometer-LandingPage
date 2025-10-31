import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Benefit from '../components/benefit'
import HeroNext from '../components/HeroNext'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Fetures from '../components/fetures'
import Review from '../components/review'
import Scrolling from '../components/scrollIng'
import CustomCursor from '../components/CustomCursor.tsx'

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Automater - Home</title>
        {/* CORRECTED LINE BELOW */}
        <link rel="icon" href="/logo1.png" /> 
      </Head>
      <CustomCursor />
      <header className='w-full pb-20 md:pb-32 bg-gradient-to-t from-sky-500 to-purple-500'>
    <Navbar />
    <HeroSection />
</header>

      <article>
        <HeroNext />
        <Benefit />
        <Scrolling />
        <Fetures />
        <Review />
        <Newsletter />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
