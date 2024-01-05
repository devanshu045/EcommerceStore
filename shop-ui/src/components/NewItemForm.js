import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './NewItemForm.css'


const NewItemForm = () => {
  return (
    <div className="custom-container">
    <Form className="custom-form">
      <Form.Group controlId="formName">
        <Form.Label className='label-css'>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          className="custom-input"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label className='label-css'>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className="custom-input"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label className='label-css'>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          className="custom-input"
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label className='label-css'>Upload Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          className="custom-input"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default NewItemForm