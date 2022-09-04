import React from 'react'
import { Row } from 'react-bootstrap'
import style from './codeContainer.module.scss'
function CodeContainer({code_title,codeItem}) {
  return (
    <div>

<Row className={style.raw_code}>
        {/* title  */}
    <div className={`${style.copy_Clipbord} app_flex`}>
 
    <div className={style.copy}>
        <button type='button' > copp</button>
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