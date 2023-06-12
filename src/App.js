import './App.css';
import Editor from './components/Editor';
import React,{useEffect, useState} from 'react';

function App() {
  const[html,setHtml]=useState("");
  const[css,setCSS]=useState("");
  const[js,setJs]=useState("");
  const [srcDoc,setSrcDoc]=useState("")
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`<html>
      <body>${html}</body>
      <script>${js}</script>
      <style>${css}</style>
      </html>
      `)
    },250)
    return()=>clearTimeout(timeout);
  },[html,css,js])


  return (
    <>
    <div className='pane top-pane'>
      <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
      />
      <Editor
       language="css"
       displayName="CSS"
       value={css}
       onChange={setCSS}/>
      <Editor
       language="javascript"
       displayName="Javascript"
       value={js}
       onChange={setJs}/>

    </div>
    <div className='pane'>
      <iframe
           srcDoc={srcDoc}
           title="output"
           sandbox="allow-scripts"
           frameBorder="0"
           width="100%"
           height="100%"
     />


      

    </div>
    </>
   
  );
}

export default App;
