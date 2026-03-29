"use client";
import React from "react";

interface DangerZoneProps {
  onDelete?: () => void;
  isDeleting?: boolean;
  textInfo: string;
  textButton?: string;
}

const DangerZone: React.FC<DangerZoneProps> = ({ onDelete, isDeleting = false, textInfo, textButton}) => {
  return (
    <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">
          Danger zone
        </h3>
        <p className="text-xs text-slate-500 mt-1">
         {textInfo}
        </p>
      </div>
      <button
        onClick={onDelete}
        disabled={isDeleting}
        className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-950 hover:text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDeleting ? "Удаление..." : textButton || "Удалить"}
      </button>
    </div>
  );
};
export default DangerZone