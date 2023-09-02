import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';

function ShoppingCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const id = localStorage.getItem('id');
  const checkOrders = localStorage.getItem('order');
  let [orders, setOrders] = useState([]);
  let sum = 0;

  if (checkOrders != null) {
       orders = JSON.parse(localStorage.getItem('order'));
       for (let i = 0; i < orders.length; i++) {
        sum += orders[i].price;
    }
}

function deleteOrders(text) {
    const newOrders = orders.filter((item) => item.id !== text);
    localStorage.setItem('order', JSON.stringify(newOrders))
    setOrders(newOrders);
  }

  const [checkSend,setCheckSend]=useState(true)
  const checkUser = localStorage.getItem('account')

  async function finalOrder(){
    
   if(checkUser && window.confirm("Потвърждавате ли поръчката?")){
  try {
      const orderText = Array.from(orders,(x)=>x.text)
    await  axios.post("https://joys-backend.netlify.app/api/orders", {id,orderText,sum})
  }
  catch (e) {
      console.log(e)
  }
 
 setCheckSend(false);
 localStorage.removeItem('order');
 localStorage.setItem('order',JSON.stringify([]))

  }}

  let check = localStorage.getItem('order');
  let quant = check?JSON.parse(check).length:0;

  return (
    <div>
  <div style={{position:'relative'}}> 
<img src={require('../Images/shopping.png')} style={{width:"45px",lineHeight:'45px',marginLeft:'20px'}} onClick={handleShow} id="cartButton" alt=''/>
<span className='quantShopping'>{quant}</span>
 </div>   
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Вашата количка</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>{checkSend?
        <div style={{textAlign:'center'}}>
          
          <h1 style={{ textAlign: 'center' }}>Вашата заявка:</h1>
          <div style={{marginTop:'20px'}}>
          <h2>Обща сума:<span>{sum}лв.</span></h2>
          <ul style={{ fontSize: '20px',listStyle:'none',marginTop:'20px',marginRight:'20px'}}>
          {orders.map((element) =>
          <div key={Math.random()}>
          <li style={{marginTop:'10px'}}>{element.text}</li>
 <button style={{borderRadius:'10px',backgroundColor:'black',color:'red',width:'50px'}} onClick={() => { deleteOrders(element.id) }}>X</button>
          <hr />
          </div>
          )}
          </ul>
        <div>
        {sum!==0?<a className="AddButton" onClick={()=>{finalOrder()}} href={checkUser?'#0':'/Login'}>Завърши поръчката</a>:null}
        </div> 
        </div>
        </div>:
        <div style={{textAlign:'center',marginTop:'50%'}}>
        <h1 style={{textAlign:'center'}}>Вашата поръчка беше изпратена успешно!</h1>
        <br />
        <a className='AddButton' href='/Procedures'>Продължи пазаруването</a>
        </div>}
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ShoppingCard;