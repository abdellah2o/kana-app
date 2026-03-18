import { useState } from "react";

function useLocalStorage(key: string, initialValue: number) {
    const [value, setValue] = useState<number>(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored !== null ? parseInt(stored, 10) : initialValue;
        }
        catch {
            return initialValue;
        }
    });

    function store(newValue: number) {
        try {
            localStorage.setItem(key, String(newValue));
        }
        catch {
            console.log("flop... tu n'as pas réussi à écrire dans le local storage.")
        }
        finally {
            setValue(newValue);
        }
    }

    return { value: value, setValue: store };
}

export default useLocalStorage;
