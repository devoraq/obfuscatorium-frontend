import Link from "next/link";

interface MobileProps {
  isOpen: boolean;
  onClose: () => void;
}
const MobileMenu: React.FC<MobileProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div
      className="md:hidden bg-gray-800 border-t border-gray-700"
      role="menu"
    >
      <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
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
    </div>
  );
};

export default MobileMenu;
