import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import ExternalPage from './pages/ExternalPage'
import InternalPage from './pages/InternalPage'
import AuthenticatedRoute from './router/AuthenticatedRoute';

const App = () => (
  <BrowserRouter>
    {/* Loads the first route that matches the url, if no exact includes subroutes */}
    <Routes>
      <Route
        path="/login"
        element={
          <Login />
        }
      />
      <Route
        path="/external"
        element={
          <ExternalPage />
        }
      />
      <Route
        path="/internal"
        element={
          <AuthenticatedRoute>
            <InternalPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/"
        element={
          <AuthenticatedRoute>
            <Home />
          </AuthenticatedRoute>
        }
      />
    </Routes>
</BrowserRouter>
)

export default App;
