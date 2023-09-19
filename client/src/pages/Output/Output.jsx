import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Output() {
  const location = useLocation();
  const response = location.state.data
  console.log(response);
  return (
    <div className='output'>
      <Container>
        <p>{response}</p>
        <Link to='/'>Ana Sayfaya Dön</Link>
      </Container>
    </div>
  )
}

export default Output