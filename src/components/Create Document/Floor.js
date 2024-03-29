import SaleableArea from "../Forms/SaleableArea";
import ServiceArea from "../Forms/ServiceArea";
import ParkingArea from "../Forms/ParkingArea";

//Bootstrap components
import { Accordion } from 'react-bootstrap';

const Floor = () => {
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Description of the Saleable Area</Accordion.Header>
                    <Accordion.Body><SaleableArea /></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description of the Service Area</Accordion.Header>
                    <Accordion.Body><ServiceArea /></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Parking Area</Accordion.Header>
                    <Accordion.Body><ParkingArea /></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Floor;