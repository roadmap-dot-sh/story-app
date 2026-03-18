import type { Story } from "../types/story"

const KEY = "stories"

export const getStories = (): Story[] => {
    return JSON.parse(localStorage.getItem(KEY) || "[]")
}

export const saveStories = (stories: Story[]) => {
    localStorage.setItem(KEY, JSON.stringify(stories))
}

export const cleanExpired = () => {
    const now = Date.now()
    const stories = getStories().filter(s => s.expiresAt > now)
    saveStories(stories)
    return stories
}