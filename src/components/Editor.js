import React from 'react'
import 'codemirror/theme/material.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2';
export function  Editor  ({props})  {

    const {language,
            displayName,
            value,
            onChange}=props;
  return (
    <div>
        Editor
      
    </div>
  )
}

export default Editor
