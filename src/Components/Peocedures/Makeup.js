import React, {useState,useEffect} from "react";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Makeup(){
    return(
<Row style={{ margin: '0px' }}>

<Col lg={12}>
    <NavTop />
    <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
    <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Грим</h1>
</Col>

<Col lg={2} xs={12}>
    <NavLeft />
</Col>
<Col lg={10} xs={12} style={{ marginTop: '6%' }}>
    <Row>

        <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
                <a href="/ProMakeup">
                    <Image src={require('../../Images/Makeup/pro.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                    <div className="proceduresText">Професионален грим</div>
                </a>
            </div>
        </Col>

        <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
                <a href="/ProPlus">
                    <Image src={require('../../Images/Makeup/proplus.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                    <div className="proceduresText">Професионален грим с изкуствени мигли</div>
                </a>
            </div>
        </Col>

        <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
                <a href="/Teach">
                    <Image src={require('../../Images/Makeup/teach.jpeg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                    <div className="proceduresText">Курс по самогримиране</div>
                </a>
            </div>
        </Col>
        
    </Row>
</Col>
</Row>

    )
}
export default Makeup;

export function ProMakeup(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Грим</h1>
      </Col>
  
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
  
      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Makeup"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Професионален грим</Card.Title>
                  <Card.Text as="span">
                  Гримът – това не е маска и не е толкова мода. Гримът – това е изкуството да подчертаем достойнствата на лицето и да изявим 
                  неговата индивидуалност – независимо от това, кое е модерно в момента!Естествено, давайки съвети, професионалният гримьор взема
                   под внимание не само модните тенденции, стреми се главно към това, човека да изглежда красив и да излъчва чувство на увереност в
                    себе си.Избора на грим зависи изцяло от Вашето желание.Гримът е начинът да се почувстваме себе си, да заявим стила си и да
                     изразим позиция.Гримът е не просто способ да подчертаем красотата си, но често е и скритото ни оръжие, което ни дава 
                     самочувствието да се справим с предизвикателствата на нашето ежедневие.При грима не става въпрос за правила. Смисълът е в това
                      кое е подходящо за Вас!За да изглежда една жена прекрасно са й достатъчни хубава кожа, хубава коса, хубави вежди, една усмивка и 
                    малко спирала. 

                    <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Професионален грим: 60лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Професионален грим: 60лв.",price:60,id:(Math.random()*100)})}}>Заяви</button>
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

export function ProPlus(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Грим</h1>
      </Col>
  
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
  
      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Makeup"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Професионален грим с изкуствени мигли</Card.Title>
                  <Card.Text as="span">
                  Изкуствените мигли са „женското оръжие“, с което да омаете всеки мъж със съблазнителния, красив и загадъчен поглед. Знаем, че за 
                  всички е мачта да имат дълги и гъсти мигли, но много малко в действителност притежават такива мигли. За да пърхате с мигли като
                   пеперуда вече не е нужно да използвате тоновe спирала. А ако и спиралата не ви дава този ефект, можете да се обърнете към 
                   изкуствените мигли, за да придобиете това неустоимо женско излъчване.Изкуствените мигли компенсират природата, която ни е дала
                    къси и тънички миглички или когато с възрастта миглите ни стават по-къси и по-редки.Освен за грим и красота изкуствените мигли
                   са предназначени и за защита на някои хронични проблеми на окото, в случай, че миглите растат на вътре или прекалено изправени
                    навън от окото.
                  <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Професионален грим с изкуствени мигли: 70лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Професионален грим с изкуствени мигли: 70лв.",price:70,id:(Math.random()*100)})}}>Заяви</button>
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

export function Teach(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Грим</h1>
      </Col>
  
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>
  
      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Makeup"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
                <Card.Body>
                  <Card.Title>Курс по самогримиране</Card.Title>
                  <Card.Text as="span">
                  Курса е индивидуално насочен към всички дами, които искат да се научат да се гримират красиво и правилно. Това е нашия основен
                   курс за грим.Грим техниките, които подбираме, са съобразени изцяло със особеностите на всяко лице.Този курс е насочен към всяка жена, която иска да се гримира сама, но да изглежда като от професионалист. Ние ще ви 
                  покажем всички тънкости за грима не само на теория, но и в практически занимания.  След преминаването на курса вие ще имате
                   увереност в решенията и подхода за грим в ежедневието и по официални поводи.Ако искате да разберете как да се гримирате сами 
                   професионално, то този курс е за вас. Ще научите тънкостите на грима, ще разберете как да определяте какъв грим за каква 
                   ситуация да използвате и ще придобиете много нови знания и умения.

                    <Row>
                  
                   <Col xs={12} md={12} lg={10}>
                   <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Курс по самогримиране: 160лв. </span><button className="AddButton" 
                   onClick={()=>{setOrder({text:"Курс по самогримиране: 160лв.",price:160,id:(Math.random()*100)})}}>Заяви</button>
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