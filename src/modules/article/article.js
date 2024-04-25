import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import featured from './images/featured.jpg';
import icoshape from './images/ico-shape.svg';
import './css/style.css';

function ArticlePage() {
  return (
    <Container id="article">
      <Row>
        <Col>
            <h1>THOMAS<br></br>SUMMER</h1>
        </Col>        
      </Row>
      <Row>
        <Col lg={4} className="text-center text-lg-start">
          <Row>
            <Col><img className="img-fluid" src={featured} alt="article"></img></Col>
          </Row>          
          <Row>
            <Col><h3 className="quote mt-3">"I Believe everyone can be a designer as long they <span>love to create</span> design and have obsession to create something great"</h3></Col>
          </Row>
          <Row>
            <Col><a className="vm" href="/">Related Data <img src={icoshape} alt="Related Data"></img></a></Col>
          </Row>
        </Col>
        <Col lg={1}></Col>
        <Col lg={7}>
          <Row className="mt-5 mb-3">
            <Col lg={1} md={1} xs={1}>
              <p className="cap">E</p>
            </Col>
            <Col lg={11} md={11} xs={11}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor augue, scelerisque eu finibus nec, convallis vel turpis. Vivamus quis viverra neque. Proin sed dolor risus. Phasellus volutpat tempus velit, vitae convallis urna laoreet vel. Aenean sollicitudin sodales nunc, et sodales ante malesuada sed. Nullam molestie elit id placerat luctus. Nulla felis lacus, rutrum nec gravida a, lacinia pharetra purus. Nunc aliquet dui nec nunc convallis, at ullamcorper metus commodo. Aliquam aliquet feugiat odio, eu ultrices leo condimentum vel. Nullam tempor elit a sodales sagittis. Maecenas ultricies commodo risus sed consequat. Donec accumsan dapibus est, sit amet dapibus eros molestie quis.</p>
              <p>Aenean aliquam feugiat ex eleifend tempor. Vestibulum turpis justo, efficitur ut augue quis, dignissim euismod magna. In hac habitasse platea dictumst. Nulla faucibus eros sed luctus gravida. Vestibulum eros nisl, consequat et mi vitae, sollicitudin dapibus metus. Suspendisse a elit vel elit tempus fringilla id ac orci. Fusce velit lacus, congue id maximus eu, bibendum et eros. Vivamus ex massa, iaculis eget imperdiet in, sollicitudin sit amet tortor. Vestibulum a leo in sem molestie pretium. Cras maximus, mi non blandit viverra, leo lorem eleifend nibh, vitae pellentesque tellus neque in leo.   Suspendisse potenti. In gravida non mi sit amet laoreet. Fusce arcu velit, efficitur at elit et, vehicula laoreet arcu. Nunc a risus leo. Donec in orci a turpis ultrices blandit nec at mi.</p>
              <p>Sed sit amet congue erat. Suspendisse tempor enim felis, ac luctus felis dapibus eget. Morbi elementum et nulla in porta. Quisque non rhoncus elit. Pellentesque id urna odio. Curabitur pharetra, urna sed pretium suscipit, tellus nunc accumsan libero, quis tristique mauris felis vitae metus. Curabitur eros felis, sollicitudin a nibh molestie, fringilla lobortis risus. Sed feugiat, urna vitae auctor interdum, lectus sem elementum ligula, quis vehicula est purus non velit. Praesent lobortis enim nunc, nec auctor ex euismod eget.</p>
              <p>Nullam blandit neque eget augue volutpat vulputate. Morbi id luctus neque, vel egestas sapien. Quisque dictum in metus quis egestas. Aenean suscipit justo a magna fermentum eleifend. Morbi varius, neque nec porta sollicitudin, sem odio laoreet ligula, ac fringilla leo augue id tellus. Morbi imperdiet mi at ante volutpat facilisis. Sed eu eros orci. Vestibulum quis lacus nec metus ullamcorper dictum eu ac orci. Nullam felis nisl, malesuada id maximus a, accumsan a felis. Etiam accumsan, eros sed vehicula egestas, lacus lorem porta risus, nec mattis odio nibh in nisl.</p>
              <p>Maecenas eu turpis est. Ut ac molestie sapien, elementum accumsan nunc. Proin odio elit, aliquet eget leo rutrum, vestibulum rhoncus eros. Sed et convallis eros. Sed malesuada viverra leo, eget pretium eros varius tempus. Nunc commodo metus vitae blandit ultrices. Praesent vel elit eros. Phasellus fringilla ex vitae libero lacinia, feugiat finibus ex feugiat.</p>
            </Col>
          </Row>          
        </Col>
      </Row>
    </Container>
  );
}

export default ArticlePage;