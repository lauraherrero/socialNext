import { useParams } from 'react-router';
// import { useMemo } from 'react';
import { getUserById } from '../store/slice/thunks';
import { useEffect } from 'react';



export const UserDetail = () => {

  const { id } = useParams();

  const getDetailsId = async() => {
    const detail = await getUserById( id );
    console.log(detail);
    return detail;
  }
  // const userDetails = useMemo( () => getUserById( id ), [ id ]);
  // console.log(userDetails);

  const { results } = getDetailsId();
  console.log(results);

  useEffect(() => {
    getDetailsId()

  }, [])
  
  return (
    <>
    
    <h1>User Details</h1>
    {/* <h1>{ detail.name }</h1> */}
    {/* <h3>{detail.username}</h3>
    <h3>{detail.address.city}</h3>
    <h3>{detail.email}</h3>
    <h3>{detail.website}</h3>
    <h3>{detail.company.name}</h3> */}
    </>
  )
}
