import React from 'react';
import NavTop from './NavTop';
import NavLeft from './NavLeft';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function AboutUs() {
    
    return (
        <Row style={{margin:'0px'}}>
      <Col lg={12}>
        <NavTop />
        <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>За нас</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
      </Row>
    )
}

export default AboutUs