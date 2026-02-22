"use client";
import Image from "next/image";

interface LogoProps {
  imageSize?: string; 
  textSize?: string; 
}

export const Logo: React.FC<LogoProps> = ({ 
  imageSize = "h-16 w-24",
  textSize = "text-xl md:text-2xl",
}) => {
  return (
    <div className='flex items-center gap-2'>
      <div className={`relative ${imageSize}`}>
        <Image
          src="/OBF.svg"
          alt="Obfuscatorium"
          className="opacity-80 hover:opacity-100 transition-opacity object-contain"
          fill
          sizes="(max-width: 768px) 64px, 96px"
          loading="lazy"
        />
      </div>
      <span className={`${textSize} font-bold bg-linear-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent`}>
        Obfuscatorium
      </span>
    </div>
  );
};