import React, {useCallback, useState} from 'react';

import Preview from './preview';
import Editor from './editor';

import './utility';
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
      <Preview />
    </div>
  );
};

export default App;
