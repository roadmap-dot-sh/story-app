import AddStoryButton from "./AddStoryButton";
import type { Story } from "../types/story";

export default function StoryList({
  stories,
  onAdd,
  onOpen,
}: {
  stories: Story[];
  onAdd: (img: string) => void;
  onOpen: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
      <AddStoryButton onAdd={onAdd} />

      {stories.map((s) => (
        <img
          key={s.id}
          src={s.image}
          onClick={onOpen}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}
