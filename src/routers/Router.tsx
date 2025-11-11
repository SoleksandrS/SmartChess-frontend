import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { MainLayout } from 'layouts';
import { Game, Games, Home, NotFound, SignIn, SignUp } from 'screens';

const unauthRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.SIGNIN, element: <SignIn /> },
  { path: ROUTES.SIGNUP, element: <SignUp /> },
  { path: '*', element: <NotFound /> }
];

const authRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: `${ROUTES.GAMES}/:id`, element: <Game /> },
  { path: ROUTES.GAMES, element: <Games /> },
  { path: '*', element: <NotFound /> }
];

function Router() {
  const userData = useSelector((state: TState) => state.auth.data);
  const routes = userData ? authRoutes : unauthRoutes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
