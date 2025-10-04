import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { MainLayout } from 'layouts';
import { Home, SignIn, SignUp } from 'screens';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
