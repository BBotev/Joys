import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col,Row } from "react-bootstrap";
import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

function Login() {

    const history = useNavigate();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    async function handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else if (form.checkValidity() === true) {
            e.preventDefault();
            try {
                await axios.post("https://joys-backend.netlify.app/api/login", {
                    account, password
                })
                        .then(res => {
                        if (res.data.status === "exist") {
                            history(res.data.admin?"/admin":"/authpage");
                            localStorage.setItem('account',account);
                            localStorage.setItem('name',res.data.name);
                            localStorage.setItem('id', res.data.id);
                            localStorage.setItem('gender', res.data.gender);
                            localStorage.setItem('admin', res.data.admin);                     
                        }
                        else if (res.data === "notexist") {
                            alert("Потребителя не е регистриран")
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
    }

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
            
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="loginForm">
            
                <h1 style={{color:'white',fontSize:'40px'}}>Вход</h1>
                
                
                <br />
                
                <Form.Group controlId="validationCustom01">
                    <FloatingLabel label="Потребителско име">
                        <Form.Control required type="text" placeholder="Потребителско име" onChange={(e) => { setAccount(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Моля изберете име!</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <br />

                <Form.Group controlId="validationCustom02">
                    <FloatingLabel label="Парола">
                        <Form.Control required type="password" placeholder="Парола" onChange={(e) => { setPassword(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">Моля изберете парола!</Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>              <Button type="submit" style={{ marginTop: '30px' }}>Изпращане</Button>
                
                <br />
                <br />
                
                <Link to="/Signup">Регистрация</Link>
                       
            </Form>
     
            </Col>
          </Row>
    
        </div>

        


    )
}

export default Login;