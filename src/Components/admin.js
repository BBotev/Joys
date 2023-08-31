import React,{useState} from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';

function Admin(){

    const[allOrders,setAllOrders]= useState([]);
    const[status,setStatus]=useState("");
    console.log(status)
    const[oneTime,setOneTime]=useState(true);   
    const name = localStorage.getItem('name');

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
            Здравей {name} ти си администратор тук!
          </h1>
  
        </Col>
  
        <Col lg={2} xs={12}>
          <NavLeft />
        </Col>
  
        <Col lg={10} xs={12} style={{ marginTop: '1%' }}>    
        {
        !oneTime?<div><h1 style={{textAlign:'center'}}>{allOrders.length>0?'Направените поръчки са:':'Все още няма направени поръчки'}</h1>   
        <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
         <Row>
          {allOrders.map((element)=>
          <Col lg={4} md={6} sx={12} key={Math.random()}>
          <li><h3>Име на клиента:</h3>{element.name}</li>  
          <li><h3>Телефон на клиента:</h3>{element.phone}</li> 
          <li><h3>Поща на клиента:</h3>{element.email}</li>          
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
          <li><Accordion.Header style={{marginLeft:'-20px'}}><h4>Поръчка на клиента:</h4></Accordion.Header><Accordion.Body>{element.products}</Accordion.Body></li> 
          </Accordion.Item>
          </Accordion>
          <li><h3>Дата на заявяване:</h3>{element.date}</li>
          <li>
            <h3>Статус на поръчката:</h3>             
                <Row> 
             
             <Col>
            <Dropdown>
      <Dropdown.Toggle style={{background:element.status==="1"?"orange":"green"}} id="dropdown-basic">
      {element.status==="1"?"Изпратена":"Обработена"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item style={{width:'60px'}} onClick={()=>{setStatus("2");element.status=status}}>Обработена</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
    </Col>
    <Col>
    <button style={{borderRadius:'5px',border:'2px solid black',width:'75px',fontSize:"18px"}}>Обнови</button>
    </Col>
    
    </Row>    
          </li>                  
          <hr style={{height:'3px', background:'black'}}/>
          <br />       
          </Col>)}             
          </Row>
         </ul>        
          </div>:<h1 style={{textAlign:'center'}}>Зареждане...</h1>
          } 
        </Col>
  
      </Row>
    )
}

export default Admin;