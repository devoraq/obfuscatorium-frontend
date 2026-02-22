"use client";

import React from "react";
import Input from "@/ui/components/input";
import Select from "@/ui/components/select";
import Textarea from "@/ui/layout/main/hackathonCreate/ui/textarea";
import FileUpload from "@/ui/layout/main/hackathonCreate/ui/fileUpload";
import { Info } from "lucide-react";


const HackathonCreate: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  bg-linear-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Создать новый хакатон
          </h1>
          <p className="text-slate-400 text-lg">
            Заполните информацию о вашем мероприятии, чтобы привлечь участников
          </p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 space-y-8">
          <section className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b border-slate-800 pb-2 text-white">
              <span className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center text-xs text-white">
                1
              </span>
              Основная информация
            </h3>

            <div className="grid grid-cols-1 gap-6">
              <Input
                id="hackaton-name"
                label="Название хакатона"
                type="text"
                placeholder="Напр: Global AI Challenge 2024"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="hackaton-prize"
                  label="Призовой фонд ($)"
                  type="number"
                  placeholder="50000"
                />

                <Select
                  label="Макс. участников в команде"
                  options={[
                    { value: "3", label: "3" },
                    { value: "4", label: "4" },
                    { value: "5", label: "5" },
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2 border-b border-slate-800 pb-2 text-white">
              <span className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center text-xs text-white">
                2
              </span>
              Визуал и Описание
            </h3>

            <div className="space-y-6">
              <FileUpload label="Обложка мероприятия" />

              <Textarea
                id="about-hackathon"
                label="О хакатоне"
                placeholder="Расскажите о темах, правилах и требованиях..."
                rows={6}
              />
            </div>
          </section>

          <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 flex gap-3">
            <Info className="text-sky-400 shrink-0" size={20} />
            <p className="text-xs text-sky-200 leading-relaxed">
              Мероприятие будет отправлено на модерацию. Обычно проверка
              занимает до 24 часов. Вы получите уведомление о статусе
              публикации.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-sky-600/20 active:scale-[0.98]">
              Опубликовать хакатон
            </button>
            <button
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold  rounded-2xl transition-all">
              Предпросмотр
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCreate;
