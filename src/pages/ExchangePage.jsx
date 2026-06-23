import { Navigate } from 'react-router-dom';
import { useIsNotMobile } from '@/hooks/useIsNotMobile.js';
import ExchangeRate from '@/components/ui/ExchangeRate';

const ExchangePage = () => {
  const isNotMobile = useIsNotMobile();
  console.log(isNotMobile);

  if (isNotMobile) {
    return <Navigate to="/dashboard" replace />;
  }

  return <ExchangeRate />;
};

export default ExchangePage;
