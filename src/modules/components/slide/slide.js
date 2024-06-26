import map from './images/map.jpg';
import Button from '../button/button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style.css';

function Slide() {
  return (
    <Carousel>
        <Carousel.Item >  
            <Row>
                <Col lg={4}  className="order-2 order-lg-1 mt-5 text-center text-lg-start mt-lg-0">
                    <h3>Title for First Slider</h3>
                    <p>subtitle</p>
                    <Button text="Visit .Data Map" url="/article"></Button>
                </Col>
                <Col lg={8} className="order-1 order-lg-2">
                    <img className="img-fluid" src={map} alt="Post"></img>   
                </Col>
            </Row>
        </Carousel.Item>

        <Carousel.Item>  
            <Row>
                <Col lg={4} className="order-2 order-lg-1 mt-5 text-center text-lg-start mt-lg-0">
                    <h3>Title for First Slider</h3>
                    <p>subtitle</p>
                    <Button text="Visit .Data Map" url="/article"></Button>
                </Col>
                <Col lg={8} className="order-1 order-lg-2">
                    <img className="img-fluid" src={map} alt="Post"></img>   
                </Col>
            </Row>
        </Carousel.Item>

        <Carousel.Item>  
            <Row>
                <Col lg={4} className="order-2 order-lg-1 mt-5 text-center text-lg-start mt-lg-0">
                    <h3>Title for First Slider</h3>
                    <p>subtitle</p>
                    <Button text="Visit .Data Map" url="/article"></Button>
                </Col>
                <Col lg={8} className="order-1 order-lg-2">
                    <img className="img-fluid" src={map} alt="Post"></img>   
                </Col>
            </Row>
        </Carousel.Item>

    </Carousel>
  );
}

export default Slide;