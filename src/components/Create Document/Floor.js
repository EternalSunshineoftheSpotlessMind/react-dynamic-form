import SaleableArea from "../Forms/SaleableArea";
import ServiceArea from "../Forms/ServiceArea";
import ParkingArea from "../Forms/ParkingArea";

//Bootstrap components
import { Accordion } from 'react-bootstrap';

const Floor = ({
    floorIndex, saleableArea, onSaleableAreaChange, onAddSaleableArea, onRemoveSaleableArea,
                serviceArea, onServiceAreaChange, onAddServiceArea, onRemoveServiceArea,
                parkingArea, onParkingAreaChange, onAddParkingArea, onRemoveParkingArea}) => {
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Description of the Saleable Area</Accordion.Header>
                    <Accordion.Body>
                        <SaleableArea 
                            floorIndex={floorIndex}
                            saleableArea={saleableArea}
                            onSaleableAreaChange={onSaleableAreaChange}
                            onAddSaleableArea={onAddSaleableArea}
                            onRemoveSaleableArea={onRemoveSaleableArea}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Description of the Service Area</Accordion.Header>
                    <Accordion.Body>
                        <ServiceArea
                            floorIndex={floorIndex}
                            serviceArea={serviceArea}
                            onServiceAreaChange={onServiceAreaChange}
                            onAddServiceArea={onAddServiceArea}
                            onRemoveServiceArea={onRemoveServiceArea}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Parking Area</Accordion.Header>
                    <Accordion.Body>
                        <ParkingArea 
                            floorIndex={floorIndex}
                            parkingArea={parkingArea}
                            onParkingAreaChange={onParkingAreaChange}
                            onAddParkingArea={onAddParkingArea}
                            onRemoveParkingArea={onRemoveParkingArea}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Floor;