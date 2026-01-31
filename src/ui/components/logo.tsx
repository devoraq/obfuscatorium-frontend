'use client';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => (
  <Link 
    href="/" 
    className={`flex items-center gap-2 ${className}`}
  >
    <div className="relative h-16 w-24">
      <Image
        src="/OBF.svg"
        alt="Obfuscatorium"
        className="opacity-80 hover:opacity-100 transition-opacity object-contain"
        fill
        sizes="96px"
        loading="lazy"
      />
    </div>
    <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
      Obfuscatorium
    </span>
  </Link>
);