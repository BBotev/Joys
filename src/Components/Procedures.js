import React from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
function Procedures() {

  return (
    <Row style={{margin:'0px'}}>
      <Col lg={12}>
        <NavTop />
        <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{marginTop:'3%'}}>
        <Row>
          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Massage">
                <Image src={require('../Images/massage.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Масажи</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Cosmetics">
                <Image src={require('../Images/cosmetic.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Козметични процедури</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Cellulite">
                <Image src={require('../Images/cellulite.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Антицелулитни отслабващи процедури</div>
              </a>
            </div>
          </Col>



          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Waxing">
                <Image src={require('../Images/waxing.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Кола маска</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Therapies">
                <Image src={require('../Images/therapy.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Терапии</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Makeup">
                <Image src={require('../Images/grim.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Грим</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Manicure">
                <Image src={require('../Images/nails.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Маникюр</div>
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>


  )
}
export default Procedures;
