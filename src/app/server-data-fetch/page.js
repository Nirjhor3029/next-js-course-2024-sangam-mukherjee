
/**
 * fetch
 */


async function fetchListOfUser() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/users');
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerDataFetch() {
  const listOfUser = await fetchListOfUser();
  console.log(listOfUser);

  let hasData = false;
  if(listOfUser && listOfUser.length > 0) {
    hasData = true;
  }

  return (
    <div>
      ServerDataFetch page
 
    <ul>
      {
            hasData? 
            listOfUser.map((user)=>{
              return <li>{user.firstName} {user.lastName}</li>
            })
            : 
            <li>No Data</li>

      }
    </ul>
    </div>
  )
}
