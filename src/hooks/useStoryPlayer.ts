import { useEffect, useState } from "react"

export const useStoryPlayer = (length: number, onEnd: () => void) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= length) {
            onEnd()
            return
        }

        const timer = setTimeout(() => {
            setIndex(prev => prev + 1)
        }, 3000)

        return () => clearTimeout(timer)
    }, [index, length])

    const next = () => setIndex(i => Math.min(i + 1, length - 1))
    const prev = () => setIndex(i => Math.max(i - 1, 0))

    return { index, next, prev }
}