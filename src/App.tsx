import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import Router from './routers/Router';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(getUserDataThunk());
  }, [dispatch]);

  return <Router />;
}

export default App;
