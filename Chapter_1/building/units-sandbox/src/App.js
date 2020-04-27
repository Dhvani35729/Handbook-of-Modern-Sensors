import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './App.css';

function App () {
  return (
    <Container>
      <Row>
        <Col md="6">
          <p>Tools to build</p>
        </Col>
        <Col md="6">
          <p>Display</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
