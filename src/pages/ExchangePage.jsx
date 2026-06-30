import { Navigate } from 'react-router-dom';
import { useIsNotMobile } from '@/hooks/useIsNotMobile.js';
import ExchangeRate from '@/features/currency/components/ExchangeRate';

const ExchangePage = () => {
  const isNotMobile = useIsNotMobile();

  if (isNotMobile) {
    return <Navigate to="/dashboard" replace />;
  }

  return <ExchangeRate />;
};

export default ExchangePage;
