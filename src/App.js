import { useState } from 'react';
import SaleableArea from './components/SaleableArea';

//Bootstrap components
import { Col, Row, Form, Button, Table, Accordion } from 'react-bootstrap';

//Firebase imports
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {
  const [inputs, setInputs] = useState([
    {
      unitNumberTag: '',
      serviceAreaType: '',
      serviceAreaSize: ''
    }
  ])

  //Submit function
  const submit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  //Add to firebase
  // const addFloor = async (e) => {
  //   e.preventDefault();  
   
  //   try {
  //       const rowRef = await addDoc(collection(db, "floors"), {
  //         todo: todo,    
  //       });
  //       console.log("Document written with ID: ", rowRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  // }

  return (
    <div>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Description of the Saleable Area</Accordion.Header>
            <Accordion.Body>
              <SaleableArea></SaleableArea>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="primary" onClick={submit}>
      Submit
      </Button>
    </div>
  );
}

export default App;
