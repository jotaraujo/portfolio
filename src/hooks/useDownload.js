/**
 * Hook for handling file download with states
 * @returns {{ isDownloading: boolean, hasDownloaded: boolean, handleDownload: () => void }}
 */
import { useState, useCallback } from 'react';
import curriculoPdf from '@/assets/docs/curriculo.pdf';

export function useDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);

    try {
      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = curriculoPdf;
      link.download = 'curriculo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setHasDownloaded(true);
      setTimeout(() => {
        setHasDownloaded(false);
      }, 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return { isDownloading, hasDownloaded, handleDownload };
}
