"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/ui/components/logo";
import { Menu, X } from "lucide-react";
import MobileMenu from "@/features/mobile-menu/mobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur supports-backdrop-filter:bg-gray-900/60">
      <nav
        className="container mx-auto px-6 py-4 flex justify-between items-center"
        aria-label="Основная навигация"
      >
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="text-gray-300 hover:text-white px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
            aria-label="Перейти на страницу авторизации"
          >
            Войти
          </Link>
          <Link
            href="/"
            className="bg-sky-700 hover:bg-sky-600 shadow-2xl shadow-sky-700/50 text-white px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
            aria-label="Перейти на страницу регистрации"
          >
            Регистрация
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          return setIsMobileMenuOpen(false);
        }}
      />
    </header>
  );
};

export default Header;
