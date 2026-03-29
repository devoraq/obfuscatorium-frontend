import React from "react";
import { Info } from "lucide-react";

interface InfoMessageProps {
  infoText: string;
}

const InfoMessage: React.FC<InfoMessageProps> = ({ infoText }) => {
  return (
    <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3">
      <Info className="text-sky-400 shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={20} />
      <p className="text-xs text-sky-200 leading-relaxed">{infoText}</p>
    </div>
  );
};

export default InfoMessage;
