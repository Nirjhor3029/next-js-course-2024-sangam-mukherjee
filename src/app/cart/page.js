'use client';
import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get('search'));
    console.log(searchParams.get('random_value'));
    
    return (
        <div>This is Cart Component</div>
    )
}
