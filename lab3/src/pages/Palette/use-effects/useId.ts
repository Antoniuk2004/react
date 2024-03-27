import {useEffect, useState} from "react";

// @ts-ignore
export const useId = (location: Location<any>) => {
    const [id, setId] = useState<string | null | boolean>(null);

    useEffect(() => {
        const pathname = location.pathname.replace("/palette", "")
        const pathParts = pathname.split("/").filter((element: string) => element !== '');

        if(pathParts.length !== 1) setId(false);
        else setId(pathParts[0]);
    }, []);

    return id;
}