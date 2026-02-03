import StatCard from "./stat.card";

interface StatItem {
  value: string;
  label: string;
}

const Stats = (): React.ReactElement => {
  const stats: StatItem[] = [
    { value: "100+", label: "Хакатонов" },
    { value: "5000+", label: "Участников" },
    { value: "200+", label: "Проектов" },
    { value: "50+", label: "Победителей" },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat: StatItem, index: number) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
