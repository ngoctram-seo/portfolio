import { useEffect, useRef } from 'react';

export default function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>('[data-ch]'));
    if (reduced) {
      spans.forEach((s) => (s.style.opacity = '1'));
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top at 80% viewport, 1 when bottom at 20% viewport
      const start = vh * 0.85;
      const end = vh * 0.25;
      const p = Math.min(Math.max((start - r.top) / (start - end + r.height), 0), 1);
      const n = spans.length;
      spans.forEach((s, i) => {
        const cp = Math.min(Math.max(p * n - i, 0), 1);
        s.style.opacity = String(0.18 + 0.82 * cp);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [text]);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} data-ch aria-hidden="true" style={{ opacity: 0.18, transition: 'opacity 0.1s linear' }}>
          {ch}
        </span>
      ))}
    </p>
  );
}
