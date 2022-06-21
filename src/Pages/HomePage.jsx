import React, { useState, useEffect } from 'react';
import Display from '../Components/Display/Display';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import './HomePage.css';

const HomePage = () => {
    
    const [loading, setLoading] = useState(true)
    const [donators, setDonators] = useState([])

    useEffect(() => {
        let mounted=true
      fetchDonators().then(() => {
        if(mounted) {
        }})
      return function cleanup() {
          mounted = false
          setLoading(false)}
    }, []);

  //gets deployer personal information to display in the page
  const fetchDonators = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/donators/`)
      setDonators(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

    return (loading ? <p>Screen is Loading / Your Deployer may not have any steps assigned to them.</p> :
        <div className="m-3 d-flex flex-column">
            <div>
                <h1 className="m-3">Cards</h1>
            </div>
            <div className=" container d-flex">
                <Row>
                    <Display donators={donators}/>
                </Row>
            </div>
        </div>
     );
};
 
export default HomePage;