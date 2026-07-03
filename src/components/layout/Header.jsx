import { Link } from 'react-router-dom';
import { LogoutIcon } from '@/components/icons';
import Logo from '@/components/ui/Logo';
import { logout } from '@/features/auth/state/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserName,
  selectUserAvatarURL,
} from '@/features/auth/state/selectors.js';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userAvatarURL = useSelector(selectUserAvatarURL);
  return (
    <header className="relative z-30 flex shrink-0 items-center justify-between bg-white px-5 py-5 lg:px-21">
      <Link to="/dashboard" className="flex items-center justify-center gap-5">
        <Logo className="h-auto w-8 md:w-10" />
        <span className="font-display text-2xl font-bold">Wallet</span>
      </Link>
      <div className="text-brand-gray flex items-center text-lg">
        <img src={userAvatarURL} alt="User Avatar" className="mr-3.5 h-7 w-7" />
        <p className="md:border-r md:pr-3.5">{userName}</p>
        <p
          className="flex cursor-pointer items-center pl-3.5"
          onClick={() => dispatch(logout())}
        >
          <LogoutIcon />
          <span className="pl-3 max-md:hidden">Вийти</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
