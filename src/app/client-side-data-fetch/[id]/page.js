
async function fetchUser(id) {
    const apiResponse = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await apiResponse.json();
    return result;
}

export default async function UserDetails({ params }) {
    console.log(params.id);
    let user = await fetchUser(params.id);
    console.log(user);
    return (
        <div>
            <ul>
                <li>{user?.firstName}</li>
                <li>{user?.lastName}</li>
                <li>{user?.email}</li>
                <li>{user?.phone}</li>
            </ul>

        </div>
    )
}
