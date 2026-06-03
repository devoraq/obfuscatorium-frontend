import React from 'react';

type CategoryButtonProps = {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  icon,
  isActive,
}) => (
  <button
    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap ${
      isActive
        ? 'border-sky-500 bg-sky-500 text-white'
        : 'border-slate-800 bg-slate-900 text-slate-400'
    }`}
  >
    {icon}
    {name}
  </button>
);
