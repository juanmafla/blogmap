import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/post/post';
import Search from '../components/search/search';
import Button from '../components/button/button';
import Slide from '../components/slide/slide';
import mission from './images/mission.png';
import './css/style.css';

function HomePage() {
  return (
    <div>
      <section className="slider">
        <Container>
          <Row>
            <Col>
              <Slide></Slide>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mission">
        <Container>
          <Row>
            <Col className="text-end">
              <Search></Search>
            </Col>
          </Row>
          <div className="missionbg mt-5 mb-5 text-center text-md-start">
            <Row>
              <Col xs={12} md={6} className="text-center mb-5 mb-md-0">
                <img className="img-fluid" src={mission} alt="Post"></img>
              </Col>
              <Col xs={12} md={6} >
                <h3 className="mb-3">Mission</h3>
                <p>
                An open source of truth for leaders to learn about the Wagner Group’s leaders, key personell, and sponsors via our intelligence kompromat. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <Button text="Read More" url="article"></Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="numbers">
        <Container>
          <Row className="mb-5">
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">1</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">2</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">1</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">2</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">1</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5} className="mb-5 text-center text-lg-start mb-lg-0">
              <Row>
                <Col lg={3} className="text-center">
                  <p className="number">2</p>
                </Col>
                <Col lg={9} className="num-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="countries">
        <Container>
          <Row className="mb-5 text-center text-md-start">
            <Col><h4>COUNTRIES OF INTEREST</h4></Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} lg={6} className="mb-3 mb-lg-0"><Post></Post></Col>
            <Col xs={12} lg={6}><Post></Post></Col>
          </Row>
          <Row>
            <Col xs={12} lg={4} className="mb-3 mb-lg-0"><Post></Post></Col>
            <Col xs={12} lg={4} className="mb-3 mb-lg-0"><Post></Post></Col>
            <Col xs={12} lg={4}><Post></Post></Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;