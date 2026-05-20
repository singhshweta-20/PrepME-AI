function UserCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  )
}

export default UserCard