import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="">
      {' '}
      {/* шрифт */} <Outlet />
    </div>
  );
};

export default RootLayout;
