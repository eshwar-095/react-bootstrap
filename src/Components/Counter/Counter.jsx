import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount(count+1)
    } 
    const decrement = () =>{
        setCount(count-1)
    }
    const clear = () => {
        setCount(0);
    } 
  return (
    
    <>
        <Container className='mt-3'>
            <Row>
                <Col xs={4}>
                    <Card className='shadow-lg'>
                        <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                            <p className='display-2'>{count}</p>
                            <Button variant='success' className='m-1' onClick={increment}>Increment</Button>
                            <Button variant='warning' className='m-1' onClick={decrement}>Decrement</Button>
                            <Button variant='secondary' className='m-1' onClick={clear}>Reset</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Counter