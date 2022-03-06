import React, { FC, useEffect } from 'react'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-atom-dark.css'

interface Code {
  code: string
  langlage: string
}

const Code: FC<Code> = ({ code, langlage }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <pre className={`language-${langlage} max-h-[540px] scrollbar-hide`}>
      <code className="language-js code-highlight text-sm">{code}</code>
    </pre>
  )
}
export default Code
