/**
 * Hook for handling file download with states
 * @returns {{ isDownloading: boolean, hasDownloaded: boolean, handleDownload: () => void }}
 */
import { useState, useCallback } from 'react';

export function useDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);

    try {
      // Try to fetch the actual PDF file
      const response = await fetch('/assets/docs/curriculo.pdf');

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback: create a demo blob
        const demoContent = 'Este é um currículo de demonstração.\n\nSubstitua o arquivo em src/assets/docs/curriculo.pdf pelo seu currículo real.';
        const blob = new Blob([demoContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'curriculo-demo.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }

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
