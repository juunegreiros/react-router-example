import { useHistory, Link } from "react-router-dom"
import authenticator from "../router/authenticator"

const Home = () => {
  const history = useHistory()

  return (
    <>
      <h1>Home</h1>
      <Link to="/internal">Internal Page</Link>
      <button onClick={() => {
        authenticator.logout()
        history.push('/login')
      }}>
          Click Here to Logout
      </button>
    </>
  )
}

export default Home