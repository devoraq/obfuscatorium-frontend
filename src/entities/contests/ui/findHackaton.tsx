"use client";

import React from "react";
import HackathonCard from "@/ui/layout/hackathonFind/hackathonCard";
import { useAppSelector } from "@/store/hooks";
import { Contest } from "@/entities/contests/model/contestSlice";

const FindHackaton: React.FC = () => {
    const hackatons = useAppSelector((state) => state.contest.events);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {hackatons.map((contest: Contest) => (
                <HackathonCard key={contest.id} contest={contest} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FindHackaton;