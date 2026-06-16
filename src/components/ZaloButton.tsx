import { ZALO } from '@/i18n';

export default function ZaloButton() {
  return (
    <a
      href={ZALO}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat Zalo"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink shadow-soft group-hover:block">
        Chat Zalo
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-soft transition hover:-translate-y-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0068FF] opacity-30" />
        <span className="relative font-display text-sm font-extrabold tracking-tight">Zalo</span>
      </span>
    </a>
  );
}
