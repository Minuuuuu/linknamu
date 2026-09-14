type LinkCardProps = {
  label: string;
  href: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-6 py-4 text-sm font-medium text-stone-700 shadow-[0_4px_20px_-6px_rgba(120,72,36,0.18)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_24px_-6px_rgba(120,72,36,0.25)] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-stone-400 dark:text-stone-400/80">
        {count}회
      </span>
    </a>
  );
}
