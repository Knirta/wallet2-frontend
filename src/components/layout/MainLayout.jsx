import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header.jsx';
import { getAllCategories } from '@/features/categories/state/operations.js';
import Aside from '@/components/layout/Aside.jsx';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="bg-bgLight relative container mx-auto flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <div className="relative z-30 px-5 py-4 lg:px-10 lg:py-5 xl:grid xl:grid-cols-[minmax(400px,9fr)_16fr] xl:px-21 xl:py-10">
        <Aside />
        <main className="relative pb-7 xl:pl-7.5">
          <Outlet>{children}</Outlet>
        </main>
      </div>
      <div className="md:bg-ellipse-pink xl:bg-ellipse-pink-desktop pointer-events-none absolute inset-0 z-20 bg-none bg-top-right bg-no-repeat blur-md md:bg-size-[48%_auto] lg:bg-size-[45%_auto]"></div>
      <div className="md:bg-ellipse-violet pointer-events-none absolute inset-0 z-10 bg-none bg-bottom-left bg-no-repeat blur-md md:bg-size-[63%_auto] lg:bg-size-[58%_auto] xl:bg-size-[38%_auto]"></div>
    </div>
  );
};

export default MainLayout;
