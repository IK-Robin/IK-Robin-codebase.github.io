import React from 'react'
import { CodeBody } from '../../components'
import style  from './BodyContainer.module.scss'

function BodyContainer() {
  return (
    <div className={style.bodyContainer} >
      <h1 className={style.title}>
        Code Exeample
      </h1>

    <CodeBody code_title={'nav'} react={'react'} css={'css'}></CodeBody>

    </div>
  )
}

export default BodyContainer