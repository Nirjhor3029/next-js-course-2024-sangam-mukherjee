
"use client";

import Link from "next/link";
import useSWR from "swr";


/**
 * In this page we are using useEffect hook 
 * and use swr, useSwr hook
 * with loading state 
*/

export default function ClientSideDataFetch() {

    /**
     * 1st way
     */
    // const [loading, setLoading] = useState(true);
    // const [users, setUsers] = useState([])
    // async function fetchUsers() {
    //     try {
    //         setLoading(true);
    //         const apiResponse = await fetch('https://dummyjson.com/users');
    //         const result = await apiResponse.json();
    //         console.log(result);

    //         if (result?.users) {
    //             setUsers(result.users);
    //             setLoading(false);
    //         }

    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         throw new Error(error);
    //     }

    // }

    // useEffect(() => {
    //     fetchUsers();
    // }, []);
    // if (loading) {
    //     return <h3 className="text-center mt-10">Loading... Please Wait.....</h3>
    // }


    /**
     * 2nd way with swr
     */

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);


    if (error){
        console.error(error);
        return <div>failed to load:</div>
    } 
    if (isLoading) return <div className="text-center mt-10 font-bold">loading... Wait ....</div>

    return (
        <div>
            ClientSideDataFetch page: User List
            <ul className="text-center mt-10">
                {
                    data?.users && data.users.map((user) => {
                        return <li key={user.id} className="mt-5">
                            <Link href={`/client-side-data-fetch/${user.id}`}>{user.firstName} {user.lastName}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
