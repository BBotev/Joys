import React from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Contacts(){
    return(
        <Row style={{margin:'0px'}}>
    
        <Col lg={12}>
          <NavTop />
          <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
          <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Контакти</h1>
        </Col>
    
        <Col lg={2} xs={12}>
          <NavLeft />
        </Col>
       
        <Col lg={10} xs={12} style={{ marginTop: '3%' , textAlign:'center' }}>
        
        <br />
        <dl className="contacts">
        <dt style={{fontSize:'20px'}}>
           <span style={{fontSize:'25px'}}>Адрес: </span> ул. Гренадерска 30 бл. 1ви Май, Pleven, Bulgaria
            </dt>
            <br />
        <dt style={{fontSize:'20px'}}><span style={{fontSize:'25px'}}>Телефон: </span> 089 916 5227</dt>
        <br />
        <dt><span style={{fontSize:'25px'}}>Страница: </span> <a href="https://www.instagram.com/beauty_salon_joys/?fbclid=IwAR0h7NHNdGI1HQd2dPkmcewzh_jGtiI_lXKB3Kj24H73fbTx5FVSn8r6zcw" 
        style={{fontSize:'20px'}}>
            instagram.com/beauty_salon_joys
            </a></dt>
            </dl>
            
            </Col>
    </Row>
    )
}

export default Contacts;