import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import { STORAGE_KEYS } from 'constants/localStorage';
import { setLoading } from './auth.actions';

interface ISignInBody {
  email: string;
  password: string;
}

interface ISignUpBody extends ISignInBody {
  username: string;
}

export const signInThunk = (body: ISignInBody) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.post<{ access_token: string }>(ENDPOINTS.SIGN_IN, body);
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.access_token);
    console.log('data', data);
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
    const { data } = await api.post<unknown>(ENDPOINTS.SIGN_UP, body);
    console.log('data', data);
    await navigate(ROUTES.SIGNIN);
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};
