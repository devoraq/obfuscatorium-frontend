import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section
      className="container mx-auto px-6 py-20 text-center"
      aria-label="Призыв к действию"
    >
      <div
        className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-sky-600/30"
        role="article"
        aria-label="Информация о регистрации"
      >
        <h2 className="text-4xl font-bold mb-6 text-sky-500">
          Готовы начать свой путь?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Присоединяйтесь к сообществу разработчиков и создавайте будущее вместе
          с нами
        </p>
        <Link
          href="/register"
          className="bg-sky-700 hover:bg-sky-600 shadow-2xl shadow-sky-700/50 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
          aria-label="Зарегистрироваться на площадке для хакатонов бесплатно"
        >
          Зарегистрироваться бесплатно
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
