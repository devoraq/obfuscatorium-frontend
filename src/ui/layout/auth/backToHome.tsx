import Link from "next/link";

const BackToHome: React.FC = () => {
  return (
    <div className="text-center mt-6">
      <Link
        href="/"
        aria-label="Вернуться на главную страницу"
        rel="home"
        className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
      >
        ← Вернуться на главную
      </Link>
    </div>
  );
};

export default BackToHome;
