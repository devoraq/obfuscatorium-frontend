import { Button } from "@/ui/components/button";
const CTASection = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-sky-600/30">
        <h2 className="text-4xl font-bold mb-6 text-sky-500">
          Готовы начать свой путь?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Присоединяйтесь к сообществу разработчиков и создавайте будущее вместе
          с нами
        </p>
        <Button to="/auth" variant="primary" size="large">
          Зарегистрироваться бесплатно
        </Button>
      </div>
    </section>
  );
};

export default CTASection;