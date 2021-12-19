const React = require('react')
const ReactDOM = require('react-dom')
import ReactMarkdown from'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

export default function Test(){
    return (
        <ReactMarkdown source={input} />
    )
}
