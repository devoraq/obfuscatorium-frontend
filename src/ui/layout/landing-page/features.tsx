import { Rocket, UsersRound, Medal, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Rocket,
      title: "Быстрый старт",
      description:
        "Регистрируйтесь и начинайте участвовать в хакатонах за считанные минуты. Простой и интуитивный интерфейс.",
    },
    {
      icon: UsersRound,
      title: "Командная работа",
      description:
        "Находите единомышленников, создавайте команды и работайте вместе над проектами. Общайтесь в реальном времени.",
    },
    {
      icon: Medal,
      title: "Призы и награды",
      description:
        "Выигрывайте ценные призы, получайте признание и развивайте свои навыки в соревновательной среде.",
    },
  ];

  return (
    <section
      className="container mx-auto px-6 py-20"
      aria-label="Ключевые особенности платформы"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-sky-500">
        Почему выбирают нас?
      </h2>
      <div className="grid md:grid-cols-3 gap-8" role="list">
        {features.map(
          ({ icon: Icon, title, description }: Feature, index: number) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-sky-600/30 hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-900/20"
              role="listitem"
            >
              <div
                className="w-16 h-16 bg-sky-700 rounded-xl mb-6 flex items-center justify-center text-3xl group-hover:bg-sky-600 group-hover:scale-110 transition-all duration-300"
                aria-label={`Иконка преимущества: ${title}`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-sky-500 group-hover:text-sky-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
