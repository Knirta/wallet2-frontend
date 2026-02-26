import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen p-5">
      <Header />
      <Outlet>{children}</Outlet>
    </div>
  );
};

export default MainLayout;
