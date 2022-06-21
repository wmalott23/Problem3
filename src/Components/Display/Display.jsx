import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import './Display.css';

const Display = ({donators}) => {

    const styles = {
        cardImage: {
            height: '4rem',
            background: "linear-gradient(to right, #28c9b8, #4485d1, #8547e8, #4485d1)"
        }
    }

    return ( 
        donators.map((el, index) => {
            return (
                <Card key={index} className="card m-3">
                    <Card.Header className="image blue-gradient" style={styles.cardImage}/>
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-column">
                            <div>
                                <Card.Title>{el.name}</Card.Title>
                            </div>
                            <div>
                                <h7 className="text-white bg-secondary w-50 p-1">
                                    {el.work_phone}
                                </h7>
                            </div>
                        </div>
                            <button className="button d-flex align-items-center justify-content-center text-white border border-white rounded-circle">+</button>
                        </div>
                    </Card.Body>
                </Card>
        )
        })
     );
}
 
export default Display;