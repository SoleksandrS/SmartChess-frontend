import type { NavigateFunction } from 'react-router-dom';

let navigator: NavigateFunction;

export const setNavigator = (navFn: NavigateFunction) => {
  navigator = navFn;
};

export const navigate = async (path: string) => {
  if (navigator) await navigator(path);
};
