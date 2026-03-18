import { resizeImage } from "../utils/resizeImage";

export default function AddStoryButton({
  onAdd,
}: {
  onAdd: (img: string) => void;
}) {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await resizeImage(file);
    onAdd(base64);
  };

  return (
    <label style={{ cursor: "pointer" }}>
      ➕
      <input type="file" hidden onChange={handleChange} />
    </label>
  );
}
