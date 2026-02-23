"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import { UsersRound } from "lucide-react";

const Events: React.FC = () => {
    const events = useAppSelector((state) => state.contest.events);

    if (!events || events.length === 0) {
        return (
        <div className="text-sm text-slate-500">
            Нет доступных событий
        </div>
        );
    }

    const renderedEvents = events.map((event) => {
        const hasPrize = typeof event.prize === "string" && event.prize.trim().length > 0;

        const hasParticipants = Boolean(event.participantsCount);

        const buttonText = event.status === "ongoing" ? "Присоединиться" : "Участвовать";
        const prizeBlock = hasPrize ? (
            <>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-emerald-400 font-semibold">
                Приз: {event.prize}
                </span>
            </>
        ) : null;

        const participantsBlock = hasParticipants ? (
            <>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="flex items-center gap-1 text-slate-400">
                <UsersRound size={15} className="text-indigo-400" />
                {event.participantsCount}
                </span>
            </>
        ) : null;

        return (
            <div key={event.id} className="flex items-center gap-4 p-4 bg-slate-800/20 border border-slate-800/40 rounded-2xl hover:bg-slate-800/40 hover:border-slate-700/60 transition-all group">

                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] uppercase font-black text-indigo-400 leading-none">{event.month}</span>
                <span className="text-lg font-black text-slate-200">{event.day}</span>
                </div>

                <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-sky-400 transition-colors truncate">{event.title}</h3>

                <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5 flex-wrap">
                    <span>{event.location}</span>
                    {prizeBlock}
                    {participantsBlock}
                </div>
                </div>

                <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-sky-600/10 active:scale-95" data-event-id={event.id} data-action="participate">
                {buttonText}
                </button>
            </div>
        );
    });

    return <div className="flex flex-col gap-4">{renderedEvents}</div>;
};

export default Events;