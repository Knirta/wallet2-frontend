import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { logout } from '@/features/auth/state/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';
// import { selectUserAvatarUrl } from '@/features/auth/state/selectors.js';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // const userAvatarUrl = useSelector(selectUserAvatarUrl);
  return (
    <header className="relative z-30 flex shrink-0 items-center justify-between bg-white px-5 py-5 lg:px-21">
      <Link to="/dashboard" className="flex items-center justify-center gap-5">
        <Logo className="h-auto w-8 md:w-10" />
        <span className="font-display text-2xl font-bold">Wallet</span>
      </Link>
      <div>
        {/* <img src={userAvatarUrl} alt="User Avatar" /> */}
        <span className="mr-4">{userName}</span>
        <Button variant="primary" onClick={() => dispatch(logout())}>
          Вийти
        </Button>
      </div>
    </header>
  );
};

export default Header;
