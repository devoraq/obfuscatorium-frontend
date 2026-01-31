'use client'
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-6 py-8 border-t border-sky-600/30">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} Obfuscatorium. Все права защищены.</p>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-sm">Разработано командой</span>
          <div className="relative h-6 w-24">
            <Image
              src="/devora.svg"
              alt="Devora"
              className="opacity-80 hover:opacity-100 transition-opacity object-contain"
              fill
              sizes="96px"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm order-2">
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Политика конфиденциальности
          </Link>
          <div className="w-16 h-px bg-gray-600 md:hidden" />
          <span className="text-gray-500 hidden md:inline">|</span>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;