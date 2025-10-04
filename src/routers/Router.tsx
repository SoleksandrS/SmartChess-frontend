import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from 'layouts';
import { Home, SignIn, SignUp } from 'screens';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
