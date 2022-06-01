import { Navigate } from 'react-router-dom'

import authenticator from './authenticator'

const AuthenticatedRoute = ({ children }) => {
  if(authenticator.isAuthenticated) {
    return children
  }
  return <Navigate to="/login" />
}

export default AuthenticatedRoute