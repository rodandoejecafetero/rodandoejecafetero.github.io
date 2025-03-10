import { DEFAULT_URL } from '../../Constant';
import { BaseLayoutProps } from '../../interfaces/LayoutInterface';

export default function LaPasionGabriel({route}: BaseLayoutProps) {
  return (
    <div className='w-full'>
        <img
        src={`${DEFAULT_URL}assets/banners/la-pasion-de-gabriel.png`}
        alt={route?.descriptiveSummary}
        className="w-full"
        loading='lazy'
        />
    </div>
  );
};
