import NavTop from './NavTop';
import'../App.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
function Home() {
    return (
      <Row style={{margin:'0px'}}>
        <Col lg={12} xs={12}>
        <NavTop />
     <img src={require('../Images/HomeVideo.gif')} className='homePage' alt='home'/>
    <h2 style={{textAlign:'center'}} className='text'>Начало</h2>
    </Col>
      </Row>
    );
  }
  
  export default Home;