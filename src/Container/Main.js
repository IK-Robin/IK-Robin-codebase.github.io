import React from 'react'
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import style from '../style/app.module.scss';
import BodyContainer from './bodyContainer/BodyContainer';
function Main() {
  return (
<div fluid className={`${style.app} ${style.container_fluid}`}>
      <div className={`${style.app_flex} app_flex `}>
        {/* Sidebar section  */}
        <div className={style.Sidebar}>
          <Sidebar />
        </div>

        {/* body section start  */}
        <Container  className={` ${style.body}`}>
        <BodyContainer/>
        
        </Container>

        {/* body end  */}

        <Container className={style.rightSide}> 
            rithe container
        </Container>
      </div>
    </div>
  )
}

export default Main