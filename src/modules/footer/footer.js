import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logofooter.png';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';
import pininterest from './images/pininterest.svg';
import marker from './images/marker.svg';
import phone from './images/phone.svg';
import envelope from './images/envelope.svg';
import './css/style.css';

function Footer() {
  return (
    <footer id="footer">
      <Container>
        <Row className="foot-top">
          <Col lg={3} className="text-center text-lg-start mb-5 mb-lg-0">
            <img className="img-fluid" src={logo} alt="Logo"></img>
          </Col>
          <Col lg={3} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Information</h4>

            <ul class="information">
                <li>
                    <a href="/">Main</a>
                </li>
                <li>
                    <a href="/">Gallery</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Certifications</a>
                </li>
                <li>
                    <a href="/">Contacts</a>
                </li>
            </ul>
          </Col>
          <Col lg={3} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Contacts</h4>
            <Row className="contact">
              <Col lg={2}>
                <img className="img-fluid" src={marker} alt="Marker"></img>
              </Col>
              <Col lg={10}>
                <p>1234 Sample Street <br/>
                  Austin Texas 78681</p>
              </Col>
            </Row>

            <Row className="contact">
              <Col lg={2}>
                <img className="img-fluid" src={phone} alt="Marker"></img>
              </Col>
              <Col lg={10}>
                <p>512.333.2222</p>
              </Col>
            </Row>

            <Row className="contact">
              <Col lg={2}>
                <img className="img-fluid" src={envelope} alt="Marker"></img>
              </Col>
              <Col lg={10}>
                <p><a href="mailto:sampleemail@gmail.com">sampleemail@gmail.com</a></p>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Social Media</h4>

            <ul className="social">
                <li>
                    <a href="/">
                        <img src={facebook} alt="Facebook"></img>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={twitter} alt="Twitter"></img>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={linkedin} alt="Linkedin"></img>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <img src={pininterest} alt="Pinterest"></img>
                    </a>
                </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="foot-bottom">
          <Col className="text-center">
            <p>
              © 2021 All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;