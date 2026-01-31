'use client';

import { useState } from 'react';
import { Logo } from '../../components/logo';
import { Button } from '../../components/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur supports-backdrop-filter:bg-gray-900/60">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Button to="/auth" variant="ghost" size="small">
            Войти
          </Button>
          <Button to="/auth" variant="primary" size="small">
            Регистрация
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Button to="/auth" variant="ghost" size="small">
              Войти
            </Button>
            <Button to="/auth" variant="primary" size="small">
              Регистрация
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;