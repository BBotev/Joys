import React,{useState} from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function Admin(){

    const[allOrders,setAllOrders]= useState([]);
    const[oneTime,setOneTime]=useState(true);
console.log(allOrders)
    try {
        if(oneTime){
          axios.get("https://joys-backend.netlify.app/api/admin")
          .then(res=>{
          setAllOrders(res.data);
          setOneTime(false);
          })
          }}
        catch (error) {
          console.log(error)
        }
      

    return(
        
        <Row style={{ margin: '0px' }}>

        <Col lg={12}>
          <NavTop />
          <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
          <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>
            Здравей администраторЮ !!! Печен си ти !!!
          </h1>
  
        </Col>
  
        <Col lg={2} xs={12}>
          <NavLeft />
        </Col>
  
        <Col lg={10} xs={12} style={{ marginTop: '3%' }}>
        <h1 style={{textAlign:'center'}}>Направените поръчки са:</h1>
        <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
          {allOrders.map((element)=>
          <div key={Math.random()}>
          <li><h3>Име на клиента:</h3>{element.name}</li>  
          <li><h3>Телефон на клиента:</h3>{element.phone}</li> 
          <li><h3>Поща на клиента:</h3>{element.email}</li> 
          <li><h3>Поръчка на клиента:</h3>{element.products}</li> 
          <li><h3>Дата на заявяване:</h3>{element.date}</li>                    
          <hr />       
          </div>       
          )}</ul>
          
        </Col>
  
      </Row>
    )
}

export default Admin;