import Link from 'next/link';

export const CTASection: React.FC = () => (
  <section
    className='container mx-auto px-6 py-20 text-center'
    aria-label='Призыв к действию'
  >
    <div
      className='rounded-3xl border border-sky-600/30 bg-gray-800/50 p-12 backdrop-blur-sm'
      role='article'
      aria-label='Информация о регистрации'
    >
      <h2 className='mb-6 text-4xl font-bold text-sky-500'>
        Готовы начать свой путь?
      </h2>
      <p className='mb-8 text-xl text-gray-300'>
        Присоединяйтесь к сообществу разработчиков и создавайте будущее вместе с
        нами
      </p>
      <Link
        href='/register'
        className='inline-flex items-center justify-center rounded-xl bg-sky-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-sky-700/50 transition-all duration-300 hover:bg-sky-600'
        aria-label='Зарегистрироваться на площадке для хакатонов бесплатно'
      >
        Зарегистрироваться бесплатно
      </Link>
    </div>
  </section>
);
