import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-bgLight relative container mx-auto flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <div className="lg-px-10 relative z-30 grow px-5 py-2.5 lg:py-5 xl:px-21 xl:py-10">
        <Outlet>{children}</Outlet>
      </div>
      <div className="md:bg-ellipse-pink xl:bg-ellipse-pink-desktop pointer-events-none absolute inset-0 z-20 bg-none bg-top-right bg-no-repeat blur-md md:bg-size-[48%_auto] lg:bg-size-[45%_auto]"></div>
      <div className="md:bg-ellipse-violet pointer-events-none absolute inset-0 z-10 bg-none bg-bottom-left bg-no-repeat blur-md md:bg-size-[63%_auto] lg:bg-size-[58%_auto] xl:bg-size-[38%_auto]"></div>
    </div>
  );
};

export default MainLayout;
