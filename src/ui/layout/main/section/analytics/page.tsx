import React from "react";
import Graph from "@/ui/layout/main/section/analytics/ui/graph";
import Metrics from "@/ui/layout/main/section/analytics/ui/metrics";

const Analytics: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-white">Аналитика</h1>
        <p className="text-slate-400">
          Отслеживайте вашу эффективность и динамику развития проектов.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Graph />
        <Metrics />
      </div>
    </div>
  );
};

export default Analytics;
