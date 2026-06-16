import { ArrowRight, Download, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary navigation"
        className="liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2"
      >
        <a href="#hero" className="flex items-center gap-3" aria-label="Joyce Le portfolio home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-xs font-bold tracking-tight text-white">
            JL
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-charcoal sm:inline">Joyce Le</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-charcoal/70 transition hover:text-charcoal">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="secondary" size="sm" className="gap-2">
            <a href={`${import.meta.env.BASE_URL}cv/Joyce_Le_CV_EN.pdf`} aria-label="Download Joyce Le English CV">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button asChild size="sm" className="group gap-2 pr-2">
            <a href="#contact" aria-label="Contact Joyce Le">
              Contact
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-charcoal transition duration-300 group-hover:-rotate-45">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" size="icon" className="md:hidden" aria-label="Open mobile menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mb-8 pr-10">
              <p className="text-xs uppercase tracking-[0.3em] text-teal">SEO & GEO Specialist</p>
              <p className="mt-2 text-sm text-charcoal/60">Ho Chi Minh City · Open to SEO, GEO, and organic growth roles.</p>
            </div>
            <div className="grid gap-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-3xl font-semibold tracking-[-0.04em] text-charcoal" aria-label={`Go to ${link.label}`}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              <Button asChild className="justify-between pr-2">
                <a href={`${import.meta.env.BASE_URL}cv/Joyce_Le_CV_EN.pdf`} aria-label="Download English CV">
                  Download CV
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-charcoal">
                    <Download className="h-4 w-4" />
                  </span>
                </a>
              </Button>
              <Button asChild variant="secondary" className="justify-between pr-2">
                <a href="#contact" aria-label="Contact Joyce Le">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
