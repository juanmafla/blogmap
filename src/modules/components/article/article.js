import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../button/button'
import egypt from './images/egypt.jpg';
import './css/style.css';

function Article() {
  return (
    <div className="post">
      <Row>
        <Col lg={7} className="post-colimg text-center order-1 order-lg-2">
          <img className="img-fluid" src={egypt} alt="Post"></img>
        </Col>
        <Col lg={5} className="px-5 pb-1 pt-1 order-2 order-lg-1">
          <h3>Article</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Button text={'View More'} url={'/article'}></Button>
        </Col>
      </Row>
    </div>
  );
}

export default Article;