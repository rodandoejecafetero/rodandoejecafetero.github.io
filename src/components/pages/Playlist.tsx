import { DEFAULT_URL } from '../../Constant';
import LeftTopIconLayout from '../../layouts/LeftTopIconLayout';

export default function Playlist() {
  return (
    <LeftTopIconLayout id='playlist' img={`${DEFAULT_URL}assets/logos/culturas/Culturas-morado.webp`} color='yellow' width='w-full'>
      <div className="flex flex-wrap w-full h-full text-sm text-purple sm:flex-nowrap">
        <div className='w-full mt-16 sm:w-1/2 sm:h-[100vh] sm:mt-0 flex text-left'>
            <div className='w-full p-10 mx-auto my-auto sm:w-fit'>
                <h2 className="mb-2 text-6xl font-bold uppercase text-wrap">ESCUCHA LA PLAYLIST:</h2>
                <h2 className="mb-2 text-5xl font-bold uppercase">RODANDO POR EL EJE CAFETERO</h2>
                <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank" className='text-xl'>https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg</a>
            </div>
        </div>
        <div className="w-full sm:w-1/2 sm:h-[100vh] bg-purple p-10 sm:p-0">
            <div className='flex flex-col items-center justify-center w-full h-full px-4'>
                <img src={`${DEFAULT_URL}assets/logos/rodando-por-el-eje-purple-short.webp`} alt="Logo" className='w-full max-w-72' loading='lazy'/>
                <a href="https://open.spotify.com/playlist/6oJEGmeordhwddO4uHnxXU?si=R5_YOYp-RtSPCI8THF9LRg" target="_blank"><img src={`${DEFAULT_URL}assets/images/8-rodando-por-el-eje-spotify.webp`} alt="Spotify" className='w-full max-w-72'/></a>
            </div>
        </div> 
      </div>
    </LeftTopIconLayout>
  );
};
