import { Outlet } from 'react-router-dom';

const AuthLayout = ({ children }) => {
  return (
    <div className="relative container mx-auto grid min-h-screen grid-cols-1 overflow-hidden max-md:bg-none md:max-lg:max-w-full xl:grid-cols-[7fr_9fr]">
      <Outlet>{children}</Outlet>
    </div>
  );
};

export default AuthLayout;
