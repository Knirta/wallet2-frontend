import { Link } from 'react-router-dom';

const AuthLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-blue hover:bg-blue mt-5 block w-full max-w-md min-w-70 rounded-[20px] bg-white p-3 text-center tracking-widest uppercase outline transition-colors duration-300 hover:text-white"
    >
      {children}
    </Link>
  );
};

export default AuthLink;
