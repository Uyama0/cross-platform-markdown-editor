import React, {useCallback, useEffect} from 'react';

import useCodeMirror from './codemirror';

import './editor.css';

interface Props {}

const Editor: React.FC<Props> = props => {
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: 'Hello',
    onChange: () => {},
  });

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView]);

  return (
    <div
      className="editor"
      ref={refContainer}
    ></div>
  );
};

export default Editor;
