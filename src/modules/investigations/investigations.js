import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from '../components/article/article';
import ArticleRight from '../components/article_right/article';
import Search from '../components/search/search';
import './css/style.css';

function InvestigationsPage() {
  return (
    <Container className="content">
      <Row className="sectop mb-5">
        <Col className="mb-5 mb-lg-0">
          <h1>Investigations <br/>
            <span>Analysis</span>
          </h1>
        </Col>
        <Col className="colsearch">
          <Search></Search>
        </Col>
      </Row>

      <Article></Article>
      <ArticleRight></ArticleRight>
      <Article></Article>
    </Container>
  );
}

export default InvestigationsPage;