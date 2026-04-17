import Button from '@/components/ui/Button';
import { logout } from '@/features/auth/state/operations.js';
import { useDispatch } from 'react-redux'; //, useSelector
// import { selectUserAvatarUrl } from '@/features/auth/state/selectors.js';

const Header = () => {
  const dispatch = useDispatch();
  // const userAvatarUrl = useSelector(selectUserAvatarUrl);
  return (
    <div>
      <p>header</p>
      {/* <img src={userAvatarUrl} alt="User Avatar" /> */}
      <Button variant="primary" onClick={() => dispatch(logout())}>
        Вийти
      </Button>
    </div>
  );
};

export default Header;
