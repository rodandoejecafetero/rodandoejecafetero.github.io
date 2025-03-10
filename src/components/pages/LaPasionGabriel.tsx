import img from '../../assets/banners/la-pasion-de-gabriel.png';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

export default function LaPasionGabriel({route}: BaseLayoutProps) {
  return (
    <div className='w-full'>
        <img
        src={img}
        alt={route?.descriptiveSummary}
        className="w-full"
        loading='lazy'
        />
    </div>
  );
};
