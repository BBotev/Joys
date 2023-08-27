import React, { useEffect, useState } from "react";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Massage() {
    
  return (
    <Row style={{margin:'0px'}}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Масажи</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
      <Col lg={10} xs={12} style={{ marginTop: '6%' }}>
        <Row>
          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Fullmassage">
                <Image src={require('../../Images/Massages/allbody.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Цялостен</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/BackMassage">
                <Image src={require('../../Images/Massages/back.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Гръб</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/LegsMassage">
                <Image src={require('../../Images/Massages/legs.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Крака</div>
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

  )
}

export default Massage;

export function FullMassage() {

  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
     
  }, [order])

return (
    <Row style={{margin:'0px'}}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Масажи</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Massage"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Цялостен</Card.Title>
                <Card.Text as="span">
                 Масажът на цялото тяло представлява прилагане на натиск върху различни части на тялото за насърчаване на релаксация
                  и облекчаване на напрежението. Обикновено включва комбинация от удари, разтриване и кръгови движения в зоните на гърба,
                  ръцете, краката и врата.Ето и кои са ползите от класическия масаж на цяло тяло:
                  Намаляване на стреса - масажът на цялото тяло насърчава релаксацията и води до редуциране нивата на стрес.
                  Подобряване на кръвообращението - натискът, прилаган по време на масажа, помага за увеличаване на притока на кръв,
                  което от своя страна може да подобри кръвообращението.
                  Облекчаване на мускулното напрежение - масажът може да помогне за облекчаване на мускулното напрежение, скованост и болка,
                  вследствие на недостатъчна физическа активност, заседнал начин на живот и заемане на неправилна стойка.
                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                  <div className="cardText">
                    <br/>
                   <span> Цялостен масаж 60 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Цялостен масаж 60 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Цялостен масаж 75 минути: 50лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Цялостен масаж 75 минути: 50лв.",price:50,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Цялостен масаж 90 минути: 60лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Цялостен масаж 90 минути: 60лв.",price:60,id:(Math.random()*100)})}}>Заяви</button>
                  </div>
                  </Col>
                  
                  <Col xs={12} md={12} lg={2}>
                    <div>
                      <br/>
                  <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{width:'120px'}}/>
                  </div>
                  </Col>
                 
                  </Row>
              </Card.Text>
                </Card.Body>
              <Card.Footer style={{ borderTop: 'thick double black' }}>Your choice of Joys</Card.Footer>
            </Card>
          </Col>
          </Row>
        
      </Col>
    </Row>
  )
}

export function BackMassage() {
 
  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
  }, [order])


  return (
    <Row style={{margin:'0px'}}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Масажи</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Massage"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Гръб</Card.Title>
                <Card.Text as="span">
                 Всички носим отговорности, грижи и притеснения „на гърба си“. Този израз е широко разпространен и буквално описва това, което чувстваме,
                  защото наистина гърбът е структурата, която „носи“ тялото ни, а с това и изпълващите го мисли и тревоги.В комбинация със заседяване на стол
                  и липса на стречинг или масаж, гърбът постепенно се превръща в скована и болезнена зона. Много хора също така срещат сериозни проблеми със
                  силата на гърба си, щом стане въпрос за вдигане на тежки покупки, уреди или други предмети. А какво остава за спорт и натоварване,
                  което трябва да бъде стабилизирано от гърба, какъвто е случаят при много силови упражнения и не само?Ползите от различните видове масажи
                  се признават и масажът е предпочитан като средство за терапия. В много случаи се препоръчва от лекари и други медицински специалисти при
                  назначена терапия след травми, операции и други манипулации.Със сигурност масажът би се вписал най-добре като част от цялостна уелнес
                  програма за подобряване на физическото и психическото здраве.
                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                  <br/>
                  <br/>
                    <span>Гръб 40 минути: 30лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Гръб 40 минути: 30лв.",price:30,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Гръб + крака 45 минути: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Гръб + крака 45 минути: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
                  </div>
                  </Col>

                  <Col xs={12} md={12} lg={2}>
                    <div>
                      <br/>
                  <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{width:'120px'}}/>
                  </div>
                  </Col>
                  
                  </Row>
                  </Card.Text>
              </Card.Body>
              <Card.Footer style={{ borderTop: 'thick double black' }}>Your choice of Joys</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export function LegsMassage() {
 
  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
  }, [order])
 
  return (
    <Row style={{margin:'0px'}}>

    <Col lg={12}>
      <NavTop />
      <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Масажи</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Massage"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Крака</Card.Title>
                <Card.Text as="span">
               Краката прекарват голяма част от времето под напрежение. Независимо дали сме твърде дълго в седнало,
            изправено положение или продължително ходене краката при всички ситуации страдат.
            Следствие от натоварването са болката, подуването, нарушаването на кръвообращението. Масажът на стъпалата и краката е един от най-добрите
            начини да се възстановят краката, а заедно с тях се подобрява цялостното здравословно и емоционално  състояние на организма.
            Стъпалата също са доста натоварени. Те имат нелеката задача да носят цялата тежест на тялото, да участват в повечето движения
            и поради това често са най-уморени. След масажирането им  имаме усещане за релаксация, лекота, успокояване на нервите
            и намаляване на стреса, като се задействат самооздравителните процеси в организма. След което сме значително по-отпочинали.
            Други положителни ефекти от масажа са подобряване  обмяната на веществата, стимулиране функцията на отделните органи.
            <Row>
                
                 <Col xs={12} md={12} lg={10}>
            <div className="cardText">
              <br/>
              <br/>
             <span>Крака 35 минути: 30лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Крака 35 минути: 30лв.",price:30,id:(Math.random()*100)})}}>Заяви</button>
              <br />
              <br />
             <span>Крака + гръб 45 минути: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Крака + гръб 45 минути: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
            </div>
            </Col>
            
            <Col xs={12} md={12} lg={2}>
                    <div>
                      <br/>
                  <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{width:'120px'}}/>
                  </div>
                  </Col>

            </Row>
             </Card.Text>
              </Card.Body>
              <Card.Footer style={{ borderTop: 'thick double black' }}>Your choice of Joys</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}