import AutheticationPage from "./pages/authentication-page";
import RecoveryPasswordPage from "./pages/recover-password-page";
import HomePage from "./pages/home-page";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search-page";
import RegisterCVPage from "./pages/register-cv-page";
import AdminWelcomePage from "./pages/admin-welcome-page";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          element={<HomePage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/sign-up`}
          element={<AutheticationPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/recover-password`}
          element={<RecoveryPasswordPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/search-jobs`}
          element={<SearchPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/register-cv`}
          element={<RegisterCVPage />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/admin-dashboard`}
          element={<AdminWelcomePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
