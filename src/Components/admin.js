import React,{useEffect, useState} from "react";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';

function Admin(){

    const[allOrders,setAllOrders]= useState([]);
    const[loading,setLoading]=useState(true);   
    const name = localStorage.getItem('name');
    const [day,setDay]=useState(new Date().toJSON().slice(0,10));

    async function reloadOrders(){
      try { 
        await axios.post("https://joys-backend.netlify.app/api/admin",{date:day})
        .then(res=>{
        setAllOrders(res.data);
        setLoading(false);    
        })
        }
      catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      reloadOrders();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[day])

       async function updateOrder(text){
          
        const selectValue = document.getElementById(text).value;
        const orderId = text;
        const day = document.getElementById(text+"day")?document.getElementById(text+"day").value:"";
          try {
           await axios.put("https://joys-backend.netlify.app/api/updateorder",{
              selectValue,orderId,day
            })
            .then(()=>{reloadOrders()})
          } catch (error) {
            console.log(error)
          }     
        selectValue==="1"?document.getElementById(text).style.background="#ffb732":document.getElementById(text).style.background="#66FF99" 
          
        }

        async function deleteOrder(text){
          
          if(window.confirm("Потвърждавате ли изтриването?")){
            const selectedOrder = text;
            try {
             await axios.post("https://joys-backend.netlify.app/api/delete",{selectedOrder})
             .then(()=>{reloadOrders()})
            } catch (error) {
              console.log(error)
            }
          }
        }

      const minDate = new Date().toJSON().slice(0,10);

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
        !loading?<div>
         
          <div style={{textAlign:'center'}} id="text">        
        <span style={{fontSize:'30px'}}>{allOrders.length>0?'Поръчки от дата: ':'Няма направени поръчки от '}</span>        
        <input type="date" defaultValue={day} id="inputDate" onChange={(e)=>setDay(e.target.value)} style={{fontSize:'20px'}}></input>
        <button style={{marginLeft:'10px',borderRadius:'5px'}} onClick={()=>{setDay(null);document.getElementById("inputDate").value=null}}>Виж всички</button>    
        </div> 
       
        <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
         <Row>
          {allOrders.map((element)=>
          <Col lg={4} md={6} sx={12} key={Math.random()}>
          <li><h4>Име на клиента:</h4>{element.name}</li>  
          <li><h4>Телефон на клиента:</h4>{element.phone}</li> 
          <li><h4>Поща на клиента:</h4>{element.email}</li>          
          <li><h4>Дата на заявяване:</h4>{element.date}</li>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
          <li><Accordion.Header style={{marginLeft:'-20px'}}><h4>Поръчка на клиента:</h4></Accordion.Header><Accordion.Body>{element.products}</Accordion.Body></li> 
          </Accordion.Item>
          </Accordion>                
          <li>
          <Row>
            <Col lg={2} md={2} xs={2}>         
            <h4>Час:</h4>
            </Col> 
            <Col lg={10} md={10} xs={10}>
            <div>{
            element.day?`Дата: ${element.day.slice(0,10)} Час:${element.day.slice(-5)}`:
            <input min={minDate+"T00:00:00"} id={element._id+"day"} onChange={(e)=>e.target.value.length?document.getElementById(element._id).disabled=false:document.getElementById(element._id).disabled=true} type="datetime-local" style={{fontSize:'17px'}}/>
          }</div>
          </Col>
            </Row>
          </li>           
          <li>
            <h4>Статус на поръчката:</h4> 
            <Row> 
              <Col lg={4} md={4} xs={4}>         
           <select  id={element._id} onChange={()=>updateOrder(element._id)} defaultValue={element.status} 
           style={{background:element.status==="1" ? "#ffb732" : "#66FF99", borderRadius:'5px',fontSize:'17px'}} disabled>
            <option value={1}>Изпратена</option>
            <option value={2}>Завършена</option>
           </select>  
             </Col>
             <Col lg={4} md={4} xs={4}>
             <button onClick={()=>document.getElementById(element._id).disabled=false} 
             style={{background:'#6699FF',borderRadius:'5px',height:'30px',display:element.day?"block":"none",marginLeft:'17px',fontSize:'17px'}}>
              Промени
              </button>
             </Col>
             <Col lg={4} md={4} xs={4}>
           <button style={{background:'#ff7e5f',borderRadius:'5px',height:'30px',fontSize:'17px'}} onClick={()=>deleteOrder(element._id)}>Изтрии</button>
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