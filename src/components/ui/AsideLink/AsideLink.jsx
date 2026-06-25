import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const AsideLink = ({ hidden = false, to, icon: Icon = null, title = '' }) => {
  return (
    <NavLink
      to={to}
      className={clsx('flex items-center gap-5 md:pl-2', hidden && 'md:hidden')}
    >
      {({ isActive }) => (
        <>
          {Icon && (
            <div
              className={clsx(
                'text-brand-violet overflow-hidden rounded-md transition-all duration-200',
                isActive
                  ? 'shadow-brand-violet/50 opacity-100 shadow-lg'
                  : 'hover:shadow-brand-violet/50 opacity-75 hover:opacity-100 hover:shadow-lg',
              )}
            >
              <Icon />
            </div>
          )}
          <span
            className={clsx(
              'font-display max-md:hidden md:text-lg',
              isActive && 'font-bold',
            )}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default AsideLink;
