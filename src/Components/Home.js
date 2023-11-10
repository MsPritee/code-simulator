

import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import './Stylesheet.css';

export default function Home() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  const [htmlEditorOpen, setHtmlEditorOpen] = useState(true);
  const [cssEditorOpen, setCssEditorOpen] = useState(true);
  const [javascriptEditorOpen, setJavascriptEditorOpen] = useState(true);

  const [editorTheme, setEditorTheme] = useState('material'); // Default theme
  const toggleEditorTheme = () => {
    setEditorTheme(editorTheme === 'material' ? 'default' : 'material');
  };

  const [srcDoc, setSrcDoc] = useState('');

  useEffect (() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout) ;

}, [html, css, javascript] );



  return (
    <>
      <div className='container'>
        <div className='panel code-panel'>
            <Editor 
              language = 'xml'
              displayName="HTML"
              value ={html}
              onChange={setHtml}
              isOpen={htmlEditorOpen}
              setOpen={setHtmlEditorOpen}
              onThemeToggle={toggleEditorTheme}
              currentTheme={editorTheme}
            />
            <Editor 
              language = 'css'
              displayName="CSS"
              value ={css}
              onChange={setCss}
              isOpen={cssEditorOpen}
              setOpen={setCssEditorOpen}
              onThemeToggle={toggleEditorTheme}
              currentTheme={editorTheme}
            />
            <Editor 
              language = 'javascript'
              displayName="JavaScript"
              value ={javascript}
              onChange={setJavascript}
              isOpen={javascriptEditorOpen}
              setOpen={setJavascriptEditorOpen}
              onThemeToggle={toggleEditorTheme}
              currentTheme={editorTheme}
            />
        </div>
        <div className='panel output-panel'>
            <iframe 
              srcDoc={srcDoc}
              title='Output' 
              sandbox='allow-scripts' 
              width="100%" 
              height="100%" 
            />
        </div>
      </div>
    </>
  )
}




