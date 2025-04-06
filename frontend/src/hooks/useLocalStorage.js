import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key)

        if (item) return JSON.parse(item)
        if (typeof initialValue === 'function') return initialValue()
        return initialValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}