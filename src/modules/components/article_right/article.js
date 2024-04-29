import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../button/button'
import egypt from './images/egypt.jpg';
import './css/style.css';

function ArticleRight() {
  return (
    <div className="post">
      <Row>
        <Col lg={7} className="mt-3 mt-lg-0 px-5 pb-1 pt-1 order-2">
          <h3>Article </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                
          <Button text={'View More'} url={'/article'}></Button> 
        </Col>
        <Col lg={5} className="post-colimg order-1 text-center text-lg-start">
          <img className="img-fluid" src={egypt} alt="Post"></img>
        </Col>
      </Row>
      </div>
  );
}

export default ArticleRight;