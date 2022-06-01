import { useHistory, Link } from "react-router-dom"
import authenticator from "../router/authenticator"

const Login = () => {
  const history = useHistory()

  return (
    <>
      <h1>Login</h1>
      <ul>
        <li>
          <Link to="/external">External Page</Link>
        </li>
        <li>
          <Link to="/internal">Internal Page - should not work if logged out</Link>
        </li>
      </ul>
      <button onClick={() => {
        authenticator.login()
        history.push('/')
      }}>
          Click Here to login
      </button>
    </>
  )
}

export default Login