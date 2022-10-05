import React, { useEffect,  useState } from 'react'
import { Row } from 'react-bootstrap'
import style from './codeContainer.module.scss'
import CopyToClipboard from 'react-copy-to-clipboard'






function CodeContainer({code_title,codeItem}) {
 

 const [isActive, setIsActive] = useState(false)
 const [seconds, setSeconds] = useState('');

  const reset = ()=> {
    setIsActive(false);
    setSeconds ();

  }
  const  toggle  = () => {
    setIsActive((item) => !item)
  }

  useEffect(() => {
    let interval = null;

if(isActive) {
  interval = setTimeout(() => {
    setSeconds(() => reset())
  },1000)
}
else if(!isActive) {
  clearInterval(interval)
}
   return () =>clearInterval(interval)
    
  }, [seconds, isActive])

 


  return (
    <div>

<Row className={style.raw_code}>
        {/* title  */}
    <div className={`${style.copy_Clipbord} app_flex`}>
 
    <div className={style.copy}>
        <CopyToClipboard text= {codeItem}>
        
        <button type='button' onClick={()=> toggle()}   >
     { isActive? 'copy successful' : 'copy'}
        </button>
        
        
     
        </CopyToClipboard>
    </div>
    </div>
 
        <pre>
            {codeItem}
        </pre>
    </Row>
    </div>
  )
}

export default CodeContainer