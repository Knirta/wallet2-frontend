import { useEffect } from 'react';
import Loader from '@/components/ui/Loader';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { router } from './router.jsx';
import {
  selectIsAuthLoading,
  selectToken,
  selectUser,
} from '@/features/auth/state/selectors.js';
import { current } from '@/features/auth/state/operations.js';

const App = () => {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (token && !user) {
      dispatch(current());
    }
  }, [dispatch, token, user]);

  return isAuthLoading ? (
    <Loader fullPage={true} />
  ) : (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
