// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

// Project Imports
import "./styles.css";

const CodeEditor = ({ value, onCodeChange, programmingLanguage }) => {
  const onLoad = () => {
    console.log("code editor loaded");
  };
  return (<div style={{textAlign:'center'}}>
    <AceEditor
      className="codeEditor"
      placeholder="Write your code..."
      mode={programmingLanguage}

      onLoad={onLoad}
      onChange={onCodeChange}
      fontSize={14}
      value={value}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
    </div>
  );
};

export default CodeEditor;
