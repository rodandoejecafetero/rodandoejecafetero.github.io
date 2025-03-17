import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';
import BaseLayout from '../../layouts/BaseLayout';
import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';

export default function Playlist({route}: BaseLayoutProps) {
  return (
    <LeftTopIconLayout id='playlist' color='yellow' width='w-full'>
      <BaseLayout route={route} />
      <div className="flex flex-wrap w-full h-full text-sm text-purple md:flex-nowrap">
        <div className='w-full mt-16 md:w-1/2 md:h-[100vh] md:mt-0 flex text-left'>
            <div className='w-full p-10 mx-auto my-auto md:w-fit'>
                <h2 className="mb-2 text-6xl font-bold uppercase text-wrap">ESCUCHA LA PLAYLIST:</h2>
                <h2 className="mb-2 text-5xl font-bold uppercase">RODANDO POR EL EJE CAFETERO</h2>
                <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank" className='text-xl'>https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg</a>
            </div>
        </div>
        <div className="w-full md:w-1/2 md:h-[100vh] bg-purple p-10 md:p-0">
            <div className='flex flex-col items-center justify-center w-full h-full px-4'>
                <img src={`${DEFAULT_URL}assets/logos/rodando-por-el-eje-purple-short.webp`} alt={route?.descriptiveSummary} className='w-full max-w-72' loading='lazy'/>
                <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank"><img src={`${DEFAULT_URL}assets/images/8-rodando-por-el-eje-spotify.webp`} alt={route?.descriptiveSummary} className='w-full max-w-72'/></a>
            </div>
        </div> 
      </div>
    </LeftTopIconLayout>
  );
};
