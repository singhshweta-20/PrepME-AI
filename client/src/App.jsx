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

  async function handleLogin(event) {
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

  return (
    // <div>
    //   <h1>Frontend + Backend Connection</h1>

    //   <h2>{message}</h2>
    // </div>


    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleLogin}>
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

        <button type="submit">
          Login
        </button>
      </form>

      <h2>{message}</h2>

    </div>
  )
}

export default App