import React, {useCallback, useEffect} from 'react';

import useCodeMirror from './codemirror';

import './editor.css';

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = props => {
  const {onChange, initialDoc} = props;
  const handleChange = useCallback((state: any) => onChange(state.doc.toString()), [onChange]);
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
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
