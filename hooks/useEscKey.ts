import { useCallback, useEffect } from 'react';

export interface UseEscCloseProps {
  onClose: () => void;
}

export default function useEscClose({ onClose }: UseEscCloseProps) {
  const handleUserKeyPress = useCallback(
    () => {
      
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
}
