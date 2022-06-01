import { useNavigate, Link } from "react-router-dom"
import authenticator from "../router/authenticator"

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Home</h1>
      <Link to="/internal">Internal Page</Link>
      <button onClick={() => {
        authenticator.logout()
        navigate('/login')
      }}>
          Click Here to Logout
      </button>
    </>
  )
}

export default Home