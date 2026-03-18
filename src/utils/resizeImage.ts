export const resizeImage = (file: File): Promise<string> => {
    return new Promise(resolve => {
        const img = new Image()
        const reader = new FileReader()

        reader.onload = e => {
            img.src = e.target?.result as string
        }

        img.onload = () => {
            const canvas = document.createElement("canvas")
            const maxW = 1080
            const maxH = 1920

            let { width, height } = img
            const ratio = Math.min(maxW / width, maxH / height)

            width *= ratio
            height *= ratio

            canvas.width = width
            canvas.height = height

            const ctx = canvas.getContext("2d")!
            ctx.drawImage(img, 0, 0, width, height)

            resolve(canvas.toDataURL("image/jpeg", 0.8))
        }

        reader.readAsDataURL(file)
    })
}