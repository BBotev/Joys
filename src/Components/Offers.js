import React from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";

function Offers() {
    return (
        <Row style={{ margin: '0px' }}>
            <Col lg={12}>
                <NavTop />
                <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
                <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Подаръчни ваучери</h1>
            </Col>

            <Col lg={2} xs={12}>
                <NavLeft />
            </Col>

            <Col lg={10} xs={12} style={{ marginTop:'1%',paddingLeft:'30px'}}>
                <Row className="offer">
                   
                        <Row>
                            <h1 style={{ textAlign: 'center' }}>Подаръчен ваучер</h1>
                            <h2>За:</h2><hr />
                            <h2>Процедура:</h2><hr />
                            <h2>Валидност:</h2><hr />
                        </Row>
                        <Row>
                                <h3>Условия:</h3>
                                <h3>1. След получаване на ваучера <span style={{ textDecoration: 'underline' }}>моля</span>, обадете се, възможно най-скоро.</h3>
                                <Col xs={12} lg={10}>
                                <h3>2. Ваучерът се счита за невалиден след изтичане на крайната дата.</h3>                               
                                <h3>3. При непосещение на предварително записан час, ваучерът се счита за използван.</h3>
                            </Col>
                            < Col xs={12} lg={2} style={{textAlign:'center'}}>

                                <Image src={require('../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px'}} />

                            </Col>
                        </Row>
                   
                </Row>
                <h3>Ваучерът може да бъде използван за абсолютно всички услуги които предлага салона! </h3>

            </Col>
        </Row>
    )
}

export default Offers;