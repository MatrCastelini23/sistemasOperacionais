import { useContext, type Context } from "react";


export function useAnyContext<T>(context: Context<T | null>): T {
    const value = useContext(context);

    if (!value) {
        throw new Error("Contexto fora do Provider")
    }

    return value;
}