import React, {useCallback, useState} from 'react';

import Preview from './preview';
import Editor from './editor';

import './app.css';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello\n');

  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
      <Preview doc={doc} />
    </div>
  );
};

export default App;
