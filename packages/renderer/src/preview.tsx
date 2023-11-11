import React from 'react';

import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';
import remarkGfm from 'remark-gfm';
import {defaultSchema} from 'hast-util-sanitize';

import './preview.css';
import 'github-markdown-css';
import RemarkCode from './remarkCode';

interface Props {
  doc: string;
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className'],
  },
};

const Preview: React.FC<Props> = props => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode,
      },
    })
    .processSync(props.doc).result as React.ReactElement;
  return <div className="preview markdown-body">{md}</div>;
};

export default Preview;
