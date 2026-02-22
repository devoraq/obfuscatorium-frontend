import React from "react";

type CategoryButtonProps = {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  icon,
  isActive,
}) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border flex items-center gap-2 ${
      isActive
        ? "bg-sky-500 border-sky-500 text-white"
        : "bg-slate-900 border-slate-800 text-slate-400"
    }`}
  >
    {icon}
    {name}
  </button>
);
export default CategoryButton;
