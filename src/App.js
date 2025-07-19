import React, { useState } from 'react';
import './styles.css';
import { marked } from 'marked';

export default function App() {
  const [markdown, setMarkdown] = useState(`# Hello World!

This is **bold** text, and this is *italic* text.

- List item 1
- List item 2

[Link to FreeCodeCamp](https://freecodecamp.org)
`);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>

      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
