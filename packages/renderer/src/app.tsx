import React, {useCallback, useState} from 'react';

import Editor from './editor';

import './app.css';

const App = () => {
  const [doc, setDoc] = useState<string>('# Hello');

  const handeDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor
        onChange={handeDocChange}
        initialDoc={doc}
      />
    </div>
  );
};

export default App;
