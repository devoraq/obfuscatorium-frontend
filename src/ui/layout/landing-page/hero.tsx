import { Button } from "@/ui/components/button";

const HeroSection = (): React.ReactElement => {
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
        <Button to="/" variant="primary" size="large">
          Начать сейчас
        </Button>
        <Button to="/" variant="secondary" size="large">
          Узнать больше
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
