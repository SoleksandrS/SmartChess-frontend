import { ENDPOINTS, api } from 'services/api';
import { setLoading } from './auth.actions';
import type { AppDispatch } from 'store';

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
    const { data } = await api.post<unknown>(ENDPOINTS.SIGN_IN, body);
    console.log('data', data);
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};

export const signUpThunk = (body: ISignUpBody) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await api.post<unknown>(ENDPOINTS.SIGN_UP, body);
    console.log('data', data);
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(setLoading(false));
  }
};
