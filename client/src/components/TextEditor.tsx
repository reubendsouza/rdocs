import { useState } from "react";

import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

export const TextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <EditorProvider extensions={extensions} content={content}>
        {""}
      </EditorProvider>
    </div>
  );
};
