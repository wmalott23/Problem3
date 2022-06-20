import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const Display = ({donators}) => {



    return ( 
        donators.map((el, index) => {
            return (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">+</Button>
                    </Card.Body>
                </Card>
        )
        })
     );
}
 
export default Display;