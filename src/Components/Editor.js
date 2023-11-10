

import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

export default function Editor (props) {

  const {
    displayName,
    value,
    onChange,
    language,
    isOpen,
    setOpen,
    onThemeToggle,
    currentTheme,
  } = props;

  
  const [maximised, setMaximised] = useState(false);


  // const [open, setOpen] = useState(true)

  
  function handleChange(editor, data, value){
    onChange(value);
  }



  return (
    
    <div className={`code-box ${maximised ? '' : 'collapsed'}`}>
      <div className='title' >
      <div className='title-left'>
      <div className={`language-icon ${language}-icon`}></div>
        {displayName}
        </div>
        <div className='title-right'>
          <button
          className={`theme-toggle-button ${currentTheme === 'material' ? 'default-theme' : 'material-theme'}`}
          onClick={onThemeToggle}
          type='button'
        >
          {currentTheme === 'material' ? '' : ''}
        </button>
        <button 
          onClick={() => {
            setMaximised((prevState) => !prevState);
          }}  
          type="button"
          className="icon-button"
        >
          {isOpen ? (maximised ? 'expand_less' : 'expand_more') : 'Open'}
        </button>
        </div>
      </div>
      <div className='code-mirror-wrapper'  >
        <ControlledEditor 
          onBeforeChange={handleChange} 
          value= {value}           
          options={{
            lineWrapping: true, 
            // theme: 'material', 
            theme: currentTheme, // Use the current theme
            lint: true, 
            mode: language, 
            lineNumbers: true
          }} 
        />
      </div>
          

        
    </div>
  );
}


