import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import { STORAGE_KEYS } from 'constants/localStorage';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import Router from './routers/Router';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) void dispatch(getUserDataThunk());
  }, [dispatch]);

  return <Router />;
}

export default App;
