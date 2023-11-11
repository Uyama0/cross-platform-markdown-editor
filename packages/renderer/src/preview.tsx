import React from 'react';

import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';
import remarkGfm from 'remark-gfm';

import './preview.css';
import 'github-markdown-css';

interface Props {
  doc: string;
}

const Preview: React.FC<Props> = props => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React)
    .processSync(props.doc).result as React.ReactElement;
  return <div className="preview markdown-body">{md}</div>;
};

export default Preview;
