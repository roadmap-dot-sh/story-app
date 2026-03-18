import { useStoryPlayer } from "../hooks/useStoryPlayer";
import ProgressBar from "./ProgressBar";
import type { Story } from "../types/story";

type Props = {
  stories: Story[];
  onClose: () => void;
};

export default function StoryViewer({ stories, onClose }: Props) {
  const { index, next } = useStoryPlayer(stories.length, onClose);

  if (!stories[index]) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        color: "white",
      }}
      onClick={next}>
      <ProgressBar total={stories.length} current={index} />

      <img
        src={stories[index].image}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
