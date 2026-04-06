'use client';
import Image from 'next/image';

interface LogoProps {
  imageSize?: string;
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({
  imageSize = 'h-16 w-24',
  textSize = 'text-xl md:text-2xl',
}) => (
  <div className='flex items-center gap-2'>
    <div className={`relative ${imageSize}`}>
      <Image
        src='/OBF.svg'
        alt='Obfuscatorium'
        className='object-contain opacity-80 transition-opacity hover:opacity-100'
        fill
        sizes='(max-width: 768px) 64px, 96px'
        loading='lazy'
      />
    </div>
    <span
      className={`${textSize} bg-linear-to-r from-sky-600 to-sky-400 bg-clip-text font-bold text-transparent`}
    >
      Obfuscatorium
    </span>
  </div>
);
