import React, {useEffect,useState} from "react";
import NavTop from "../NavTop";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NavLeft from "../NavLeft";
import Card from 'react-bootstrap/Card';
function Cosmetics() {
  return (
    <Row style={{ margin: '0px' }}>
      <Col lg={12}>
        <NavTop />
        <img src={require('../../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>
      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '3%' }}>

        <Row>
          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Face">
                <Image src={require('../../Images/Cosmetics/face.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Масаж на лице,шия и деколте</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Cleaning">
                <Image src={require('../../Images/Cosmetics/cleanFace.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Почистване на лице</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Diamant">
                <Image src={require('../../Images/Cosmetics/diamant.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Диамантено микродермабразио</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Led">
                <Image src={require('../../Images/Cosmetics/led.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">LED терапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Hydro">
                <Image src={require('../../Images/Cosmetics/hydro.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Хидратираща терапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Acne">
                <Image src={require('../../Images/Cosmetics/acne.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Anti-acne терапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Light">
                <Image src={require('../../Images/Cosmetics/snow.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Изсветляваща терапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/AntiAge">
                <Image src={require('../../Images/Cosmetics/antiage.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Anti-age терапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Oxygen">
                <Image src={require('../../Images/Cosmetics/h2o.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Кислородна мезотерапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/NoEdge">
                <Image src={require('../../Images/Cosmetics/beziglena.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Безиглена мезотерапия</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Radio">
                <Image src={require('../../Images/Cosmetics/radio.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Радиочестотен лифтинг</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Acid">
                <Image src={require('../../Images/Cosmetics/eksfolirashta.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Ексфолираща терапия с киселина</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Lifting">
                <Image src={require('../../Images/Cosmetics/migli.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Лифтинг на мигли</div>
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop:'2%'}}>
            <div className="procedures">
              <a href="/Painting">
                <Image src={require('../../Images/Cosmetics/vejdi.jpg')} fluid thumbnail style={{ width: '306px', height: '220px' }} />
                <div className="proceduresText">Боядисване и оформяне на вежди с къна</div>
              </a>
            </div>
          </Col>

        </Row>
      </Col>
    </Row>
  )

}
export default Cosmetics;

export function Face() {
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Масаж на лице,шия и деколте</Card.Title>
                <Card.Text as="span">
                  Процедурата повишава тонуса на кожата и лицевата мускулатура, подобрява кръвообращението локално, повишава клетъчния метаболизъм
                  и лимфния дренаж. Всичко това води до подобрена структура и цвят на кожата, стегнат лицев контур, предотвратяване на появата на
                  бръчки. Освен това, масажът на лице балансира мастната секреция, което го прави подходящ и за мазна кожа.Масажът на лице влияе
                  особено добре при несъвършенства в деликатната зона около очите- благодарение на него отоците около очите се дренират успешно,
                  а следите от умора и тъмните кръгове са значително редуцирани. Масажът на лице, съчетан с подходящата козметика спомага за
                  по- бързото и пълноценно абсорбиране на активните съставки, съответно- до по- изразено действие на приложения продукт.
                  Не на последно място, добре направеният масаж е една отлична анти- стрес терапия, а както знаем, стресът е един от най-
                  неблагоприятните фактори, влияещи върху здравето и красотата в наши дни.
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <span>Масаж на лице,шия и деколте 30 минути: 20лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Масаж на лице,шия и деколте 30 минути: 20лв.",price:20,id:(Math.random()*100)})}}>Заяви</button>
                        <br />
                        <br />
                        <span>Масаж на лице,шия и деколте + маска 40 минути: 25лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Масаж на лице,шия и деколте + маска 40 минути: 25лв.",price:25,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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
export function Cleaning() {
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Почистване на лице</Card.Title>
                <Card.Text as="span">
                  Почистването на лицето остранява натрупаните замърсяванията, регулира себумната секреция,
                  подобрява състоянието на порите и текстурата на кожата.Голям процент от проблемите с кожата на лицето, включително акнето и
                  разширените пори, са резултат от непочиствана или неправилно почиствана кожа.Затова козметичната процедура “Почистване на лице”
                  е препоръчителна за всяка жена и мъж, за всеки тип кожа и всяка възраст.Честотата и интензивността на почистването влияят върху
                  текстурата, еластичността и здравето на кожата. Целта – чиста, здрава и сияеща кожа, с равномерен тен и без комедони – се постига
                  с лекота при редовна грижа!Препоръчително е  да използвате подходящите почистващи продукти за домашна грижа, подпомагащи ефектите
                  от процедурата.За живот в замърсена градска среда веднъж в сезона препоръчваме фокусирана детоксикираща грижа, която да пречисти
                   лицето в дълбочина с коктейл от ключови антиоксиданти.
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Почистване на лице 60/90 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Почистване на лице 60/90 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Diamant(){
 
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Диамантено микродермабразио</Card.Title>
                <Card.Text as="span">
                Диамантеното микродермабразио е единствената високо-технологична процедура – механичен метод на пилинг. При него, чрез специални
                 стерилни диамантени микрочастици се ексфолира най-горният слой на кожата. Към повърхността на кожата се насочва струя диамантени
                  микрокристали, които ексфолират епидермиса /най-горният слой на кожата/. С помощта на вакуумното му действие се подобрява 
                  кръвообращението и се почистват порите. Подобреното кръвообращение на свой ред, стимулира образуването на колаген и еластин в 
                  дермата /същинската кожа/, което води до по-тонизирана, стегната и почистена кожа. Благодарение на нея се постига подмладяване,
                   регенерация, контролиране на себума, свиване на порите и депигментация.Постигането на оптимален резултат налага серия от
                    процедури. Техният брой, а и период, през който ще се извършват зависи от типа и нуждите на кожата Ви.
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Диамантено микродермабразио 50 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Диамантено микродермабразио 50 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Led(){
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>LED терапия</Card.Title>
                <Card.Text as="span">
                LED терапията е неинвазивна козметична процедура, която има биостимулиращо въздействие върху функциите на кожата. Светодиодната 
                терапия работи чрез излъчване на терапевтични (безвредни) дължини на вълните на светлината върху кожата. Терапията е известна със
                 своите лечебни и противовъзпалителни свойства и има множество приложения в много области на медицината. Процедурата се прави с 
                 медицински апарат със светлинни панели, който излъчва няколко цвята студена светлина (LED), с точно определена дължина на вълната.
                  Тези дължини на вълната включват 465nm (синя светлина) и 640 nm (червена видима светлина) в тъканите и осигуряват максимални 
                  резултати в минимално време. Енергията доставена от светодиодите подобрява клетъчния метаболизъм, ускорява възстановяването на
                   увредените кожни клетки, както и стимулира производството на колаген.
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>LED терапия 45 минути: 30лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"LED терапия 45 минути: 30лв.",price:30,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Hydro(){
  
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Хидратираща терапия</Card.Title>
                <Card.Text as="span">
                Хидратацията е много важен фактор, както за организма така и за кожата. За да изглежда една кожа свежа, млада и сияйна трябва да е
                 хидратирана в дълбочина. Хидратираната кожа се запазва по-дълго здрава и еластична. Както в природата водата е най-необходима за
                  оцеляване на живите организми, така и кожата има нужда от нея, за да запази младежкия си вид. Ежедневната хидратация допринася за
                   по-бавното състаряване на кожата.Кожата е най-големият орган в човешкото тяло. За съжаление обаче, ние често я забравяме, а от 
                   там идва и нейната дехидратация. Всеки тип кожа може да бъде дехидратирана, което води до много проблеми: по-бързото омазняване,
                    загуба на еластичност и по-бързата поява на белезите на стареене.През летния сезон е много важно да не оставяме слънцето да 
                    увреди нашата кожа. През зимата вятърът и студът действат пагубно на кожата ни. 
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Хидратираща терапия 60 минути: 35лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Хидратираща терапия 60 минути: 35лв.",price:35,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Acne(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Anti-acne терапия</Card.Title>
                <Card.Text as="span">
                За жалост акнето не е проблем само на подрастващите, а и на голям процент от възрастното население. Лъщящата кожа, широките пори и
                 гнойните пъпки са неприятен козметичен и здравословен проблем, решаването, на който е цел на тази анти-акне терапия. Борба с 
                 акнетичната кожа – терапията включва почистване на кожата, отстраняване от порите на натрупаната мастна секреция и кисти, с което
                  се премахва възможността за възпалителни процеси. Терапията е за дълбоко почистване на проблемна и мазна кожа. Идеална серия за 
                  поддържане на акнетичната кожа, независимо от стадия. Предотвратява образуването на комедони, свива порите и почиства в дълбочина.
                  Анти-акне терапия e процедура, кото се прилага с цел отстраняване на мъртвите клетки от най-горния слой на епидермиса, за да се
                   даде възможност на кожата да диша и за по-доброто проникване на антибактериалните  продукти. 
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Anti-acne терапия 60 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Anti-acne терапия 60 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Light(){
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Изсветляваща терапия</Card.Title>
                <Card.Text as="span">
                Потъмняването на кожата е защитен механизъм към вредното влияние на слънчевите лъчи. Много често се натрупва пигмент неравномерно в
                 различните части на лицето. Първата и основна превантивна мярка е редовно използване на фотозащитни кремове за осигуряване ма
                  максимална защита. Вече появилите се пигментации се третират със специфични професионални продукти и апарати.Терапията е лечение
                   на хиперпигментация,което премахва пигментните петна и предотвратява образуването на пигмента меланин. Формулирани с 
                   L-аспарагинова киселина и черница, видимо изравняват тена на кожата, намаляват тъмните кръгове под очите и спомагат тя да
                    изглежда естествена и сияеща.Едновременно с това хидратират и защитават от свободните радикали.Може да се прилага и при тъмни
                     кръгове под очите.Благодарение на активните съставки и наситените формули видимо пречиства и насища кожата с кислород.
                     Подпомага клетъчното обновяване и клетъчното дишане.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Изсветляваща терапия 60 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Изсветляваща терапия 60 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function AntiAge(){
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Anti-age терапия</Card.Title>
                <Card.Text as="span">
                Неувяхващата младост винаги се свързва с добре изглеждаща, стегната кожа, без бръчки, супер хидратирана, със свеж и равномерен тен.
                 Но дали с напредването на възрастта, или заради някои вредни навици, всеки може да се окаже в ситуация, в която да е загубил
                  младежкия си вид. А спадът на секретирането на колаген и еластин от кожата допълнително може да се окаже спънка в запазването на
                   гладката и сияйна кожа.Ако искате да възвърнете свежия си вид и да продължите да получавате комплименти за младежкия начин, 
                   по който изглеждате, то анти ейдж терапията под формата на интравенозните инфузия е точно подходяща за вас. Това е иновативна и
                    изключително ефикасна процедура, с която кожата ви отново може да заблести, без да се налага да прибягвате до хирургична намеса
                     или друг вид естетически корекции.Терапията достига директно в епидермалните клетки, като те биват хидратирани и подхранени в 
                     дълбочина.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Anti-age терапия 50 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Anti-age терапия 50 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Oxygen(){
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Кислородна мезотерапия</Card.Title>
                <Card.Text as="span">
                Кислородната мезотерапия насища кожата до най-дълбоките слоеве с кислород. Осигурява дълбокото проникване на козметични продукти и 
                кислород дълбоко в епидермиса чрез поредица импулси с високо налягане.Кислородът е проводник на всички полезни, хидратиращи и 
                подхранващи вещества в клетките на кожата. При неговия недостиг клетките нямат достатъчно сила да усвояват необходимите им 
                подхранващи вещества и да се обновяват. Възраст, физиология, стрес, тютюнопушене, замърсяване на околната среда са основните 
                фактори водещи до недостиг на кислород, което се изписва негативно върху кожата.Кислородната мезотерапия компенсира кислородния глад в
                 кожата. Тя увеличава транспорта на кислород дълбоко в клетките и засилва микроциркулацията. Стимулира клетъчното дишане, влияе 
                 положително на метаболизма и повишава регенеративните процеси.Обработка с накрайник за кислородната терапия насищаща кожата до 
                 най-дълбоките слоеве с кислород.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Кислородна мезотерапия 50 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Кислородна мезотерапия 50 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function NoEdge(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Безиглена мезотерапия</Card.Title>
                <Card.Text as="span">
                След като премине 30 години, всяка жена си има своя ”трън в очите”- тъмните петна и неравномерния тен, ситните бръчици около очите,
                 разширени пори около носа и така нататък.И обичайно и се препоръчва да започне с процедурата безиглена мезотерапия.С мезотерапията
                  се въвеждат подкожно в кожата молекули хиалуронова киселина, витамини, аминокиселини и други полезни съставки. Както подсказва
                   корена на думата „МЕЗО“, с тази процедура успяваме да стигнем до средния слой на кожата.Именно с безиглената мезотерапия 
                   коктейлите с хиалуронова киселина и полезни съставки се прокарват в кожата с помощта на специално устройство, което излъчва 
                   пулсиращи магнитни вълни.Благодарение на тези вълни, пропускливостта на клетъчната мембрана се увеличава почти 400 пъти, което 
                   способства за успешното прокарване на активните съставки в средния слой на кожата.Следователно, безиглената мезотерапия е добра 
                   алтернатива за тези от вас, които се страхуват от иглите.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Безиглена мезотерапия 60 минути: 45лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Безиглена мезотерапия 60 минути: 45лв.",price:45,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Radio(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Радиочестотен лифтинг</Card.Title>
                <Card.Text as="span">
                Радиочестотният лифтинг е нехирургически метод за подобряване структурата на кожата, който се използва успешно, както за 
                подобряване вида и структурата на кожата на лицето, така и на тяло.Целта на радиочестотата е да генерира висока темепратура в
                 дълбоките слоеве на кожата (дермата), където еластиновите и колагенови нишки като скеле поддържат кожата опъната, стегната и 
                 здрава. За разлика от хирургическия лифтинг, където няма промяна в структурата на кожата и тя продължава да старее със същите
                  темпове, то при радиочестотният лифтинг настъпва стимулация на фибробластните клетки, които започват да произведат нов еластин и
                   колаген. Дермата се удебелява, реконструира се овала, фините бръчки изчезват и кожата става видимо по-млада и стегната.
                   Процедурата е подходяща за всеки, който желае да премахне леки до средно изразени повърхностни бръчки, да постигне умерен 
                   лифтинг-ефект, стягане и повдигане на кожата на лицето, двойна брадичка, шия и деколте.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Радиочестотен лифтинг 60 минути: 45лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Радиочестотен лифтинг 60 минути: 45лв.",price:45,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Acid(){
 
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
      <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
    </Col>

    <Col lg={2} xs={12}>
      <NavLeft />
    </Col>

    <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
    
        <Row>
        <Col lg={1} xs={12} style={{textAlign:'center'}}>
        <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
        </Col>
       
        <Col lg={11} xs={12}>
          <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
           <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Ексфолираща терапия с киселина</Card.Title>
                <Card.Text as="span">
                Ако се използват в правилните концентрации, киселините всъщност са едни от най-полезните съставки в грижата за кожата. Те са 
                чудодейните инструменти за борба с акне, бръчки, кафяви петна, белези и неравен тен на кожата.Вероятно думата „киселина” 
                предизвиква асоциация за бълбукащи епруветки в часовете по химия. Но киселините са ваши приятели и могат да имат траен ефект върху
                 текстурата и тонуса на кожата. Ако разгледаме скалата на ph, всяко вещество под 7 се счита за киселинно, а над него – за основно.
                  Така че по дефиниция има тонове съставки за грижа за кожата, които вероятно не смятате за киселини (като витамин С, например),
                  но могат да бъдат категоризирани като такива.Козметичните продукти с киселини у дома, така и пилингите в клинични условия могат
                   да дадат страхотни резултати – стига да изберете подходящия за вас. Основната разлика между домашните пилинги и техните аналози
                    в клинични условия е нивото на интензивност. 

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Ексфолираща терапия с киселина 60 минути: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Ексфолираща терапия с киселина 60 минути: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Lifting(){
 
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Лифтинг на мигли</Card.Title>
                <Card.Text as="span">
                Лифтинга на мигли е процедура за подсилване, удължаване и извиване на естествени мигли.Това е революционен метод,  при който 
                естествените мигли се повдигат, удължават и им се придава допълнителен обем без да се използва 
                изкуствено удължаване или спирала. Процедурата е безболезнена и трае между 45 – 60 минути.По-голямата част от това време се 
                изразходва в очакване да се разгърне ефектът от извиващите и оцветяващи препарати – серумът, багрилото и т.н.Включва повдигане, 
                подсилване иоцветяване на миглите с ефикасна и нежна техника.Резултатът е изумителни мигли от 6 до 8 седмици, които нямат нужда да
                 бъдатподдържани с допълнителни екстеншъни или спирала.Това е процедура, която ви дава по-плътни и по-обемни мигли без ежедневното 
                  използване на каквито и да било продукти. Естествените мигли са подсилени от корена, което им придава повдигнат, удължен вид.
                   Идеята е да се подчертае, това което вече имате с натурален завършек.

                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Лифтинг на мигли: 40лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Лифтинг на мигли: 40лв.",price:40,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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

export function Painting(){
  
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
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Козметични процедури</h1>
      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '0.5%' , textAlign:'center' }}>
      
          <Row>
          <Col lg={1} xs={12} style={{textAlign:'center'}}>
          <a href="/Cosmetics"><img src={require('../../Images/arrow.png')} alt="arrow" style={{width:'50px'}}/></a>
          </Col>
         
          <Col lg={11} xs={12}>
            <Card style={{width: '80%', textAlign: 'center',border: 'thick double black',fontFamily:'cursive'}} className="card">
             <Card.Header style={{ borderBottom: 'thick double black', fontSize: '30px' }}>Joys</Card.Header>
              <Card.Body>
                <Card.Title>Боядисване и оформяне на вежди с къна</Card.Title>
                <Card.Text as="span">
                Боядисването с къна се използва все по-често, поради факта, че къната е напълно натурален продукт, а новите производители 
                предоставят богата палитра от цветове за всеки вкус.  Процедурата е и подходяща за тези дами, които искат трайно подчертани и 
                плътни вежди, но се страхуват от микропигментация/перманентен грим.Процедурата не е сложна, но е препоръчително да се доверите на
                 професионалист, който има опит в рисуването и оформянето на красиви вежди.Както при традиционното боядисване на вежди, целта на
                  процедурата е да се подчертае формата, да се създаде наситеност, да се прикрият липсващи косъмчета (ако има такива) и след 
                  процедурата да се радвате на едни красиви и обемни вежди, които придават изразителност на погледна и подмладяват лицето.За 
                  разлика от традиционното боядисване на веждите с боя, тук използваме къна – напълно натурален продукт, който има свойството да
                   възстановява и стимулира растежа на собствения косъм. Резултатът от процедурата е по-траен.
                  <Row>

                    <Col xs={12} md={12} lg={10}>
                      <div className="cardText">
                        <br />
                        <br />
                        <br />
                        <span>Боядисване и оформяне на вежди с къна: 25лв. </span><button className="AddButton" 
                    onClick={()=>{setOrder({text:"Боядисване и оформяне на вежди с къна: 25лв.",price:25,id:(Math.random()*100)})}}>Заяви</button>
                      </div>
                    </Col>

                    <Col xs={12} md={12} lg={2}>
                      <div>
                        <br />
                        <Image src={require('../../Images/joysLogo.jpg')} alt="cardPic" fluid style={{ width: '120px' }} />
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