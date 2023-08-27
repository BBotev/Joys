import React, {useState,useEffect} from "react";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Therapies(){
    return(
        <Row style={{margin:'0px'}}>

        <Col lg={12}>
          <NavTop />
          <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
          <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Терапии</h1>
        </Col>
  
        <Col lg={2} xs={12}>
          <NavLeft />
        </Col>
        <Col lg={10} xs={12} style={{ marginTop: '3%' }}>
          <Row>
            <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
              <div className="procedures">
                <a href="/Shoko">
                  <Image src={require('../../Images/Therapies/shoko.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                  <div className="proceduresText">Шоколадова терапия</div>
                </a>
              </div>
            </Col>
  
            <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
              <div className="procedures">
                <a href="/Honey">
                  <Image src={require('../../Images/Therapies/honey.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                  <div className="proceduresText">Детоксикираща терапия с мед /гръб/</div>
                </a>
              </div>
            </Col>
  
            <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
              <div className="procedures">
                <a href="/Peeling">
                  <Image src={require('../../Images/Therapies/pilling.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                  <div className="proceduresText">Пилинг</div>
                </a>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
              <div className="procedures">
                <a href="/Paraffin">
                  <Image src={require('../../Images/Therapies/parafin.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                  <div className="proceduresText">Парафинова терапия</div>
                </a>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    )
}
export default Therapies;

export function Shoko(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Терапии</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Therapies"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Шоколадова терапия</Card.Title>
                <Card.Text as="span">
                Шоколадовата терапия е истинска наслада за кожата и душата. Активните съставки на какаото, действат тонизиращо, подобряват 
                кръвообращението и стимулират клетъчната регенерация. Остатъчния аромат действа стимулиращо и ободряващо.Шоколадовата терапия е
                 реструктурираща, стягаща и насищаща кожата с витамини и полифеноли. Тя е една деликатна анти-стрес процедура, която ще възвърне
                  свежестта, блясъка и нежността на Вашето лице.Шоколадът е силен антиоксидант и също така подхранва кожата.Целта на дълбокия 
                  шоколадов масаж е да нахрани както кожата, така и душата. Той пробужда сетивата, възстановява хармонията в тялото, зарежда кожата
                   с антиоксиданти, а духа – с положителна енергия и ведро настроение. Чувствате се преобразени, преродени, обновени.Масажът с 
                   шоколад стимулира производството на ендорфин – хормонът на щастието, защото притъпява физическата болка, намалява емоционалното
                    напрежение и води до еуфория.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Шоколадова терапия 75 минути: 65лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Шоколадова терапия 75 минути: 65лв.",price:65,id:(Math.random()*100)})}}>Заяви</button>
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

export function Honey(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Терапии</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Therapies"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Детоксикираща терапия с мед /гръб/</Card.Title>
                <Card.Text as="span">
                Медната терапия е част от древните медицински практики на Египет, Китай и Гърция.Съдържанието на аминокиселини, микроелементи, 
                витамини и други биологично-активни вещества на меда и цветния прашец са изключително полезни. Те са внесени в кошера направо от
                 растенията и са преработени и съхранени при 35°С, без консерванти и термична обработка. По такъв начин се запазват и ценните 
                 съставки на билките, от които са добити. Използването на меда, като масажно средство помага на кожата да усвои всички, съдържащи 
                 се в меда полезни вещества.Ефектът от медния масаж е “изсмукване“, „изпомпване“ от тъканите на тялото на натрупаните с години 
                 шлаки. Масажът с мед влияе силно тонизиращо на целия организъм и се прилага при всички възможни състояния на дискомфорт или
                  дисбаланс във функционирането му, като въздейства на тъканите в дълбочина и възстановява естествената способност на организма да
                 се самопречиства от отровите.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Детоксикираща терапия с мед (гръб) 40 минути: 45лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Детоксикираща терапия с мед (гръб) 40 минути: 45лв.",price:45,id:(Math.random()*100)})}}>Заяви</button>
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

export function Peeling(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Терапии</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Therapies"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Пилинг</Card.Title>
                <Card.Text as="span">
                Пилингът е взаимодействие на кожата най-често с различни видове киселини. Това се отнася до химическите пилинги. Пилингът може да
                 бъде и чисто ексфолиативен – той е козметичен и се прави с цел да се премахне най-повърхностния рогов слой клетки от кожата, за да
                  стане тя по-гладка, по-свежа и по-сияйна. Ексфолиативният пилинг се прави с помощта на частици, т.е. с крем, в който има някаква
                   абразия.Абразивните частици са най-различни видове и този пилинг е преимущество на чистата козметика. Използва се като допълващо
                    средство при различни козметични процедури. Обикновено може да се започне с един абразивен пилинг, за да се отвори кожата и да
                     може да поеме по-добре съставните части на кремовете.Благодарение на пилинга може да се лекува акне, да се изглаждат бръчки, да
                      се премахват петънца и леки белези и др.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                    <br/>
                    <span>Пилинг на цяло тяло 30 минути: 25лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Пилинг на цяло тяло 30 минути: 25лв.",price:25,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Пилинг на гръб: 10лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Пилинг на гръб: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>
                    <br />
                    <br />
                    <span>Пилинг на крака: 15лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Пилинг на крака: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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

export function Paraffin(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Терапии</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Therapies"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Парафинова терапия</Card.Title>
                <Card.Text as="span">
                Парафиновата терапия е една от най – приятните процедури. Топлият парафин оказва и лечебно въздействие – той се използва при 
                наличието на артрит, премахва възпалителните процеси и ненужните соли. Лечебният ефект на парафина се обуславя от топлинното му, 
                химическо и механично въздействие. В резултат на топлинното въздействие се усилват обменните процеси и посредством това и 
                образуването на биологически активните вещества. Тази процедура стимулира процеса на регенерация и увеличава количеството на
                 функциониращите капиляри. Топлината на парафина спомага да се намали болката в ставите, стимулира притока на кръв на мястото, 
                 където е поставен. Топлината разпуска мускулите и прави парафиновото лечение подходящо за начало на масажна процедура или друга
                  физическа терапия. Поради топлината се отделя голямо количество вода от кожата, но парафина не дава възможност тя да се усвои и 
                  епидермисът се овлажнява отново. Топлата парафинова терапия е много подходяща за кожата, която е пострадала от студа.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Парафинова терапия: 15лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Парафинова терапия: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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