import HomeNav from '~/components/headers/HomeNav';
import HeaderHero from '~/components/heroes/Home/HeaderHero';

export default function Home() {
  return (
    <section className='w-full h-full max-w-[1350px] mx-auto min-h-[100vh] relative flex flex-col'>
        <HomeNav />
        <HeaderHero />
    </section>
  );
}
  

