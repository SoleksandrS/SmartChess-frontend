import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { STORAGE_KEYS } from 'constants/localStorage';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import { GridLoader } from 'react-spinners';
import Router from './routers/Router';

function App() {
  const appLoading = useSelector((state: TState) => state.auth.appLoading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) void dispatch(getUserDataThunk());
  }, [dispatch]);

  return appLoading ? (
    <div style={{ margin: 'auto' }}>
      <GridLoader size={60} color="#4ff7b7ff" />
    </div>
  ) : (
    <Router />
  );
}

export default App;
