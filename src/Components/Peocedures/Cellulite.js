import React, {useState,useEffect} from "react";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Cellulite() {
    return (
        <Row style={{ margin: '0px' }}>

            <Col lg={12}>
                <NavTop />
                <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
                <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Антицелулитни отслабващи процедури</h1>
            </Col>

            <Col lg={2} xs={12}>
                <NavLeft />
            </Col>
            <Col lg={10} xs={12} style={{ marginTop: '6%' }}>
                <Row>

                    <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
                        <div className="procedures">
                            <a href="/Celutron">
                                <Image src={require('../../Images/Cellulite/celutron.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                                <div className="proceduresText">Целутрон</div>
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
                        <div className="procedures">
                            <a href="/Press">
                                <Image src={require('../../Images/Cellulite/press.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                                <div className="proceduresText">Пресотерапия</div>
                            </a>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
                        <div className="procedures">
                            <a href="/AntiCellulite">
                                <Image src={require('../../Images/Cellulite/anti.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                                <div className="proceduresText">Антицелулитен масаж</div>
                            </a>
                        </div>
                    </Col>
                    
                </Row>
            </Col>
        </Row>

    )
}

export default Cellulite;

export function Celutron(){
  
  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
     
  }, [order])

    return(
      <Row style={{margin:'0px'}}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Антицелулитни отслабващи процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cellulite"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Целутрон</Card.Title>
                  <Card.Text as="span">
                  Целутронът ускорява метаболизма и редуцира телесните мазнини като предизвиква свиване и отпускане на мускула, равносилно на 
                  натоварване във фитнес зала. При него обаче се избягва опасността от натоварване на опорно-двигателния апарат, сърдечно-съдовата
                   и дихателната система. Няма мускулна треска, няма умора. С уреда се постига бърз ефект при разграждане на мастните депа, 
                   стяга мускулите и извайва тялото.Процедурите с целутрон е добре да се правят всеки ден или през ден. Необходимо е да се направят
                    поне 20 процедури, равняващи се на три месеца активен фитнес. Ако целутронът се комбинира с масаж, ефектът ще е още по-бърз и 
                    забележим. Най-добре е в един и същи ден да се направи първо процедура с целутрон и след това масаж, а може и да се редуват в 
                    два различни дни.При първа процедура е добре да се използва по-нисък интензитет на честотата, като постепенно се увеличава със
                   следващите процедури. 



                    <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Целутрон 30 минути: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Целутрон 30 минути: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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

export function Press(){
  
  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
     
  }, [order])

    return(
      <Row style={{margin:'0px'}}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Антицелулитни отслабващи процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cellulite"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Пресотерапия</Card.Title>
                  <Card.Text as="span">
                  Пресотерапията е модерен, ефективен и безболезнен метод с изразен терапевтичен ефект за премахване на целулит и мастни 
                  натрупвания по тялото. Активира пасивната част на кръвообръщението – вените и лимфните съдове като по този начин стимулира 
                  дренажа на натрупаните токсини към прочистващите органи.Процедурата резорбира отоците, има освобождаващ и болкоуспокояващ ефект.
                   Води до промяна в контура на тялото, силуетът става по-фин, а проблемните, отекли зони биват разтоварени.Препоръчва се при 
                   тежест и умора в краката в резултат на нарушено кръвообръщение и отоци по крайниците, както и при целулит и затлъстяване.
                   Процедурата трае 30 минути,  много е приятна и осигурява обща релаксация и цялостно възстановяване на организма. Води до
                    усещане за лекота, облекчаване на тежестта в краката. Движите се лесно и леко, чувствате се по-слаба и стегната, без отоци и
                     болки в краката.Пресотерапията подобрява кръвообращението и увеличава лимфния дренаж.Процедурата е безспорна алтернатива на
                      липосукцията.



                    <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Пресотерапия 30 минути: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Пресотерапия 30 минути: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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

export function AntiCellulite(){
  
  const [order, setOrder] = useState(null);

  useEffect(() => {
    var currentOrder = JSON.parse(localStorage.getItem('order')) || [];
     if(order!==null){
      currentOrder.push(order);
      document.getElementById('cartButton').click();
    }
     localStorage.setItem('order', JSON.stringify(currentOrder));
     
  }, [order])

  return(
    <Row style={{margin:'0px'}}>

    <Col lg={12}>
      <NavTop />
      <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Антицелулитни отслабващи процедури</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Cellulite"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Антицелулитен масаж</Card.Title>
                <Card.Text as="span">
                Целулитът, наричан още липодистрофия, представлява увеличаване на броя на подкожните мастни клетки, което възниква в резултат на 
                стагнация (застой) на кръвообръщението и лимфния поток.Прилагането на антицелулитни масажи ще стимулира равномерното разпределение 
                на мастните клетки по естествен и безопасен начин.Антицелулитните масажи насърчават здравословния кръвен поток, което води до 
                предотвратяване на стареенето, като естествено стягат кожата.Всички антицелулитни масажи подобряват циркулацията на кръвта, с което
                 помагат на тялото да се отърве от натрупаните токсини. В резултат на което, изхвърляме излишните мазнини, а кожата ни става 
                 по-еластична и здрава, възвръщайки естествената си форма.Доказано е, че масажните техники насърчават растежа на мускулите, като
                  едновременно с това ги поддържат стегнати и красиво оформени.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                    <br/>
                    <span>Антицелулитен масаж 30 минути: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Антицелулитен масаж 30 минути: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Антицелулитен масаж + ръце 50 минути: 45лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Антицелулитен масаж + ръце 50 минути: 45лв.",price:45,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Антицелулитен масаж на ръце 20 минути: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Антицелулитен масаж на ръце 20 минути: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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