import { useNavigate, Link } from "react-router-dom"
import authenticator from "../router/authenticator"

const Login = () => {
  const navigate = useNavigate()

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
        navigate('/')
      }}>
          Click Here to login
      </button>
    </>
  )
}

export default Login