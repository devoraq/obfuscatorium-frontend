import { LucideIcon, Medal, Rocket, UsersRound } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Rocket,
      title: 'Быстрый старт',
      description:
        'Регистрируйтесь и начинайте участвовать в хакатонах за считанные минуты. Простой и интуитивный интерфейс.',
    },
    {
      icon: UsersRound,
      title: 'Командная работа',
      description:
        'Находите единомышленников, создавайте команды и работайте вместе над проектами. Общайтесь в реальном времени.',
    },
    {
      icon: Medal,
      title: 'Призы и награды',
      description:
        'Выигрывайте ценные призы, получайте признание и развивайте свои навыки в соревновательной среде.',
    },
  ];

  return (
    <section
      id='about-platform'
      className='container mx-auto px-6 py-20'
      aria-label='Ключевые особенности платформы'
    >
      <h2 className='mb-16 text-center text-4xl font-bold text-sky-500'>
        Почему выбирают нас?
      </h2>
      <div className='grid gap-8 md:grid-cols-3' role='list'>
        {features.map(
          ({ icon: Icon, title, description }: Feature, index: number) => (
            <div
              key={index}
              className='group rounded-2xl border border-sky-600/30 bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-900/20'
              role='listitem'
            >
              <div
                className='mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-sky-700 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600'
                aria-label={`Иконка преимущества: ${title}`}
              >
                <Icon className='h-8 w-8' />
              </div>
              <h3 className='mb-4 text-2xl font-bold text-sky-500 transition-colors duration-300 group-hover:text-sky-400'>
                {title}
              </h3>
              <p className='text-gray-300 transition-colors duration-300 group-hover:text-gray-200'>
                {description}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};
