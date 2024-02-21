import { Link } from "react-router-dom";



export const UserItem = ({ name, id }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <Link to={`/users/${id}`} >Más info</Link>
    </div>
  )
}
