import { useState } from "react";

function useLocalStorage(key: string, initialValue: number) {
    const [value, setValue] = useState<number>(() => {
        const stored = localStorage.getItem(key);
        return stored !== null ? parseInt(stored, 10) : initialValue;
    });

    function store(newValue: number) {
        localStorage.setItem(key, String(newValue));
        setValue(newValue);
    }

    return { value: value, setValue: store };
}

export default useLocalStorage;
