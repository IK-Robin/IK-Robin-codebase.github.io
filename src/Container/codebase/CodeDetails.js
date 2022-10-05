import React from 'react'

import {   Link, Route, Routes, useParams} from 'react-router-dom';
import { CodeOutput } from '../../components';
import codeData from './CodeData';
import style from './CodeDetails.module.scss'
function CodeDetails() {
    const {userName} = useParams();
    const code = codeData.find(({name}) => name === userName);
  return (
   <>
   
    
    

    <div className={style.CodeDetails}>
       
       
        <CodeOutput code_title ={code.name} react={code.description} />
    </div>
   </>
  )
}

export default CodeDetails