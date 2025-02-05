'use client'

import { useEffect, useState } from "react";

function ListPage() {
    const [inc, setInc] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setInc(inc + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [inc])

    return (
        <>
            <h1>The List Page {inc}</h1>
        </>
    )
}

export default ListPage;