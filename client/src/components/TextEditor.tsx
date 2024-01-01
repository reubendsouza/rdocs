import { useState } from "react";

import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [StarterKit];

export const TextEditor = () => {
  const [content, setContent] = useState("");
  const editorProps = {
    attributes: {
      class: "border-2 w-[816px] h-[1056px]",
    },
  };
  return (
    <div className="bg-white p-2 border-solid border-black w-[836px] h-[1076px] content-around">
      <EditorProvider
        extensions={extensions}
        content={content}
        editorProps={editorProps}
      >
        {""}
      </EditorProvider>
    </div>
  );
};
