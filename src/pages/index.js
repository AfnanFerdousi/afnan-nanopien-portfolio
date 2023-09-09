import Stats from '@/components/Stats';
import Banner from '@/components/Banner';


export default function Home() {
  return (
    <div>
      <div className=''>
        <Banner />
        <Stats  /> {/* Set a higher z-index for Stats */}
      </div>
   </div>
  )
}
