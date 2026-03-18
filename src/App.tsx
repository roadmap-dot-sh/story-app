import { useState } from "react";
import { useStories } from "./hooks/useStories";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";

export default function App() {
  const { stories, addStory } = useStories();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <StoryList
        stories={stories}
        onAdd={addStory}
        onOpen={() => setOpen(true)}
      />

      {open && <StoryViewer stories={stories} onClose={() => setOpen(false)} />}
    </div>
  );
}
