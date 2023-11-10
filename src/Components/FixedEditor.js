import React, { useState } from 'react';
import Editor from './Editor'; // Import your Editor component
import './Stylesheet.css';

const languages = ['HTML', 'CSS', 'JavaScript']; // Add more languages if needed

export default function FixedEditor() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className='fixed-editor'>
      <div className='language-list'>
        {languages.map((language) => (
          <div
            key={language}
            className={`language-option ${selectedLanguage === language ? 'active' : ''}`}
            onClick={() => handleLanguageClick(language)}
          >
            {language}
          </div>
        ))}
      </div>
      <div className='editor-container'>
        {selectedLanguage && (
          <Editor
          language={selectedLanguage.toLowerCase()} 
            // Other props for the Editor
          />
        )}
      </div>
    </div>
  );
}
