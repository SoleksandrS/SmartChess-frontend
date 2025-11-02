import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { MainSocketService } from 'socket/main.socket.service';
import { socketService } from 'socket/socket';
import { STORAGE_KEYS } from 'constants/localStorage';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import { GridLoader } from 'react-spinners';
import Router from './routers/Router';

function App() {
  const userData = useSelector((state: TState) => state.auth.data);
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

  useEffect(() => {
    if (!userData?.id) return;

    socketService.connect();
    const mainSocketService = new MainSocketService(socketService.getSocket());
    mainSocketService.initConnection(userData.id, dispatch);

    return () => {
      mainSocketService.disconnect();
    };
  }, [dispatch, userData]);

  return appLoading ? (
    <div style={{ margin: 'auto' }}>
      <GridLoader size={60} color="#4ff7b7ff" />
    </div>
  ) : (
    <Router />
  );
}

export default App;
