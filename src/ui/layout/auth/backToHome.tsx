import Link from 'next/link';

export const BackToHome: React.FC = () => (
  <div className='mt-6 text-center'>
    <Link
      href='/'
      aria-label='Вернуться на главную страницу'
      rel='home'
      className='text-sm text-gray-400 transition-colors hover:text-gray-300'
    >
      ← Вернуться на главную
    </Link>
  </div>
);
