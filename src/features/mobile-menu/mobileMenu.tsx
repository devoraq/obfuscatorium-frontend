import Link from 'next/link';

interface MobileProps {
  isOpen: boolean;
  onClose: () => void;
}
export const MobileMenu: React.FC<MobileProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className='border-t border-gray-700 bg-gray-800 md:hidden' role='menu'>
      <div className='container mx-auto flex flex-col gap-4 px-6 py-4'>
        <Link
          href='/'
          className='inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-white'
          aria-label='Перейти на страницу авторизации'
        >
          Войти
        </Link>
        <Link
          href='/'
          className='inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-2xl shadow-sky-700/50 transition-all duration-300 hover:bg-sky-600'
          aria-label='Перейти на страницу регистрации'
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
};
