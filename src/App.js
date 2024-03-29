import { useState } from 'react';
import ServiceArea from './components/ServiceArea';

//Bootstrap components
import { Col, Row, Form, Button, Accordion } from 'react-bootstrap';

//Firebase imports
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from './firebase';

const App = () => {
  const [levels, setLevels] = useState([
    
  ])

  //Dynamic inputs for service area
  const [inputs, setInputs] = useState([
    {
      unitNumberTag: '',
      serviceAreaType: '',
      serviceAreaSize: ''
    }
  ])
    
  //Change handler
  const handleChange = (index, event) => {
    let data = [...inputs];
    data[index][event.target.name] = event.target.value;
    setInputs(data);
  }

  //Submits the contents of inputs
  const submit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  //Add new row for service area
  const addRow = () => {
    let newRow = {
        unitNumberTag: '',
        serviceAreaType: '',
        serviceAreaSize: ''
    }

    setInputs([...inputs, newRow])
  }

  //Remove row for saleable area
  const removeRow = (index) => {
    let data = [...inputs];
    data.splice(index, 1);
    setInputs(data);
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
              <Form>
                <Form.Group>
                    <Row>
                    <Col></Col>
                    <Col>Unit No./Tag</Col>
                    <Col>Type</Col>
                    <Col>Area (sqm)</Col>
                    <Col></Col>
                    </Row>
                </Form.Group>
                {inputs.map((input, index) => {
                    return (
                    <Form.Group key={index}>
                        <Row>
                        {/* Show index/row number */}
                        <Col>{index}</Col>

                        {/* Unit No./Tag */}
                        <Col>
                            <Form.Control
                            type="text"
                            placeholder="Unit No./Tag"
                            name="unitNumberTag"
                            value={input.unitNumberTag}
                            onChange={event => handleChange(index, event)}
                            />
                        </Col>

                        {/* Type */}
                        <Col>
                            <Form.Select 
                            aria-label="Default select example"
                            name="serviceAreaType"
                            value={input.serviceAreaType}
                            onChange={event => handleChange(index, event)}
                            >
                            <option value="">Select service area type</option>
                            <option value="Roadway/Common Area">Roadway/Common Area</option>
                            <option value="Stairs">Stairs</option>
                            <option value="Transformer Room">Transformer Room</option>
                            <option value="Generator Room">Generator Room</option>
                            <option value="Ramp">Ramp</option>
                            <option value="Lobby/Hallway">Lobby/Hallway</option>
                            <option value="Residential Lobby">Residential Lobby</option>
                            <option value="Corridors">Corridors</option>
                            <option value="Fire Stairs">Fire Stairs</option>
                            </Form.Select>
                        </Col>

                        {/* Area size */}
                        <Col>
                            <Form.Control 
                            type="number"
                            step="0.01"
                            placeholder="Area (sqm)" 
                            name="serviceAreaSize"
                            value={input.serviceAreaSize}
                            onChange={event => handleChange(index, event)}
                            />
                        </Col>

                        {/* Remove row button */}
                        <Col>
                            <Button variant='primary' onClick={() => removeRow(index)}>
                            Remove
                            </Button>
                        </Col>
                        </Row>
                    </Form.Group>
                    )
                })}
                <Button variant="primary" onClick={addRow}>
                Add row
                </Button>
              </Form>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Description of the Service Area</Accordion.Header>
            <Accordion.Body>
              <Form>
              <Form.Group>
                <Row>
                <Col></Col>
                <Col>Unit No./Tag</Col>
                <Col>Type</Col>
                <Col>Area (sqm)</Col>
                <Col></Col>
                </Row>
              </Form.Group>
              {inputs.map((input, index) => {
                  return (
                  <Form.Group key={index}>
                      <Row>
                      {/* Show index/row number */}
                      <Col>{index}</Col>

                      {/* Unit No. */}
                      <Col>
                          <Form.Control
                          type="text"
                          placeholder="Unit No./Tag"
                          name="unitNumberTag"
                          value={input.unitNumberTag}
                          onChange={event => handleChange(index, event)}
                          />
                      </Col>

                      {/* Type */}
                      <Col>
                          <Form.Select 
                          aria-label="Default select example"
                          name="serviceAreaType"
                          value={input.serviceAreaType}
                          onChange={event => handleChange(index, event)}
                          >
                          <option value="">Select service area type</option>
                          <option value="Roadway/Common Area">Roadway/Common Area</option>
                          <option value="Stairs">Stairs</option>
                          <option value="Transformer Room">Transformer Room</option>
                          <option value="Generator Room">Generator Room</option>
                          <option value="Ramp">Ramp</option>
                          <option value="Lobby/Hallway">Lobby/Hallway</option>
                          <option value="Residential Lobby">Residential Lobby</option>
                          <option value="Corridors">Corridors</option>
                          <option value="Fire Stairs">Fire Stairs</option>
                          </Form.Select>
                      </Col>

                      {/* Area size */}
                      <Col>
                          <Form.Control 
                          type="number"
                          step="0.01"
                          placeholder="Area (sqm)" 
                          name="serviceAreaSize"
                          value={input.serviceAreaSize}
                          onChange={event => handleChange(index, event)}
                          />
                      </Col>

                      {/* Remove row button */}
                      <Col>
                          <Button variant='primary' onClick={() => removeRow(index)}>
                          Remove
                          </Button>
                      </Col>
                      </Row>
                  </Form.Group>
                  )
                })}
                <Button variant="primary" onClick={addRow}>
                Add row
                </Button>
              </Form>
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
