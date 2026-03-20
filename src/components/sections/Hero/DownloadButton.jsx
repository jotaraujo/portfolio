/**
 * Download CV button with loading states
 */
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { useDownload } from '@/hooks/useDownload';

export function DownloadButton() {
  const { isDownloading, hasDownloaded, handleDownload } = useDownload();

  const leftIcon = hasDownloaded ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  ) : isDownloading ? (
    <Spinner size="sm" />
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      loading={isDownloading}
      leftIcon={!isDownloading && leftIcon}
    >
      {hasDownloaded ? 'Baixado!' : isDownloading ? 'Baixando...' : 'Baixar Currículo'}
    </Button>
  );
}
