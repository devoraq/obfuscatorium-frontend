import Link from 'next/link';
import { Github } from 'lucide-react';

export const SocialAuth: React.FC = () => (
  <div className='grid grid-cols-2 gap-4'>
    <Link
      href='/'
      aria-label='Авторизоваться с помощью Google'
      className='flex items-center justify-center rounded-lg border border-sky-600/30 bg-gray-800/50 px-4 py-3 font-medium text-gray-300 transition-all hover:bg-gray-800'
    >
      Google
    </Link>
    <Link
      href='/'
      aria-label='Авторизоваться с помощью GitHub'
      className='flex items-center justify-center gap-1.5 rounded-lg border border-sky-600/30 bg-gray-800/50 px-4 py-3 font-medium text-gray-300 transition-all hover:bg-gray-800'
    >
      GitHub
      <Github size={20} />
    </Link>
  </div>
);
