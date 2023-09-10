import Stats from '@/components/Stats';
import Banner from '@/components/Banner';
import Image from 'next/image';
import bubble from '../../public/bubble.png';
import Service from '@/components/Service';

export default function Home() {
  return (
    <div>
      <div className='relative'>
        <Banner data-aos="fade-down" />
        <Stats className='' />
        <Service/>
        {/* Stick the GIF to the bottom-right corner */}
        <div className="fixed bottom-0 right-0 z-20">
          <div >
            <a href="https://ngl.link/afnanferdousi1301" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://img1.picmix.com/output/stamp/normal/0/2/4/1/1991420_fe542.gif" // Adjust the path to your GIF
                alt="Dancing Anime Girl"
                width={120}
                height={120}
              />
            </a>
            {/* Add the chat bubble on the top-right corner */}
            <div className="absolute top-[-40px] right-[5px]">
              <Image
                src={bubble} // Path to the chat bubble image
                alt="Chat Bubble"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
