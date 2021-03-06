import React from 'react'

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import { solarizedlight } from 'react-syntax-highlighter/styles/prism'
import bash from 'react-syntax-highlighter/languages/prism/bash'
import css from 'react-syntax-highlighter/languages/prism/css-extras'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'

registerLanguage('bash', bash)
registerLanguage('css', css)
registerLanguage('jsx', jsx)

export default function Code ({ children, ...props }) {
  return (
    <SyntaxHighlighter
      style={solarizedlight}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}
