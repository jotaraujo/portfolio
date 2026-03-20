/**
 * Site footer with nav, social links and copyright
 */
import { SocialLinks } from './SocialLinks';
import { FooterNav } from './FooterNav';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-2xl font-display font-bold">
            <span className="text-accent">&lt;/</span>
            JotaDev
            <span className="text-accent">/&gt;</span>
          </div>

          {/* Navigation */}
          <FooterNav />

          {/* Social Links */}
          <SocialLinks iconClassName="w-6 h-6" />

          {/* Copyright */}
          <p className="text-muted text-sm text-center">
            © {currentYear} Desenvolvedor Web. Feito com{' '}
            <span className="text-red-500">♥</span> usando React &amp; TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
