"use client";

import React from "react";
import { Sidebar } from "@/ui/layout/nav/sideBar";
import Header from "@/ui/layout/header/header";
import Input from "@/ui/components/forms-elemets/input";
import Select from "@/ui/components/forms-elemets/select";
import Textarea from "@/ui/components/forms-elemets/textarea";
import InfoMessage from "@/ui/components/info-messages/info-message";
import FileUpload from "@/ui/layout/hackathonCreate/fileUpload";
import Timeline from "@/ui/layout/hackathonCreate/timeline";
import {
  Calendar,
  MapPin,
  Save,
  Rocket,
  Link2,
  Plus,
  Trash2,
} from "lucide-react";

const HackathonCreate: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="min-h-screen bg-slate-950 py-6 md:py-12">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 px-3 sm:px-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent px-2">
                    Создать новый хакатон
                  </h1>
                  <p className="text-sm sm:text-base text-slate-400 mt-1">
                    Заполните информацию о вашем мероприятии
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 ">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 font-bold hover:bg-slate-800 active:scale-95 hover:text-white transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <Save size={16} className="sm:w-4.5 sm:h-4.5" />
                    <span>Сохранить</span>
                  </button>
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-sky-600 text-white font-bold hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/20 active:scale-95 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <Rocket size={16} className="sm:w-4.5 sm:h-4.5" />
                    <span>Опубликовать</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <section className="space-y-4 md:space-y-6">
                    <Input
                      id="hackaton-name"
                      label="Название хакатона"
                      type="text"
                      placeholder="Global AI Challenge 2024"
                    />

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <Select
                        label="Тематика"
                        options={[
                          { value: "ai", label: "AI / ML" },
                          { value: "web3", label: "Web3 / Crypto" },
                          { value: "fintech", label: "FinTech" },
                          { value: "social", label: "Social Impact" },
                        ]}
                      />
                      <Input
                        id="prize"
                        label="Призовой фонд"
                        type="number"
                        placeholder="50000"
                      />
                    </div>

                    <div className=" bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-3 sm:space-y-4">
                      <div className="flex justify-between ">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Link2 size={16} className="sm:w-4.5 sm:h-4.5" />
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                            Полезные ссылки
                          </span>
                        </div>
                        <button className="p-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky rounded-lg border border-sky-500/20 transition-all active:scale-95">
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <Input
                          id="link"
                          type="url"
                          placeholder="https://..."
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4 md:space-y-6">
                    <div className="relative group">
                      <FileUpload label="Обложка мероприятия" />
                      <div className="absolute top-10 right-2 active:scale-95">
                        <button className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg border border-red-500/20 transition-all">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <Select
                        label="Формат"
                        options={[
                          { value: "online", label: "online" },
                          { value: "offline", label: "offline" },
                        ]}
                      />
                      <Select
                        label="Команда"
                        options={[
                          { value: "2-3", label: "2-3 чел." },
                          { value: "3-5", label: "3-5 чел." },
                          { value: "solo", label: "Индивидуально" },
                        ]}
                      />
                    </div>
                  </section>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 text-sky-400">
                      <Calendar size={16} className="sm:w-4.5 sm:h-4.5" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        Даты
                      </span>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <Input id="start-date" label="Начало" type="date" />
                      <Input id="end-date" label="Конец" type="date" />
                    </div>
                  </div>

                  <Timeline />

                  <div className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <MapPin size={16} className="sm:w-4.5 sm:h-4.5" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase">
                        Локация
                      </span>
                    </div>
                    <Textarea id="location" placeholder="Адрес площадки..." />
                  </div>
                </section>

                <section className="w-full">
                  <Textarea
                    id="about-hackathon"
                    label="О хакатоне"
                    placeholder="Расскажите о темах, правилах и требованиях..."
                    rows={6}
                  />
                </section>
              </div>

              <InfoMessage
                infoText=" Мероприятие будет отправлено на модерацию. Обычно проверка
                  занимает до 24 часов."
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonCreate;
