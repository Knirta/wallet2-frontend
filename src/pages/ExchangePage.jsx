import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import ExchangeRate from '@/components/ui/ExchangeRate';

const ExchangePage = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    window.matchMedia('(min-width: 768px)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = e => {
      setIsDesktop(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  if (isDesktop) {
    return <Navigate to="/dashboard" replace />;
  }

  return <ExchangeRate />;
};

export default ExchangePage;
