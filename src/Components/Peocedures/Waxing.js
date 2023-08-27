import React,{useState,useEffect} from "react";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Waxing(){
    return(
        <Row style={{ margin: '0px' }}>

        <Col lg={12}>
            <NavTop />
            <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
            <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Кола маска</h1>
        </Col>

        <Col lg={2} xs={12}>
            <NavLeft />
        </Col>
        <Col lg={10} xs={12} style={{ marginTop: '6%' }}>
            <Row>

            <Col lg={6} md={6} sm={12} style={{ marginTop:'2%'}}>
                    <div className="procedures">
                        <a href="/Woman">
                            <Image src={require('../../Images/Waxing/woman.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                            <div className="proceduresText">Жени</div>
                        </a>
                    </div>
                </Col>
                
                <Col lg={6} md={6} sm={12} style={{ marginTop:'2%'}}>
                    <div className="procedures">
                        <a href="/Man">
                            <Image src={require('../../Images/Waxing/man.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                            <div className="proceduresText">Мъже</div>
                        </a>
                    </div>
                </Col>

                
                
            </Row>
        </Col>
    </Row>
    )
}

export default Waxing;

export function Woman(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Кола маска</h1>
      </Col>
  
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
  
      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Waxing"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Кола маска жени</Card.Title>
                  <Card.Text as="span">
                  Епилацията с кола маска е най- лесния и разпространен метод за премахване на нежеланото окосмяване.Ефектът от процедурата е 
                  индивидуален, но в повечето случаи е поне 2-3 седмици. Като след процедурата косъмчетата не са твърди и груби, каквито стават 
                  след употребата на други средства за обезкосмяване.Кола маската се намазва върху окосмения участък и след налагане върху нея на
                   ленти от плат или хартия, космите се издърпват.
                  
                    <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <span>Цяло тяло: 55лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на цяло тяло - жени: 55лв.",price:55,id:(Math.random()*100)})}}>Заяви</button>
                        <br />
                        <br />
                        <span>Крака: 25лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на крака - жени: 25лв.",price:25,id:(Math.random()*100)})}}>Заяви</button>
                        <br />
                        <br />
                        <span>1/2 крака: 20лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на 1/2 крака - жени: 20лв.",price:20,id:(Math.random()*100)})}}>Заяви</button>
                        <br />
                        <br />
                        <span>Ръце: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на ръце - жени: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
                       <br />
                       <br />
                       <span>1/2 ръце: 10лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на 1/2 ръце - жени: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>
                       <br />
                       <br />
                       <span>Мишници: 6лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на мишници - жени: 6лв.",price:6,id:(Math.random()*100)})}}>Заяви</button>
                       <br />
                       <br />
                       <span>Интим: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска интим - жени: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
                       <br /> 
                       <br />
                       <span>Корем: 5лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на корем - жени: 5лв.",price:5,id:(Math.random()*100)})}}>Заяви</button>
                       <br />
                       <br />
                       <span>Кръст: 5лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на кръст - жени: 5лв.",price:5,id:(Math.random()*100)})}}>Заяви</button>
                       <br />
                       <br />
                       <span>Горна устна: 5лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на горна устна - жени: 5лв.",price:5,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>
                    
                    <Col xs={12} md={12} lg={2} className="cardWoman">
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

export function Man(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Кола маска</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Waxing"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Кола маска мъже</Card.Title>
                <Card.Text as="span">
                Епилацията с кола маска е най- лесния и разпространен метод за премахване на нежеланото окосмяване.Ефектът от процедурата е 
                индивидуален, но в повечето случаи е поне 2-3 седмици. Като след процедурата косъмчетата не са твърди и груби, каквито стават 
                след употребата на други средства за обезкосмяване.Кола маската се намазва върху окосмения участък и след налагане върху нея на
                 ленти от плат или хартия, космите се издърпват. Космите при кола маска се премахват от корен и с всяка следваща процедура
                 стават по-малки и по-тънки.
                
                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <span>Цяло тяло: 90лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на цяло тяло - мъже: 90лв.",price:90,id:(Math.random()*100)})}}>Заяви</button>
                      <br />
                      <br />
                      <span>Крака: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на крака - мъже: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
                      <br />
                      <br />
                      <span>Ръце: 20лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на ръце - мъже: 20лв.",price:20,id:(Math.random()*100)})}}>Заяви</button>
                     <br />
                     <br />
                     <span>1/2 ръце: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на 1/2 ръце - мъже: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
                     <br />
                     <br />
                     <span>Мишници: 8лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на мишници - мъже: 8лв.",price:8,id:(Math.random()*100)})}}>Заяви</button>
                     <br />
                     <br />
                     <span>Корем: 10лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на корем - мъже: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>
                     <br /> 
                     <br />
                     <span>Гърди: 10лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на гърди - мъже: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>
                     <br />
                     <br />
                     <span>Гръб: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кола маска на гръб - мъже: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
                    </div>
                  </Col>
                  
                  <Col xs={12} md={12} lg={2} className="cardMan">
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