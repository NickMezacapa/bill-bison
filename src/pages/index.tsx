import HomeNav from '~/components/headers/HomeNav';
import HeaderHero from '~/components/heroes/HeaderHero';

export default function Home() {
  return (
    <section className='w-full h-full min-h-[100vh] relative flex flex-col'>
        <HomeNav />
        <HeaderHero />
    </section>
  );
}
  

