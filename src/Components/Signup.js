import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import NavTop from './NavTop';
import NavLeft from './NavLeft';
import { Row, Col } from 'react-bootstrap';
const jsSHA = require("jssha");

function Signup() {

  const history = useNavigate();
  const [account, setAccount] = useState("");
  var [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone,setPhone] = useState("");
  const [gender,setGender] = useState("");
  const [validated, setValidated] = useState(false);
  const admin = false;
  const hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
  hashObj.update(password);
  const hash = hashObj.getHash("HEX");
  password = hash;


  async function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else if (form.checkValidity() === true) {
      e.preventDefault();
      try {
        await axios.post("https://joys-backend.netlify.app/api/signup", {
          firstName, secondName, phone, account, password, email, gender,admin
        })
          .then(res => {
            if (res.data === "exist") {
              alert("Потребителя вече съществува")

            }
            else if (res.data === "notexist") {
              alert("Регистрирахте се успешно!");
              history("/Login");
            }
          })
          .catch(e => {
            alert("Грешни данни")
            console.log(e);
          })
      }
      catch (e) {
        console.log(e)
      }
    }
    setValidated(true);
  };


  return (
    <div>
      <Row style={{ margin: '0px'}}>

        <Col lg={12}>
          <NavTop />
          <img src={require('../Images/navPic.jpg')} alt='pic' className='secondBack' />
          <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black, 0 0 25px black, 0 0 5px black', color: 'white' }}>Здравейте!</h1>
        </Col>
        </Row>
        
        <Row style={{margin:'0'}}>
        <Col lg={2} xs={12}>
          <NavLeft />
        </Col>

        <Col lg={10} xs={12} style={{display:'flex',justifyContent:'center',marginTop:'0.5%'}}>
      
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="signupForm">
        
            <h1 style={{ color: 'white' }}>Регистрация</h1>

            <br />
        <Row>
         <Col lg={6} md={6} xs={12}>
            <Form.Group controlId="validationCustom01">
              <FloatingLabel label="Име">
                <Form.Control required type="text" placeholder="Име" onChange={(e) => { setFirstName(e.target.value) }} />
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
           
            <br />
          
            <Form.Group controlId="validationCustom01">
              <FloatingLabel label="Фамилия">
                <Form.Control required type="text" placeholder="Фамилия" onChange={(e) => { setSecondName(e.target.value) }} />
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          
            <br />
          
            <Form.Group controlId="validationCustom01">
              <FloatingLabel label="Телефонен номер">
                <Form.Control required type="text" placeholder="Телефонен номер" onChange={(e) => { setPhone(e.target.value) }} />
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          
            <br />
         
            </Col>
           
            <Col lg={6} md={6} xs={12}>

            <Form.Group controlId="validationCustom01">
              
              <FloatingLabel label="Имейл">
                <Form.Control type="email" placeholder="Имейл" required onChange={(e) => { setEmail(e.target.value) }} id='email'/>
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            
          </Form.Group>   

            <br />

          <Form.Group controlId="validationCustom02">
              <FloatingLabel label="Потребителско име">
                <Form.Control required type="text" placeholder="Потребителско име" onChange={(e) => { setAccount(e.target.value) }} id='username'/>
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
           
            <br />

            <Form.Group controlId="validationCustom03">
              <FloatingLabel label="Парола">
                <Form.Control required type="password" placeholder="Парола" onChange={(e) => { setPassword(e.target.value)}} id='password'/>
                <Form.Control.Feedback type="invalid">Полето е задължително!</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>           
           
            </Col>
            </Row>
             
             <br />
             
              <div>               
              <span style={{color:'white',marginRight:'20px',fontSize:'20px'}}>Пол:</span>
              <Form.Check name="grouped" required inline label="Мъж" type='radio' style={{color:'white'}} onChange={() => { setGender("man") }}/>
              <Form.Check name="grouped" required inline label="Жена" type='radio' style={{color:'white'}} onChange={() => { setGender("woman") }}/>             
              </div>

            <Button type="submit" style={{ marginTop: '25px' }}>Изпращане</Button>
            
          </Form>

          </Col>
          </Row>
    
        </div>

        )
}

        export default Signup;