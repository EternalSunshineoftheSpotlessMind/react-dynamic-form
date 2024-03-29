import { useState, Fragment } from 'react';

//Bootstrap components
import { Col, Row, Form, Button } from 'react-bootstrap';

const ServiceArea = () => {
    //Array for dynamic inputs
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

    //Add new row for saleable area
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

    return (
        <>
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
                    <Col>{index + 1}</Col>

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
        </>
    )
}

export default ServiceArea;