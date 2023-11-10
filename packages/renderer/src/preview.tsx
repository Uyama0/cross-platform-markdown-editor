import React from 'react';

import {unified} from 'unified';
import remarkParse from 'remark-parse/lib';
import remarkReact from 'remark-react/lib';
import remarkGfm from 'remark-gfm';

import './preview.css';
import 'github-markdown-css';

const Preview: React.FC = () => {
  return <div className="preview"></div>;
};

export default Preview;
