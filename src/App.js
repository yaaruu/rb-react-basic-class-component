import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Navbar from './components/Navbar';
import {  
  Switch,
  Route,  
} from "react-router-dom";
import HomePage from "./pages/Home";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
    };
  }
  
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <Container fluid style={{padding:0}}>
          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{padding:10}}>
                <Switch>
                  <Route path="/home">
                    <HomePage/>
                  </Route>
                  <Route path="/discord">
                    <p>Discord Link</p>
                  </Route>
                  <Route path="/about-us">
                    <p>Tentang Kami</p>
                  </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
