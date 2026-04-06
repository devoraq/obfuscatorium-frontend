'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { MobileMenu } from '@/features/mobile-menu/mobileMenu';

import { Logo } from '@/ui/components/logo';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 bg-gray-950/95 backdrop-blur supports-backdrop-filter:bg-gray-950/60'>
      <nav
        className='container mx-auto flex items-center justify-between px-6 py-4'
        aria-label='Основная навигация'
      >
        <Logo />

        {/* Desktop menu */}
        <div className='hidden items-center gap-6 md:flex'>
          <Link
            href='/login'
            className='inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-white'
            aria-label='Перейти на страницу авторизации'
          >
            Войти
          </Link>
          <Link
            href='/register'
            className='inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-2xl shadow-sky-700/50 transition-all duration-300 hover:bg-sky-600'
            aria-label='Перейти на страницу регистрации'
          >
            Регистрация
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className='p-2 text-gray-300 hover:text-white md:hidden'
          onClick={toggleMobileMenu}
          aria-label='Открыть меню'
          aria-controls='mobile-menu'
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
