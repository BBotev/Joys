import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function NavLeft() {
  
  return (
    <Accordion style={{marginTop:'3%'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Link to='/Massage' style={{textDecoration:'none',color:'black'}}>Масажи</Link>
          </Accordion.Header>
        <Accordion.Body >
        <Link to='/FullMassage' style={{textDecoration:'none',color:'black'}}>Цялостен</Link>
        <br/><br/>
        <Link to='/BackMassage' style={{textDecoration:'none',color:'black'}}>Гръб</Link>
        <br/><br/>
       <Link to='/LegsMassage' style={{textDecoration:'none',color:'black'}}>Крака</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
        <Link to='/Cosmetics' style={{textDecoration:'none',color:'black'}}>Козметични процедури</Link>
          </Accordion.Header>
        <Accordion.Body>
        <Link to='/face' style={{textDecoration:'none',color:'black'}}>Масаж на лице,шия и деколте</Link>
        <br/><br/>
        <Link to='/Cleaning' style={{textDecoration:'none',color:'black'}}>Почистване на лице</Link>
        <br/><br/>
        <Link to='/Diamant' style={{textDecoration:'none',color:'black'}}>Диамантено микродермабразио</Link>
        <br/><br/>
       <Link to='/Led' style={{textDecoration:'none',color:'black'}}>LED терапия</Link>
       <br/><br/>
        <Link to='/Hydro' style={{textDecoration:'none',color:'black'}}>Хидратираща терапия</Link>
        <br/><br/>
        <Link to='/Acne' style={{textDecoration:'none',color:'black'}}>Anti-acne терапия</Link>
        <br/><br/>
       <Link to='/Light' style={{textDecoration:'none',color:'black'}}>Изсветляваща терапия</Link>
       <br/><br/>
        <Link to='/AntiAge' style={{textDecoration:'none',color:'black'}}>Anti-age терапия</Link>
        <br/><br/>
       <Link to='/Oxygen' style={{textDecoration:'none',color:'black'}}>Кислородна мезотерапия</Link>
       <br/><br/>
        <Link to='/NoEdge' style={{textDecoration:'none',color:'black'}}>Безиглена мезотерапия</Link>
        <br/><br/>
       <Link to='/Radio' style={{textDecoration:'none',color:'black'}}>Радиочестотен лифтинг</Link>
       <br/><br/>
        <Link to='/Acid' style={{textDecoration:'none',color:'black'}}>Ексфолираща терапия с киселина</Link>
        <br/><br/>
       <Link to='/Lifting' style={{textDecoration:'none',color:'black'}}>Лифтинг на мигли</Link>
       <br/><br/>
       <Link to='/Painting' style={{textDecoration:'none',color:'black'}}>Боядисване и оформяне на вежди с кана</Link>
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        <Link to='/Cellulite' style={{textDecoration:'none',color:'black'}}>Антицелулитни отслабващи терапии</Link>
        </Accordion.Header>
        <Accordion.Body>
        <Link to='/Celutron' style={{textDecoration:'none',color:'black'}}>Целутрон</Link>
        <br/><br/>
        <Link to='/Press' style={{textDecoration:'none',color:'black'}}>Пресотерапия</Link>
        <br/><br/>
       <Link to='/AntiCellulite' style={{textDecoration:'none',color:'black'}}>Антицелулитен масаж</Link>
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        <Link to='/Waxing' style={{textDecoration:'none',color:'black'}}>Кола маска</Link>
          </Accordion.Header>
        <Accordion.Body>
        <Link to='/Man' style={{textDecoration:'none',color:'black'}}>Мъже</Link>
        <br/><br/>
        <Link to='/Woman' style={{textDecoration:'none',color:'black'}}>Жени</Link>
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
        <Link to='/Therapies' style={{textDecoration:'none',color:'black'}}>Терапии</Link>
          </Accordion.Header>
        <Accordion.Body>
        <Link to='/Shoko' style={{textDecoration:'none',color:'black'}}>Шоколадова терапия</Link>
        <br/><br/>
        <Link to='/Honey' style={{textDecoration:'none',color:'black'}}>Детоксикираща терапия с мед /гръб/</Link>
        <br/><br/>
        <Link to='/Peeling' style={{textDecoration:'none',color:'black'}}>Пилинг</Link>
        <br/><br/>
        <Link to='/Paraffin' style={{textDecoration:'none',color:'black'}}>Парафинова терапия</Link>
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
        <Link to='/Makeup' style={{textDecoration:'none',color:'black'}}>Грим</Link>
          </Accordion.Header>
        <Accordion.Body>
        <Link to='/ProMakeup' style={{textDecoration:'none',color:'black'}}>Професионален грим</Link>
        <br/><br/>
        <Link to='/ProPlus' style={{textDecoration:'none',color:'black'}}>Професионален грим с изкуствени мигли</Link>
        <br/><br/>
       <Link to='/Teach' style={{textDecoration:'none',color:'black'}}>Курс по самогримиране</Link>
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
        <Link to='/Manicure' style={{textDecoration:'none',color:'black'}}>Маникюр</Link>
          </Accordion.Header>
        <Accordion.Body>
        <Link to='/Nails' style={{textDecoration:'none',color:'black'}}>Маникюр</Link>
        <br/><br/>
        <Link to='/Gel' style={{textDecoration:'none',color:'black'}}>Гел лак</Link>
        <br/><br/>
        <Link to='/Uv' style={{textDecoration:'none',color:'black'}}>UV гел</Link>
        <br/><br/>
       <Link to='/Repair' style={{textDecoration:'none',color:'black'}}>Поправка на счупен нокът</Link>
       <br/><br/>
        <Link to='/Decoration' style={{textDecoration:'none',color:'black'}}>Декорация на нокът</Link>
        <br/><br/>
        <Link to='/HandTherapie' style={{textDecoration:'none',color:'black'}}>Парафинова терапия за ръце</Link>
         </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default NavLeft;