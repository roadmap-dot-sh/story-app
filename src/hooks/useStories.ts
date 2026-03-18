import { useState } from "react"
import type { Story } from "../types/story"
import { saveStories, cleanExpired } from "../services/storyService"

export const useStories = () => {
    const [stories, setStories] = useState<Story[]>(() => cleanExpired())

    const addStory = (image: string) => {
        const newStory: Story = {
            id: crypto.randomUUID(),
            image,
            createdAt: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000
        }

        const updated = [...stories, newStory]
        setStories(updated)
        saveStories(updated)
    }

    return { stories, addStory }
}