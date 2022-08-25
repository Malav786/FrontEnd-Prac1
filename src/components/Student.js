import axios from "axios";
import React, {useState} from "react";
import { Container, Form, Card, Button } from "react-bootstrap";


export default function Student() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  let student = {
    id : id,
    name : name,
    address : address
  }

  let textChanged = (event) => {
    if(event.target.name==="id"){
      setId(event.target.value);
    } else if(event.target.name==="name"){
      setName(event.target.value);
    } else if(event.target.name==="address"){
      setAddress(event.target.value);
    }
  }

  let saveStudent = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/student", student)
    .then(response => {
      if(response.data != null){
        alert('Record added successfully');        
      }
    })
    .catch(error => alert(error));
  }

  return (
    <div  className="my-3">
    <Container>
      <Card>
        <Form onSubmit={saveStudent}>
          <Card.Header>Add Student Information</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Id</Form.Label>
              <Form.Control name="id" value={id} type="text" placeholder="Enter id" onChange={textChanged}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={name} type="text" placeholder="Enter name" onChange={textChanged} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={address} type="text" placeholder="Enter address" onChange={textChanged} />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
    </div>
  );
}