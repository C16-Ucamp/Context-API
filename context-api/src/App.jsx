import React, { useContext, useEffect } from 'react'
import {Container, Row, Card, Button, Col} from 'react-bootstrap'
import { ProductContext } from './context/ProductContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const App = () => {
  const {product, setProduct} = useContext(ProductContext)

  const getProducts = async() =>{
    const url = 'http://localhost:4003/api/v1/products'
    const productos = await axios.get(url)
    setProduct(productos.data)
  }
  const navigation = useNavigate()

  const buyProduct = () =>{
    navigation('/login')
  }

  console.log(product)
  useEffect(()=>{
    getProducts();
  }, []); 

  return (
    <div>
      <Container>
        <Row>
          {
            product.length > 0 ? 
            product.map((pr,i) =>(
              <Col md={6} key={i}>
                <Card style={{width:'18rem'}}>
                  <Card.Img src={pr.image}/>
                  <Card.Body>
                    <Card.Title>{pr.name}</Card.Title>
                    <Card.Text>
                      {pr.description}
                    </Card.Text>
                    <Card.Text>
                      ${pr.price}MX
                    </Card.Text>
                    <Button variant='primary' onClick={buyProduct}>Comprar</Button>
                  </Card.Body>
                </Card>
              </Col>
            )) :
            <div>
              <h1>Sin productos</h1>
            </div>
          }
        </Row>
      </Container>
    </div>
  )
}

export default App


