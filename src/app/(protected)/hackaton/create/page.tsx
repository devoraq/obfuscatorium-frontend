'use client';

import React from 'react';
import {
  Calendar,
  Link2,
  MapPin,
  Plus,
  Rocket,
  Save,
  Trash2,
} from 'lucide-react';

import {
  Contest,
  createContestThunk,
} from '@/entities/contests/model/postContestThunk';

import { useAppDispatch } from '@/store/hooks';

import { Header } from '@/ui/components/header';
import { InfoMessage } from '@/ui/components/info-message';
import { Input } from '@/ui/components/input';
import { Select } from '@/ui/components/select';
import { Textarea } from '@/ui/components/textarea';
import { FileUpload } from '@/ui/layout/hackathonCreate/fileUpload';
import { Timeline } from '@/ui/layout/hackathonCreate/timeline';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const HackathonCreate: React.FC = () => {
  const dispatch = useAppDispatch();
  const data: Contest = {
    name: '',
    description: '',
    type: '',
    startDate: '',
    endDate: '',
    registrationStart: '',
    registrationEnd: '',
    maxParticipants: 0,
    maxTeams: 0,
    minTeamSize: 0,
    maxTeamSize: 0,
  };
  return (
    <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
      <Sidebar />
      <div className='relative flex flex-1 flex-col overflow-hidden'>
        <Header />
        <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
          <div className='min-h-screen bg-slate-950 py-6 md:py-12'>
            <div className='mx-auto max-w-4xl space-y-6 px-3 sm:px-4 md:space-y-8'>
              <div className='flex flex-col justify-between gap-4 md:flex-row md:items-end'>
                <div className='text-center md:text-left'>
                  <h1 className='mb-2 bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text px-2 text-2xl font-bold text-transparent sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl'>
                    Создать новый хакатон
                  </h1>
                  <p className='mt-1 text-sm text-slate-400 sm:text-base'>
                    Заполните информацию о вашем мероприятии
                  </p>
                </div>

                <div className='flex items-center justify-center gap-2 sm:gap-3 md:justify-end'>
                  <button className='flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300 transition-all hover:bg-slate-800 hover:text-white active:scale-95 sm:gap-2 sm:rounded-2xl sm:px-6 sm:py-3 sm:text-base'>
                    <Save size={16} className='sm:h-4.5 sm:w-4.5' />
                    <span>Сохранить</span>
                  </button>
                  <button
                    onClick={() => dispatch(createContestThunk(data))}
                    className='flex items-center gap-1 rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-500 active:scale-95 sm:gap-2 sm:rounded-2xl sm:px-6 sm:py-3 sm:text-base'
                  >
                    <Rocket size={16} className='sm:h-4.5 sm:w-4.5' />
                    <span>Опубликовать</span>
                  </button>
                </div>
              </div>

              <div className='space-y-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:space-y-8 md:p-8'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
                  <section className='space-y-4 md:space-y-6'>
                    <Input
                      id='hackaton-name'
                      label='Название хакатона'
                      type='text'
                      placeholder='Global AI Challenge 2024'
                    />

                    <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                      <Select
                        label='Тематика'
                        options={[
                          { value: 'ai', label: 'AI / ML' },
                          { value: 'web3', label: 'Web3 / Crypto' },
                          { value: 'fintech', label: 'FinTech' },
                          { value: 'social', label: 'Social Impact' },
                        ]}
                      />
                      <Input
                        id='prize'
                        label='Призовой фонд'
                        type='number'
                        placeholder='50000'
                      />
                    </div>

                    <div className='space-y-3 rounded-xl border border-slate-800 bg-slate-900/50 p-3 sm:space-y-4 sm:rounded-2xl sm:p-4'>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-2 text-blue-400'>
                          <Link2 size={16} className='sm:h-4.5 sm:w-4.5' />
                          <span className='text-[10px] font-bold tracking-wider uppercase sm:text-xs'>
                            Полезные ссылки
                          </span>
                        </div>
                        <button className='text-sky rounded-lg border border-sky-500/20 bg-sky-500/10 p-2 transition-all hover:bg-sky-500/20 active:scale-95'>
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className='space-y-2 sm:space-y-3'>
                        <Input
                          id='link'
                          type='url'
                          placeholder='https://...'
                          className='text-sm'
                        />
                      </div>
                    </div>
                  </section>

                  <section className='space-y-4 md:space-y-6'>
                    <div className='group relative'>
                      <FileUpload label='Обложка мероприятия' />
                      <div className='absolute top-10 right-2 active:scale-95'>
                        <button className='rounded-lg border border-red-500/20 bg-red-500/10 p-2 text-red-400 transition-all hover:bg-red-500/20'>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                      <Select
                        label='Формат'
                        options={[
                          { value: 'online', label: 'online' },
                          { value: 'offline', label: 'offline' },
                        ]}
                      />
                      <Select
                        label='Команда'
                        options={[
                          { value: '2-3', label: '2-3 чел.' },
                          { value: '3-5', label: '3-5 чел.' },
                          { value: 'solo', label: 'Индивидуально' },
                        ]}
                      />
                    </div>
                  </section>
                </div>

                <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
                  <div className='space-y-3 rounded-xl border border-slate-800 bg-slate-900/50 p-3 sm:space-y-4 sm:rounded-2xl sm:p-4'>
                    <div className='flex items-center gap-2 text-sky-400'>
                      <Calendar size={16} className='sm:h-4.5 sm:w-4.5' />
                      <span className='text-[10px] font-bold tracking-wider uppercase sm:text-xs'>
                        Даты
                      </span>
                    </div>
                    <div className='space-y-2 sm:space-y-3'>
                      <Input id='start-date' label='Начало' type='date' />
                      <Input id='end-date' label='Конец' type='date' />
                    </div>
                  </div>

                  <Timeline />

                  <div className='space-y-3 rounded-xl border border-slate-800 bg-slate-900/50 p-3 sm:space-y-4 sm:rounded-2xl sm:p-4'>
                    <div className='flex items-center gap-2 text-emerald-400'>
                      <MapPin size={16} className='sm:h-4.5 sm:w-4.5' />
                      <span className='text-[10px] font-bold uppercase sm:text-xs'>
                        Локация
                      </span>
                    </div>
                    <Textarea id='location' placeholder='Адрес площадки...' />
                  </div>
                </section>

                <section className='w-full'>
                  <Textarea
                    id='about-hackathon'
                    label='О хакатоне'
                    placeholder='Расскажите о темах, правилах и требованиях...'
                    rows={6}
                  />
                </section>
              </div>

              <InfoMessage
                infoText=' Мероприятие будет отправлено на модерацию. Обычно проверка
                  занимает до 24 часов.'
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonCreate;
