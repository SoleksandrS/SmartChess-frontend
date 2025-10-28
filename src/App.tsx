import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import { STORAGE_KEYS } from 'constants/localStorage';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import { GridLoader } from 'react-spinners';
import Router from './routers/Router';

function App() {
  const dispatch: AppDispatch = useDispatch();

  const [appLoading, setAppLoading] = useState(false);

  const makeRequest = useCallback(async () => {
    setAppLoading(true);
    await dispatch(getUserDataThunk());
    setAppLoading(false);
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) void makeRequest();
  }, [makeRequest]);

  return appLoading ? (
    <div style={{ margin: 'auto' }}>
      <GridLoader size={60} color="#4ff7b7ff" />
    </div>
  ) : (
    <Router />
  );
}

export default App;
