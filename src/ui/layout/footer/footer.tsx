import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="container mx-auto px-6 py-8 border-t border-sky-600/30"
      aria-label="Информация о копирайте и юридические документы"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-center text-gray-400">
          <p>&copy; 2026 Obfuscatorium. Все права защищены.</p>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span className="text-sm">Разработано командой</span>
          <div className="relative h-6 w-24">
            <Image
              src="/devora.svg"
              alt="Devora team - команда разработчиков"
              className="opacity-80 hover:opacity-100 transition-opacity object-contain"
              fill
              sizes="96px"
              loading="lazy"
              title="Devora team"
            />
          </div>
        </div>
        <nav
          aria-label="Юридическая навигация"
          className="flex flex-col md:flex-row items-center gap-4 text-sm order-2"
        >
          <Link
            href="/"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Прочитать политику конфиденциальности"
          >
            Политика конфиденциальности
          </Link>
          <div className="w-16 h-px bg-gray-600 md:hidden" />
          <span className="text-gray-500 hidden md:inline">|</span>
          <Link
            href="/"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Прочитать пользовательское соглашение"
          >
            Пользовательское соглашение
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
