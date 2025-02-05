'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Project({
    params
}: {
    params: {
        id: string
    }
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    console.log(pathname, searchParams, params);

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        console.log(url);
    }, [pathname, searchParams])

    return (
        <>
            <h1>The Dynamic Client Page-Component. {params.id}</h1>
        </>
    )
}