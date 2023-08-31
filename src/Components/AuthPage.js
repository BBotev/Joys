import React, { useEffect, useState } from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';

function AuthPage() {

  const name = localStorage.getItem('name');
  const check = localStorage.getItem('order');
  const id = localStorage.getItem('id');
  const gender = localStorage.getItem('gender');
  
  useEffect(()=>{
    if(check && JSON.parse(localStorage.getItem('order')).length>0){
      document.getElementById('cartButton').click();
    }
  })
  
  const[allOrders,setAllOrders]= useState([]);
  const[oneTime,setOneTime]=useState(true);

  try {
    if(oneTime){
      axios.post("https://joys-backend.netlify.app/api/getorders",{id:id})
      .then(res=>{
      setAllOrders(res.data);
      setOneTime(false);
      })
      }}
    catch (error) {
      console.log(error)
    }
  
  
return (
    <Row style={{ margin: '0px' }}>

      <Col lg={12}>
        <NavTop />
        <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
        <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>
          Здравей {name} и добре {gender==='man'?'дошъл':'дошла'} при нас!
        </h1>

      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '1%' }}>
        {
        !oneTime?<div>
        <h1 style={{textAlign:'center'}}>{allOrders.length>0?'Вашите поръчки са:':'Все още нямате направени поръчки'}</h1>
        <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
          <Row>
          {allOrders.map((element)=>
           <Col lg={4} md={6} sx={12} key={Math.random()}>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
          <li>
          <Accordion.Header style={{marginLeft:'-20px'}}><h3>Вид процедура:</h3></Accordion.Header>
          <Accordion.Body>{element.products+" "}</Accordion.Body>
          </li> 
          </Accordion.Item>
          </Accordion> 
          <li><h3>Дата на заявяване:</h3>{element.date}</li> 
          <li><h3>Обща сума:</h3>{element.totalSum} лв.</li>           
          <hr style={{height:'3px', background:'red'}}/>       
          </Col>)}
          </Row>
          </ul>
          </div>:<h1 style={{textAlign:'center'}}>Зареждане...</h1>
          }
      </Col>

    </Row>
  )
}
export default AuthPage;
