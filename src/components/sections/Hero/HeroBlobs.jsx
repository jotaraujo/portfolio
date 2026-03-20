/**
 * Animated background blobs
 */
import { cn } from '@/utils/cn';

export function HeroBlobs() {
  return (
    <>
      <div
        className={cn(
          'absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl',
          'animate-blob'
        )}
      />
      <div
        className={cn(
          'absolute top-20 right-10 w-72 h-72 bg-accent-soft/20 rounded-full mix-blend-multiply filter blur-xl',
          'animate-blob',
          'animation-delay-2000'
        )}
      />
      <div
        className={cn(
          'absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl',
          'animate-blob',
          'animation-delay-4000'
        )}
      />
    </>
  );
}
