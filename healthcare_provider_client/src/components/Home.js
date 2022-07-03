import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {


  return (
    <Card style={{ width: '40rem', }}>
      <Card.Img variant="top" src="https://www.viewsonic.com/library/wp-content/uploads/2020/03/How-Touchscreens-Benefit-Healthcare-Workers-1.png" />
      <Card.Body>
        <Card.Title>Healthcare Provider</Card.Title>
        <Card.Text>
         Welcome to the Healthcare Provider App!
         To view a list of all of your clients click here:
        </Card.Text>
        <a href="/clients">
        <Button ovariant="primary">Clients</Button>
        </a>
      </Card.Body>
    </Card>
  );

}

export default Home;

