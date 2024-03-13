import './App.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './components/Products';
import Side from './components/Side';

function App() {

  return (
    <>
        <div className='p-3'>
          <Row>
            <Col xs={3}>
              <Side />
            </Col>
            <Col >
              <Products />
            </Col>
          </Row>
        </div>
    </>
  )
}

export default App
