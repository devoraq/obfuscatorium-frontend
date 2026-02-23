import React from "react";
import {
  Calendar,
  Globe,
  Cpu,
  Landmark,
  Shield,
  Gamepad2,
  Sparkles,
  Users,
  Trophy,
  Tag,
} from "lucide-react";

interface Hackathon {
  id: string;
  title: string;
  prize: string;
  date: string;
  tags: string[];
  category: string;
  status: "open" | "upcoming" | "closed";
  participants: number;
}

interface CategoryIcons {
  [key: string]: React.ReactNode;
}

const HackathonCard: React.FC = () => {
  const hackathons: Hackathon[] = [
    {
      id: "1",
      title: "Web3 Global Summit",
      prize: "$50,000",
      date: "25-27 Окт",
      tags: ["Blockchain", "EVM"],
      category: "Web3",
      status: "open",
      participants: 234,
    },
    {
      id: "2",
      title: "AI for Humanity",
      prize: "$100,000",
      date: "12-15 Ноя",
      tags: ["AI", "LLM", "Python"],
      category: "AI",
      status: "open",
      participants: 567,
    },
    {
      id: "3",
      title: "Fintech Revolution",
      prize: "$25,000",
      date: "01-03 Дек",
      tags: ["Finance", "Security"],
      category: "Fintech",
      status: "upcoming",
      participants: 89,
    },
    {
      id: "4",
      title: "Green Code Challenge",
      prize: "$15,000",
      date: "15-17 Дек",
      tags: ["Sustainability", "IoT"],
      category: "Other",
      status: "upcoming",
      participants: 45,
    },
    {
      id: "5",
      title: "GameJam 2024",
      prize: "$10,000",
      date: "20-22 Янв",
      tags: ["Unity", "C#", "3D"],
      category: "GameDev",
      status: "upcoming",
      participants: 178,
    },
    {
      id: "6",
      title: "Cyber Security Hack",
      prize: "$40,000",
      date: "05-07 Фев",
      tags: ["Security", "Linux"],
      category: "Security",
      status: "open",
      participants: 312,
    },
  ];

  const CATEGORY_ICONS: CategoryIcons = {
    Web3: <Sparkles className="w-5 h-5 text-white" />,
    AI: <Cpu className="w-5 h-5 text-white" />,
    Fintech: <Landmark className="w-5 h-5 text-white" />,
    Security: <Shield className="w-5 h-5 text-white" />,
    GameDev: <Gamepad2 className="w-5 h-5 text-white" />,
    Other: <Globe className="w-5 h-5 text-white" />,
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {hackathons.map((hack: Hackathon) => {
            const isOpen = hack.status === "open";
            const statusLabel = isOpen ? "Открыт" : "Скоро";
            const statusDotColor = isOpen ? "bg-green-500" : "bg-amber-500";

            return (
              <div
                key={hack.id}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 
                           rounded-2xl overflow-hidden hover:border-sky-500/50 
                           transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-24 bg-linear-to-br from-slate-800 to-slate-900 
                              flex items-center justify-between p-4 
                              group-hover:from-sky-900/30 group-hover:to-purple-900/30 
                              transition-all duration-300 relative overflow-hidden"
                >
                  <div
                    className="p-2 bg-black/40 rounded-lg backdrop-blur-sm group-hover:scale-110 
                                transition-all duration-300"
                  >
                    {CATEGORY_ICONS[hack.category] || (
                      <Globe className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-1.5 px-2 py-1 
                                  bg-black/40 backdrop-blur-sm rounded-lg"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${statusDotColor}`}
                      />
                      <span className="text-xs font-medium text-white">
                        {statusLabel}
                      </span>
                    </div>

                    {hack.participants && (
                      <div
                        className="flex items-center gap-1.5 px-2 py-1 
                                    bg-black/40 backdrop-blur-sm rounded-lg"
                      >
                        <Users size={12} className="text-slate-400" />
                        <span className="text-xs text-slate-300">
                          {hack.participants}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {hack.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-800/80 text-slate-300 
                                 text-[10px] font-medium rounded-md 
                                 flex items-center gap-1
                                 border border-slate-700/50
                                 group-hover:border-sky-500/30 
                                 transition-all duration-300"
                      >
                        <Tag size={8} className="text-slate-500" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 
                               group-hover:text-sky-400 transition-colors duration-300
                               line-clamp-2"
                  >
                    {hack.title}
                  </h3>

                  <div
                    className="flex items-center justify-between mb-6 
                                text-sm bg-slate-800/30 rounded-xl p-3
                                border border-slate-700/50"
                  >
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={14} className="text-sky-400" />
                      <span>{hack.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-400 font-semibold">
                      <Trophy size={14} />
                      <span>{hack.prize}</span>
                    </div>
                  </div>

                  <button
                    className="w-full py-3 bg-slate-800 hover:bg-sky-600 
                                   text-white text-sm font-semibold rounded-xl 
                                   transition-all duration-300 
                                   hover:shadow-lg hover:shadow-sky-600/20
                                   flex items-center justify-center gap-2
                                   border border-slate-700 hover:border-sky-400 "
                  >
                    Подробнее
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
