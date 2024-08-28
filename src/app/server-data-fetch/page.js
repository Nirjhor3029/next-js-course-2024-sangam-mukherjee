
/**
 * fetch
 */

import Link from "next/link";


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
  // console.log(listOfUser);

  let hasData = false;
  if (listOfUser && listOfUser.length > 0) {
    hasData = true;
  }

  return (
    <div>
      ServerDataFetch: User List Page

      <ul>
        {
          hasData ?
            listOfUser.map((user) => {
              return <li key={user.id} className="mt-5">
                <Link href={`/server-data-fetch/${user.id}`}>{user.firstName} {user.lastName}</Link>
              </li>
            })
            :
            <li>No Data</li>

        }
      </ul>
    </div>
  )
}
