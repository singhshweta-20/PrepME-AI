import { useState } from "react"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"

function App() {
  // const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    console.log("Email:", email)
    console.log("Password:", password)
  }



  return (
    // Form
     <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
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
    </div>



    // <div>

    //   <Navbar/>
    //   <h1>Counter: {count}</h1>

    //   <button onClick={() => setCount(count + 1)}>
    //     Increase
    //   </button>
    // </div>



    // UseCard
    // <div>
    //   <UserCard name="Shweta" role="Developer" />

    //   <UserCard name="Rahul" role="Designer" />
    // </div>
    
  )
}

export default App