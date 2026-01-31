import { Rocket, UsersRound, Medal } from 'lucide-react';
import FeatureCard from './feature.card';

const Cards = () => {
  const features = [
    {
      icon: <Rocket />,
      title: "Быстрый старт",
      description: "Регистрируйтесь и начинайте участвовать в хакатонах за считанные минуты. Простой и интуитивный интерфейс."
    },
    {
      icon: <UsersRound />,
      title: "Командная работа",
      description: "Находите единомышленников, создавайте команды и работайте вместе над проектами. Общайтесь в реальном времени."
    },
    {
      icon: <Medal />,
      title: "Призы и награды",
      description: "Выигрывайте ценные призы, получайте признание и развивайте свои навыки в соревновательной среде."
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-sky-500">
        Почему выбирают нас?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;