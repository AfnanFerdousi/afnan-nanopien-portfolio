import Stats from '@/components/Stats';
import Banner from '@/components/Banner';
import Service from '@/components/Service';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import GIF from '@/components/shared/GIF';

export default function Home() {
  return (
    <div>
      <div className='relative'>
        <Banner data-aos="fade-down" />
        <Stats className='' />
        <Service />
        <Resume />
        <Projects />
        <Blogs limit="3"/>
        {/* Stick the GIF to the bottom-right corner */}
       <GIF/>
      </div>
    </div>
  );
}
