import React, { useState } from 'react';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import '../codeEditor/LiveCodeEditor.css'

const LiveCodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

//   const handleSaveProject = () => {
//     // Implement save project functionality here
//     console.log('Project saved!');
//   };

//   const handleUploadFolder = () => {
//     // Implement upload folder functionality here
//     console.log('Folder uploaded!');
//   };

  return (
    <div className='code-pannel' style={{ position: 'relative'}}>
      {/* Options at the top-left */}
      {/* <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 999 }}>
        <a href='/' onClick={handleSaveProject} className='code-pannel-btns'>Save Project</a>
        <a href='/' onClick={handleUploadFolder} className='code-pannel-btns' >Upload Folder</a>
      </div> */}

      {/* Code Editor */}
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 5 }}>
          <SimpleCodeEditor
            value={code}
            onValueChange={(newCode) => handleCodeChange(newCode)}
            highlight={(code) => highlight(code, languages.javascript)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              height: '100%'
            }}
          />
        </div>

        {/* Live Preview */}
        <div style={{ flex: 5, marginLeft: 20 }}>
          <iframe
            title="Live Preview"
            srcDoc={`<html><head><style></style></head><body>${code}<script></script></body></html>`}
            style={{ width: '100%', height: '100%', border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveCodeEditor;
