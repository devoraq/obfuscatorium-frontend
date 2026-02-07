import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
        Площадка для хакатонов
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Создавайте, участвуйте и побеждайте в самых крутых хакатонах.
        Объединяйтесь с единомышленниками и превращайте идеи в реальность.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/register"
          className="bg-sky-700 hover:bg-sky-600 shadow-2xl shadow-sky-700/50 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
          aria-label="Перейти на страницу регистрации"
          role="button"
        >
          Начать сейчас
        </Link>
        <Link
          href="#about-platform"
          className="border-2 border-sky-600 hover:bg-sky-600/10 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center"
           aria-label="Узнать больше о площадке Obfuscatorium"
          role="button"
           scroll={true}
        >
          Узнать больше
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
