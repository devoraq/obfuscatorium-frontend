'use client';

import React from 'react';

import { Header } from '@/ui/components/header';
import { Select } from '@/ui/components/select';
import { Sidebar } from '@/ui/layout/nav/sideBar';
import { CardStats } from '@/ui/layout/stats/cardStats';
import { HackathonResults } from '@/ui/layout/stats/hackathonrResults';
import { RatingChart } from '@/ui/layout/stats/ratingChart';

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

const Stats: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='animate-fadeIn space-y-8 p-8 pb-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
            <div>
              <h1 className='mb-2 text-3xl font-bold'>Статистика</h1>
              <p className='text-slate-400'>
                Ваша производительность за последние 6 месяцев
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <Select
                options={[
                  { value: '6months', label: 'За полгода' },
                  { value: 'year', label: 'За год' },
                  { value: 'all', label: 'Все время' },
                ]}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 xl:grid-cols-2'>
            {/* График рейтинга */}
            <RatingChart />

            {/* График побед и поражений */}
            <HackathonResults />
          </div>

          {/* Карточки статистики */}
          <CardStats />
        </div>
      </main>
    </div>
  </div>
);

export default Stats;
