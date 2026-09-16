"use client";

import { useState } from "react";
import { papers } from "@/data/papers";

export default function AiStudySection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-6 py-4 text-sm font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(120,72,36,0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_24px_-6px_rgba(120,72,36,0.25)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
      >
        <span>🧠 AI 공부</span>
        <span className="flex items-center gap-1.5 text-xs font-normal text-stone-400 dark:text-stone-400/80">
          {papers.length}편
          <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
            ▾
          </span>
        </span>
      </button>

      {open && (
        <ol className="flex flex-col gap-2 pl-1">
          {papers.map((paper) => (
            <li key={paper.day}>
              <a
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/25 px-4 py-3 text-xs text-stone-600 backdrop-blur-sm transition-all duration-150 hover:bg-white/50 dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:bg-white/10"
              >
                <span className="shrink-0 rounded-full bg-orange-200/60 px-2 py-0.5 font-mono text-[11px] font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-200">
                  Day {paper.day}
                </span>
                <span className="flex-1 truncate font-medium">{paper.title}</span>
                <span className="shrink-0 text-[10px] text-stone-400 dark:text-stone-400/80">
                  {paper.conference}
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
