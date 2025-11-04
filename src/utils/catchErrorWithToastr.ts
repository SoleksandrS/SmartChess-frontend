/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { AxiosError } from 'axios';
import toastr from 'toastr';

export const catchErrorWithToastr = (err: unknown) => {
  console.error(err);

  if (err instanceof AxiosError) {
    return toastr.error(err.response?.data?.message || err.message);
  }

  toastr.error((err as Error).message);
};
