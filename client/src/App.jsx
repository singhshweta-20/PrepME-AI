import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [message, setMessage] = useState("")

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/message")
  //     .then((response) => {
  //       setMessage(response.data.message)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [profile, setProfile] = useState(null)

  async function handleSignup(event) {
    event.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          email,
          password
        }
      )

      // console.log(response.data.message)
      setMessage(response.data.message)


    } catch (error) {
      console.log(error.response.data.message)
      setMessage(error.response.data.message)
    }
  }

  async function handleLogin(event) {
    event.preventDefault()

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password
        }
      )

      localStorage.setItem(
        "token",
        response.data.token
      )

      setMessage(response.data.message)


    } catch (error) {
      console.log(error.response.data.message)
      setMessage(error.response.data.message)
    }
  }

  async function getProfile() {

    try {

      const token =
        localStorage.getItem("token")

      const response =
        await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: token
            }
          }
        )

      setProfile(response.data)

    } catch (error) {

      console.log(error)

    }
  }

  return (
    // <div>
    //   <h1>Frontend + Backend Connection</h1>

    //   <h2>{message}</h2>
    // </div>


    <div>
      <h1>Login Form</h1>

      <form>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button
          type="button"
          onClick={handleSignup}>
          Signup
        </button>

        <button
          type="button"
          onClick={handleLogin}>
          Login

        </button>

        <button
          type="button"
          onClick={getProfile}>
          Get Profile
        </button>
      </form>

      {profile && (

        <div>

          <h3>Profile Data</h3>

          <p>
            Email:
            {profile.user.email}
          </p>

          <p>
            User ID:
            {profile.user.userId}
          </p>

        </div>

      )}

      <h2>{message}</h2>

    </div>
  )
}

export default App