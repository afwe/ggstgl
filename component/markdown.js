import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownStyle from '../styles/markdown.module.scss';
export default function Markdown(props) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} {...props}  className={"markdown-body"+" "+markdownStyle} />
    )
}