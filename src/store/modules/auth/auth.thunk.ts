import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import type { ICurrentUser } from 'models';
import { STORAGE_KEYS } from 'constants/localStorage';
import { setLoading, setUserData } from './auth.actions';

interface ISignInBody {
  email: string;
  password: string;
}

interface ISignUpBody extends ISignInBody {
  username: string;
}

export const signInThunk = (body: ISignInBody) => async (dispatch: AppDispatch) => {
  const navigate = useNavigate();

  dispatch(setLoading(true));

  try {
    const { data } = await api.post<{ access_token: string }>(ENDPOINTS.SIGN_IN, body);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.access_token);
    await dispatch(getUserDataThunk());
    await navigate(ROUTES.HOME);
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const signUpThunk = (body: ISignUpBody) => async (dispatch: AppDispatch) => {
  const navigate = useNavigate();
  dispatch(setLoading(true));

  try {
    await api.post(ENDPOINTS.SIGN_UP, body);
    await navigate(ROUTES.SIGNIN);
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getUserDataThunk = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.get<ICurrentUser>(ENDPOINTS.CURRENT_USER);
    dispatch(setUserData(data));
  } catch (err) {
    console.error(err);
    dispatch(setLoading(false));
  }
};
