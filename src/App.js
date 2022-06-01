import {
  BrowserRouter,
  Switch,
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
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/external">
        <ExternalPage />
      </Route>
      <AuthenticatedRoute path="/internal">
        <InternalPage />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/">
        <Home />
      </AuthenticatedRoute>
    </Switch>
</BrowserRouter>
)

export default App;
