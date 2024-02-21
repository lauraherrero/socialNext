import { startLoadingUsers, setUsers } from "./userSlice";

export const getUserList = () => {
  return async (dispatch) => {
    dispatch(startLoadingUsers());

    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await resp.json();
    // console.log(data);

    dispatch(setUsers({ users: data }));
  };
};

export const getUserById = async (id) => {
  const resp =  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();
  console.log(data);
  // const userDetails = data.find( user => user.id === id );
  // console.log(userDetails);
  return data;
  
};

