import React, {useState, useEffect} from "react";
import NavTop from "../NavTop";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';

function Manicure(){
    return(
<Row style={{ margin: '0px' }}>
      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
      </Col>
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '3%' }}>

        <Row>
          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Nails">
                <Image src={require('../../Images/Manicure/manicure.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Маникюр</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Gel">
                <Image src={require('../../Images/Manicure/gel.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Гел лак</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Uv">
                <Image src={require('../../Images/Manicure/uv.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">UV гел</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Repair">
                <Image src={require('../../Images/Manicure/repair.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Поправка на счупен нокът</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Decoration">
                <Image src={require('../../Images/Manicure/decoration.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Декорация на нокът</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/HandTherapie">
                <Image src={require('../../Images/Manicure/parafine.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Парафинова терапия за ръце</div>
              </a>
            </div>
          </Col>

          </Row>
      </Col>
    </Row>
    )
}
export default Manicure;

export function Nails(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Маникюр</Card.Title>
                <Card.Text as="span">
                Маникюрът е един от детайлите, които правят най-силно впечатление във визията на една жена.Днес той се слави с толкова широка 
                популярност, че погрешно е започнал да се възприема от мнозинството единствено като процес на оформяне и оцветяване на нокътя 
                в даден нюанс.Маникюрът е козметична разкрасяваща процедура за ноктите на ръцете.Обичайно процедурата включва пилене и оформяне на
                 ръбовете на нокътя, премахването или изразяването на мъртви тъкани и обработване с различни течности.Днес маникюрите са от голямо 
                 значение за козметичния свят, тъй като те засилват външния вид на ръцете по зашеметяващ начин. Но не става дума само за красота 
                 или външен вид, но и за здравето.Поддържането на маникюр би помогнало за насърчаване на по-добро здраве на ноктите на ръцете.
                 Професионалният маникюр помага за ексфолиране на кожата на ръцете, за придаването на по-мек и по-ясен вид. 

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Маникюр: 10лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Маникюр: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>
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

export function Gel(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Гел лак</Card.Title>
                <Card.Text as="span">
                Няма по-добър начин да си доставите голямо удоволствие от това да си направите маникюр с гел лак (гел маникюр). Малко
                 изкуство върху ноктите и оттенък според тенденцията Ви дават същата увереност, както модерното облекло и 
                 хубавата прическа. Ако се направи по правилния начин, гел маникюрът може да издържи до четири седмици.Красив, свеж, блестящ и най-
                 важното дълготраен маникюр, това е мечтата на голяма част от дамите. Всичко това може да получите от един гел лак.Гел лака може да
                   осигури бляскаво покритие без напукване или белене.Освен това, издръжливият гел лак означава, че можете да миете чинии, без да
                    се притеснявате, че ще развалите маникюра си.Маникюра с гел лак обикновено отнема малко повече време от този с обикновения лак 
                    за нокти. Можете да очаквате да прекарате около час, но това зависи от състоянието на ноктите ви и дали вече сте с гел лак,
                     когато пристигнете. Но пък времето си заслужава, защото ще се сдобиете с  перфектен и дълготраен маникюр.
                 
                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br/>
                      <span>Гел лак с две декорации: 30лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Гел лак с две декорации: 30лв.",price:30,id:(Math.random()*100)})}}>Заяви</button>
                      <br/>
                      <br/>
                      <span>Отстраняване на гел лак: 5лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Отстраняване на гел лак: 5лв.",price:5,id:(Math.random()*100)})}}>Заяви</button>
                      <br/>
                      <br/>
                      <span>Отстраняване на гел лак с оформяне и почистване на кожички: 10лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Отстраняване на гел лак с оформяне и почистване на кожички: 10лв.",price:10,id:(Math.random()*100)})}}>Заяви</button>                                                             
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

export function Uv(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>UV гел</Card.Title>
                <Card.Text as="span">
                В средата на осемдесетте години става популярна  ноктопластиката с UV гел, следвайки неимоверното развитие на ноктопластиката с 
                течност и акрилен прах. Като цяло геловете са със слаб мирис до такива без мирис поради по-високия им вискозитет, който значително
                 намалява изпаряването и мириса. Продуктите и услугите с UV гел осигуриха по-лесна техника на нанасяне, без да се налага смесване 
                 на материали.Всички гелове съдържат „олигомери”, които представляват къси предварително образувани вериги от мономери. Една верига
                  може да е създадена от близо 10 000 – 15 000 мономера.Тези преформени вериги създават плътна гел консистенция, която може да се 
                  нанесе с четка върху естествен нокът, върху удължител или да се изгради върху форма, след което да се полимеризира с UV светлина.  

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText"> 
                      <br />                
                     <span>Гел върху естествен нокът: 45лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Гел върху естествен нокът: 45лв.",price:45,id:(Math.random()*100)})}}>Заяви</button>  
                      <br />
                      <br />
                      <span>Изграждане с UV гел: 55лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Изграждане с UV гел: 55лв.",price:55,id:(Math.random()*100)})}}>Заяви</button>
                      <br />
                      <br />
                      <span>Поддръжка на UV гел: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Поддръжка на UV гел: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
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

export function Repair(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Поправка на счупен нокът</Card.Title>
                <Card.Text as="span">
                За нежния пол маникюрът е още един начин да подчертаете своя стил и женственост. Но със сигурност всяко момиче е било изправено 
                пред ситуация, при която, изглежда, външният вид на перфектния маникюр разваля един нокът, който се е счупил в неподходящия момент.
                 За много момичета това означава, че всички останали също ще трябва да бъдат подстригани и подстригани. Но какво ще стане, ако не 
                 ви харесва този изход от ситуацията? Възможно ли е да поправите счупен нокът и той да изглежда толкова добре, колкото преди?За да 
                 се убедите сами в това посетете студио Joys!За да избегнете неприятна ситуация в бъдеще, не забравяйте да използвате защитни 
                 ръкавици при почистване и миене на съдове, преразгледайте диетата си, а също така се погрижете за укрепването с грижовни кремове
                  и лечебни лакове.

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Поправка на счупен нокът: 5лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Поправка на счупен нокът: 5лв.",price:5,id:(Math.random()*100)})}}>Заяви</button>
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

export function Decoration(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Декорация на нокът</Card.Title>
                <Card.Text as="span">
                Върху ноктите се нанасят специални декорации за маникюр, като напоследък са модерни обемните изображения, които се постигат, като
                 върху нокътната плочка се залепва обемна фигура и се покрива с гел.Стилно е всички нокти да са лакирани в един цвят, и само един
                  най-добре безименният пръст да се различава с декорацията си. Така ще се получи ефект на хармония и акцент.За създаването на 
                  красива рисунка върху ноктите се използват три контрастни цвята. Основата може да е тъмна или светла. През деня е желателно да се
                   избират умерени тонове, а за вечерта са позволени ярките нюанси.Декорациите върху ноктите са различни – това могат да са малки
                    камъчета, специални лепенки, които са прозрачни, но върху тях има изобразена закачлива рисунка. Така се спестява времето за
                     рисуване върху ноктите.За да имате красиви и женствени ръце, не е важна само декорацията на маникюра, но и как точно се прави. 
                     Заповядайте при нас!   

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Декорация на нокът: 1лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Декорация на нокът: 1лв.",price:1,id:(Math.random()*100)})}}>Заяви</button>
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

export function HandTherapie(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Маникюр</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Manicure"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Парафинова терапия за ръце</Card.Title>
                <Card.Text as="span">
             Парафинът се прилага в козметиката от много години. Едно от най-полезните свойства на този материал е големият му топлинен капацитет.
               Чрез него парафинът затопля подлежащите тъкани и оказва известно налягане върху тях, което съдейства за доброто проникване на
               нанесените отдолу продукти.Ръцете са най-уязвимата част на тялото след лицето – именно кожата на ръцете най-често страда от 
               изсушаване, напукване, зачервяване и белене. Процедурата е подходяща за домакини и хора които работят с почистващи препарати на 
               студено и открито.Терапията е идеална за сухи ръце, които се нуждаят от екстремно овлажняване.Парафиновата терапия за ръце създава 
               приятно чувство на свежест и подмладяване на кожата.  След терапията с парафин ръцете добиват нежен копринен и здрав вид. Освен 
               приятната релаксация процедурата е подходяща при тендовагинити и ставни болки.   

                  <Row>
                
                 <Col xs={12} md={12} lg={10}>
                 <div className="cardText">
                      <br />
                      <br />
                      <br />
                      <span>Парафинова терапия за ръце: 15лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Парафинова терапия за ръце: 15лв.",price:15,id:(Math.random()*100)})}}>Заяви</button>
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