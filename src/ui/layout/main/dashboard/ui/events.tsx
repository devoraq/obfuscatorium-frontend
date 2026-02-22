import React from "react";
import { Calendar , UsersRound } from "lucide-react";


interface Event {
  id: string;
  title: string;
  month: string;
  day: number;
  location: string;
  prize?: string;
  status?: "upcoming" | "ongoing" | "finished";
  participantsCount?: number;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: "evt_001",
      title: "Codenrock",
      month: "Окт",
      day: 15,
      location: "Online",
      prize: "$5,000",
      status: "upcoming",
      participantsCount: 234,
    },
    {
      id: "evt_002",
      title: "AI и ML",
      month: "Окт",
      day: 22,
      location: "Москва",
      status: "upcoming",
      participantsCount: 156,
    },
    {
      id: "evt_003",
      title: "Кибербезопасность",
      month: "Ноя",
      day: 5,
      location: "Online",
      status: "ongoing",
      participantsCount: 189,
    },
  ];
  return (
    <div className="xl:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-indigo-400" />
          <h2 className="text-lg font-bold text-white">Предстоящие События</h2>
        </div>
        <button className="text-sky-400 text-xs font-bold hover:underline uppercase tracking-wider">
          Все хакатоны
        </button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800/40 rounded-2xl hover:bg-slate-800/40 hover:border-slate-700/60 transition-all group">
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex flex-col items-center justify-center shrink-0">
              <span className="text-[10px] uppercase font-black text-indigo-400 leading-none">
                {event.month}
              </span>
              <span className="text-lg font-black text-slate-200">
                {event.day}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-sky-400 transition-colors truncate">
                {event.title}
              </h3>
              <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5 flex-wrap">
                <span className="flex items-center gap-1">
                  {event.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                {typeof event.prize === "string" && event.prize.length > 0 ? (
                  <div>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="text-emerald-400 font-semibold">
                      Приз: {event.prize}
                    </span>
                  </div>) : null}
                {event.participantsCount && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="flex gap-2 text-slate-400">
                      <UsersRound size={15} className="text-indigo-400"/> {event.participantsCount}
                    </span>
                  </>
                )}
              </div>
            </div>

            <button
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-sky-600/10 active:scale-95"
              data-event-id={event.id}
              data-action="participate"
            >
              {event.status === "ongoing" ? "Присоединиться" : "Участвовать"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
