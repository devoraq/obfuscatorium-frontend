import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-sky-600/30 hover:border-sky-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-900/20 ${className}`}>
      <div className="w-16 h-16 bg-sky-700 rounded-xl mb-6 flex items-center justify-center text-3xl group-hover:bg-sky-600 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-sky-500 group-hover:text-sky-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;