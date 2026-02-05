interface StatItem {
  value: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    { value: "100+", label: "Хакатонов" },
    { value: "5000+", label: "Участников" },
    { value: "200+", label: "Проектов" },
    { value: "50+", label: "Победителей" },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div
        className="grid md:grid-cols-4 gap-8 text-center"
        aria-label="Статистика платформы"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative px-6 py-6 border-2 border-sky-600/50 rounded-2xl 
                    bg-linear-to-br from-gray-900 to-gray-800
                    hover:border-sky-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20
                    transform transition-all duration-1000 ease-out
                    overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-linear-to-r from-sky-600/0 via-sky-600/10 to-sky-600/0 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />

            <div className="relative z-10">
              <div
                className="text-4xl md:text-5xl font-bold mb-3 text-white 
                        group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-sky-400 group-hover:to-sky-200
                        transition-all duration-500"
              >
                {stat.value}
              </div>
              <div className="text-gray-300 group-hover:text-sky-300 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
