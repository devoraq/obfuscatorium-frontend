import React from "react";

import RatingChart from "@/ui/layout/main/stats/ui/ratingChart";
import HackathonrResults from "@/ui/layout/main/stats/ui/hackathonrResults";
import CardStats from "@/ui/layout/main/stats/ui/cardStats";
import Select from "@/ui/components/select";
/**
 * @file ratingChart.tsx
 * @module ui/main/section/stats/ui/ratingChart.tsx
 * @description  React компонент, отображающий динамику рейтинга пользователя за несколько месяцев в виде линейной области графика.
 * Использует библиотеку recharts
 *
 * Внутренние данные (data) содержат информацию за  месяц:
 * - `name`: название месяца (строка)
 * - `projects`: количество выполненных проектов (число)
 * - `commits`: число коммитов (число)
 * - `score`: показатель активности или итоговый рейтинг (число)
 *
 * В будущем можно расширить функциональность, добавив отображение других метрик или динамическое обновление данных, или полностью убрать компонент.
 */

/**
 * @file hackathonResults.tsx
 * @module ui/main/section/stats/ui/hackathonResults
 * @description React компонент, отображающий результаты хакатонов по месяцам в виде двухнаборной столбчатой диаграммы.
 * Использует библиотеку recharts
 *
 * Внутренние данные (data) содержат информацию за  месяц:
 * - `name` (строка): название месяца.
 * - `wins` (число): количество побед за месяц.
 * - `losses` (число): количество поражений за месяц.
 *
 * Можно расширить или динамически обновлять данные для отображения результатов или совсем убрать компонент
 */

const Stats: React.FC = () => {
  return (
    <div className=" pb-10 p-8 space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Статистика</h1>
          <p className="text-slate-400">
            Ваша производительность за последние 6 месяцев
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Select
            options={[
              { value: "6months", label: "За полгода" },
              { value: "year", label: "За год" },
              { value: "all", label: "Все время" },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* График рейтинга */}
        <RatingChart />

        {/* График побед и поражений */}
        <HackathonrResults />
      </div>

      {/* Карточки статистики */}
      <CardStats />
    </div>
  );
};

export default Stats;
