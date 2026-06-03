interface StatItem {
  value: string;
  label: string;
}

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    { value: '100+', label: 'Хакатонов' },
    { value: '5000+', label: 'Участников' },
    { value: '200+', label: 'Проектов' },
    { value: '50+', label: 'Победителей' },
  ];

  return (
    <section className='container mx-auto px-6 py-20'>
      <div
        className='grid gap-8 text-center md:grid-cols-4'
        aria-label='Статистика платформы'
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className='group relative transform overflow-hidden rounded-2xl border-2 border-sky-600/50 bg-linear-to-br from-gray-900 to-gray-800 px-6 py-6 transition-all duration-1000 ease-out hover:scale-105 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20'
          >
            <div className='absolute inset-0 -translate-x-full bg-linear-to-r from-sky-600/0 via-sky-600/10 to-sky-600/0 transition-transform duration-1000 group-hover:translate-x-full' />

            <div className='relative z-10'>
              <div className='mb-3 text-4xl font-bold text-white transition-all duration-500 group-hover:bg-linear-to-r group-hover:from-sky-400 group-hover:to-sky-200 group-hover:bg-clip-text group-hover:text-transparent md:text-5xl'>
                {stat.value}
              </div>
              <div className='text-gray-300 transition-colors duration-500 group-hover:text-sky-300'>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
