import { useEffect, useState } from "react";

interface IUseLocalStorage {
    key: string,
    value: string,
}

export function useLocalStorage({ key, value }: IUseLocalStorage) {
    const [valor, setValor] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? stored : value;
        } catch (error) {
            return value
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, valor);
        } catch (error) {
            console.log(error);
        }
    }, [key, valor])

    return [valor, setValor] as const;
}