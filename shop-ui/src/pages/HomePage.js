import React, { useState, useEffect } from 'react'
import { Container, Button  } from 'react-bootstrap';
import './HomePage.css'
import NewItemForm from '../components/NewItemForm';


const HomePage = () => {
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);

  const handleButtonClick1 = () => {
      setShowForm1(true);
      setShowForm2(false);
  }
  const handleButtonClick2 = () => {
    setShowForm1(false);
    setShowForm2(true);
}


  return (
    <div>
      <Container className="custom-container">
      <Button variant="dark" className="custom-button" onClick={handleButtonClick1}>
       NEW ITEM ADD
      </Button>
      <Button variant="dark" className="custom-button" onClick={handleButtonClick2}>
        UPDATE ITEM
      </Button>
    </Container>


     {showForm1&&(
      <>
      <NewItemForm/>
      </>
     )}

     {
      showForm2&&(
      <>
      <h1>Jai Shree ram</h1>
      </>
      )
     }


    </div>
  )
}

export default HomePage