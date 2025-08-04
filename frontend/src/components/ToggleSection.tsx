// ToggleSection.tsx
import { useState } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface ToggleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ToggleSection({ title, children }: ToggleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto my-1 border rounded-2xl shadow transition-colors duration-300 bg-white dark:bg-secondary dark:border-zinc-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left font-semibold text-lg dark:text-black"
      >
        {title}
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </button>

      {isOpen && (
        <div className="p-4 pt-0 text-zinc-700 dark:text-zinc-300 transition-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
}
