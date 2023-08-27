import React from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Time(){
return(
    <Row style={{margin:'0px'}}>
    
    <Col lg={12}>
      <NavTop />
      <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Работно време</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>
    <Col lg={10} xs={12} style={{ marginTop: '4%' , textAlign:'center'}}>
    
        <dl style={{fontFamily:'cursive'}} className="workTime">
        <dt style={{fontSize:'25px'}}>Понеделник: <small>9:30 ч. – 18:30 ч</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Вторник: <small>9:00 ч. – 18:30 ч.</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Сряда: <small>9:30 ч. – 18:30 ч.</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Четвъртък: <small>9:30 ч. – 18:30 ч.</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Петък: <small>9:30 ч. – 18:30 ч.</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Събота: <small>10:00 ч. – 17:00 ч.</small></dt>
        <br/>
        <dt style={{fontSize:'25px'}}>Неделя: <small style={{color:'red'}}>ЗАТВОРЕНО</small></dt>
    </dl>
    
    
    </Col>
    </Row>
)
}
export default Time;