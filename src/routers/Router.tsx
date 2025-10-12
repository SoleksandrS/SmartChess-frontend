import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { MainLayout } from 'layouts';
import { Home, SignIn, SignUp } from 'screens';
import { GameVsAI } from 'screens/GameVsAI/GameVsAI';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.GAME_VS_AI} element={<GameVsAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
