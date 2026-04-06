import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer
    className='container mx-auto border-t border-sky-600/30 px-6 py-8'
    aria-label='Информация о копирайте и юридические документы'
  >
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='text-center text-gray-400'>
        <p>&copy; 2026 Obfuscatorium. Все права защищены.</p>
      </div>
      <div className='flex items-center gap-3 text-gray-400'>
        <span className='text-sm'>Разработано командой</span>
        <div className='relative h-6 w-24'>
          <Image
            src='/devora.svg'
            alt='Devora team - команда разработчиков'
            className='object-contain opacity-80 transition-opacity hover:opacity-100'
            fill
            sizes='96px'
            loading='lazy'
            title='Devora team'
          />
        </div>
      </div>
      <nav
        aria-label='Юридическая навигация'
        className='order-2 flex flex-col items-center gap-4 text-sm md:flex-row'
      >
        <Link
          href='/'
          className='text-gray-400 transition-colors hover:text-blue-400'
          aria-label='Прочитать политику конфиденциальности'
        >
          Политика конфиденциальности
        </Link>
        <div className='h-px w-16 bg-gray-600 md:hidden' />
        <span className='hidden text-gray-500 md:inline'>|</span>
        <Link
          href='/'
          className='text-gray-400 transition-colors hover:text-blue-400'
          aria-label='Прочитать пользовательское соглашение'
        >
          Пользовательское соглашение
        </Link>
      </nav>
    </div>
  </footer>
);
