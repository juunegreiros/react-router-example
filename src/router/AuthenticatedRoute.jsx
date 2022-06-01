import { Redirect, Route } from 'react-router-dom'

import authenticator from './authenticator'

const AuthenticatedRoute = ({ children }) => {
  return (
    <Route 
      render={() => {
        if (authenticator.isAuthenticated) {
          return children
        }

        return <Redirect to="/login" />
      }}
    />
  )
}

export default AuthenticatedRoute