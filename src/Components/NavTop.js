import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ShoppingCard from './ShoppingCard';

function NavTop() {

  const acc = localStorage.getItem('account');
  
  const remove = () => {
    localStorage.clear(); window.location.reload()
  } 
  
  return (

    <div style={{ borderBottom: '1px solid black', marginLeft: '-12px', marginRight: '-12px' }}>
      <Navbar expand="lg">

        <Container>
          <div style={{ borderRight: '1px solid black', marginTop: '-8px', marginBottom: '-8px', padding: '10px' }}>
            <Navbar.Brand href="/">
              <h1 className='text'>
                <img src={require('../Images/joysLogo.jpg')} alt='as' style={{ width: '60px', marginRight: '10px', border: '1px solid black' }} />
                Joys</h1>
              <small className='text'>Your choice of joys</small>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: '100px' }}>
              <Nav.Link href='/Procedures' style={{ marginLeft: '10px', fontSize: '25px', color: 'white' }} className='text'>Процедури</Nav.Link>
              <Nav.Link href='/Offers' style={{ marginLeft: '10px', fontSize: '25px', color: 'white' }} className='text'>Подаръчни ваучери</Nav.Link>
              <Nav.Link href='/Time' style={{ marginLeft: '10px', fontSize: '25px', color: 'white' }} className='text'>Работно време</Nav.Link>
              <Nav.Link href='/Contacts' style={{ marginLeft: '10px', fontSize: '25px', color: 'white' }} className='text'>Контакти</Nav.Link>
              <Nav.Link href='/AboutUs' style={{ marginLeft: '10px', fontSize: '25px', color: 'white' }} className='text'>За нас</Nav.Link>

              <Dropdown>

                <Dropdown.Toggle style={{ padding: '0', marginLeft: '20px', backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                  <img src={require('../Images/profile.webp')} alt='me' style={{ width: '50px' }} />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                  <Dropdown.Item href={acc != null ? "/authpage" : "/login"} style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white' }} className='text'>{acc != null ? acc : "Вписване"}</Dropdown.Item>
                  <Dropdown.Item href='/Procedures' onClick={remove} style={{ display: acc != null ? "block" : "none", backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white' }} className='text'>Отписване</Dropdown.Item>
                  <Dropdown.Item href='/Signup' style={{ display: acc != null ? "none" : "block", backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white' }} className='text'>Регистрация</Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
              <div style={{cursor:'pointer'}}><ShoppingCard /></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavTop;