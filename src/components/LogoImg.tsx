import { useState } from 'react';

export default function LogoImg({
  domain,
  alt,
  className = ''
}: {
  domain: string;
  alt: string;
  className?: string;
}) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}`);
  const [step, setStep] = useState(0);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => {
        if (step === 0) {
          setStep(1);
          setSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
        }
      }}
    />
  );
}
