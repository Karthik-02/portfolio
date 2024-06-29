// src/components/Editor.jsx
import React from 'react';
import '../styles/editor.css';

const Editor = () => {
  return (
    <div className="editor">
      <pre>
        <code>
{`import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
};

export default App;`}
        </code>
      </pre>
    </div>
  );
};

export default Editor;
