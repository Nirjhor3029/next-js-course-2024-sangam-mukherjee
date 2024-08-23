import { redirect } from "next/navigation";

export default function Accounts() {
    const userProfileInfo = null;

    if(userProfileInfo === null) {
        redirect('/cart?search=product1&random_value=AB1');
    }
    return (
        <div>Accounts Page</div>
    )
}
