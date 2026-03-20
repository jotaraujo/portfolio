/**
 * Hero CTA buttons
 */
import { Button } from '@/components/ui/Button';
import { DownloadButton } from './DownloadButton';
import { scrollTo } from '@/utils/scrollTo';

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      <Button
        variant="filled"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('projetos');
        }}
      >
        Ver Projetos
      </Button>

      <Button
        variant="ghost"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('contato');
        }}
      >
        Entrar em Contato
      </Button>

      <DownloadButton />
    </div>
  );
}
