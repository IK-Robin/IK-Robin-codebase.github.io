import React, { useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function CopyExample() {

 const [inputText, setInputText] = useState('');
 const [toggle, setToggle] = useState(false)

   
return(
    <>|
    
    <form>
        <textarea
       
          value={inputText}
          onChange = { (e) => setInputText(e.target.value)}
        />

        {/* <button type='button'> copy</button> */}
       
      </form>

      <CopyToClipboard text={inputText}>
      <button type='button' onClick={ ()=> setToggle((e)=> !e)} > {toggle ?'copy':'copeid !' } </button>
      </CopyToClipboard>
    
    </>
)
}