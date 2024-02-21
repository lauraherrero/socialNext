import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../store/slice/thunks";
import { UserItem } from "./UserItem";



export const UserList = () => {

  const dispatch = useDispatch();
  const { isLoading, users = [] } = useSelector(state => state.users);

  useEffect(() => {
    dispatch( getUserList() );

  }, [])
  console.log(users);

  return (
    <>
      <h1>Listado de usuarios:</h1>
      <hr />


      {
        isLoading ? 
         <h3>Cargando...</h3>
        :
          <span></span>
      }


      <div className="row rows-cols-1 row-cols-md-3 g-3">

        { users.map( (user) => {
          return (
            <UserItem  key={ user.id } {...user}/>
          )
        })}
      </div>
    </>
  );
};
