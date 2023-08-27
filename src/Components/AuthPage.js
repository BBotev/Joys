import React, { useEffect, useState } from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function AuthPage() {

  const name = localStorage.getItem('name');
  const check = localStorage.getItem('order');
  const id = localStorage.getItem('id');
  
  useEffect(()=>{
    if(check && JSON.parse(localStorage.getItem('order')).length>0){
      document.getElementById('cartButton').click();
    }
  })
  
  const[allOrders,setAllOrders]= useState([]);
  const[oneTime,setOneTime]=useState(true);
   
  try {
    if(oneTime){
      axios.post("http://localhost:8000/getorders",{id:id})
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
          Здравей {name} и добре дошъл при нас!
        </h1>

      </Col>

      <Col lg={2} xs={12}>
        <NavLeft />
      </Col>

      <Col lg={10} xs={12} style={{ marginTop: '3%' }}>
        <h1 style={{textAlign:'center'}}>{allOrders.length>0?'Вашите поръчки са:':'Все още нямате направени поръчки'}</h1>
        <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
          {allOrders.map((element)=>
          <div key={Math.random()}>
          <li><h3>Вид процедура:</h3>{element.products+" "}</li>  
          <li><h3>Дата на заявяване:</h3>{element.date}</li> 
          <li><h3>Обща сума:</h3>{element.totalSum} лв.</li>           
          <hr />       
          </div>       
          )}</ul>
      </Col>

    </Row>
  )
}
export default AuthPage;
