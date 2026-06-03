import Link from 'next/link';

export const HeroSection: React.FC = () => (
  <section className='container mx-auto px-6 py-20 text-center'>
    <h1 className='mb-6 text-4xl font-bold text-white md:text-7xl'>
      Площадка для хакатонов
    </h1>
    <p className='mx-auto mb-12 max-w-3xl text-lg text-gray-300 md:text-2xl'>
      Создавайте, участвуйте и побеждайте в самых крутых хакатонах.
      Объединяйтесь с единомышленниками и превращайте идеи в реальность.
    </p>
    <div className='flex flex-wrap justify-center gap-4'>
      <Link
        href='/register'
        className='inline-flex items-center justify-center rounded-xl bg-sky-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-sky-700/50 transition-all duration-300 hover:bg-sky-600'
        aria-label='Перейти на страницу регистрации'
        role='button'
      >
        Начать сейчас
      </Link>
      <Link
        href='#about-platform'
        className='inline-flex items-center justify-center rounded-xl border-2 border-sky-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-sky-600/10'
        aria-label='Узнать больше о площадке Obfuscatorium'
        role='button'
        scroll={true}
      >
        Узнать больше
      </Link>
    </div>
  </section>
);
