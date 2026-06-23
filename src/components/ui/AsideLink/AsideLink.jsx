import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const AsideLink = ({ hidden = false, to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'text-brand-violet transition-all duration-200',
          hidden && 'md:hidden',
          isActive ? 'opacity-100' : 'opacity-75 hover:opacity-100',
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default AsideLink;
