import React from "react";
import { MoreVertical, User, Mail, Github } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  email?: string;
  github?: string;
}

const MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Александр Воронин",
    role: "Team Lead / Fullstack",
    skills: ["React", "Node.js", "Go"],
    email: "ivan@example.com",
    github: "@ivanov",
  },
  {
    id: "2",
    name: "Мария Ким",
    role: "UI/UX Designer",
    skills: ["Figma", "Spline", "React"],
    email: "maria@example.com",
  },
  {
    id: "3",
    name: "Иван Смирнов",
    role: "Backend Dev (Go)",
    skills: ["Go", "Postgres", "Redis"],
    github: "@alex",
  },
  {
    id: "4",
    name: "Елена Петрова",
    role: "DevOps / Infra",
    skills: ["Docker", "K8s", "AWS"],
    email: "elena@example.com",
  },
];

const MemberTeam: React.FC = () => {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        Участники команды
        <span className="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs rounded-full font-mono">
          {MEMBERS.length}
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-slate-900/50 border border-slate-800 p-5 rounded-3xl group hover:border-sky-500/30 transition-all hover:bg-slate-900/80"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-sky-500/20 to-purple-500/20 border-2 border-slate-800 group-hover:border-sky-500/50 transition-colors flex items-center justify-center">
                    <User className="w-7 h-7 text-sky-400" />
                  </div>
                </div>

                <div className=" min-w-0 " >
                  <h4 className="flex  font-bold text-white truncate text-wrap">
                    {member.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    {member.email && (
                      <Mail size={12} className="text-slate-600" />
                    )}
                    {member.github && (
                      <Github size={12} className="text-slate-600" />
                    )}
                  </div>
                </div>
              </div>

              <button className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 transition-all">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-slate-800/50 border border-slate-700/50 text-[10px] text-slate-400 rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberTeam;
