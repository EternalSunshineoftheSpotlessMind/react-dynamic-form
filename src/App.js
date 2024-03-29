import { useState, Fragment } from 'react';
import Floor from './components/Create Document/Floor';
import { v4 as uuidv4 } from 'uuid';

//Bootstrap components
import { Form, Button } from 'react-bootstrap';

//Firebase imports
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from './firebase';

const App = () => {
  //Array of floors. Floors are identified by id that is created using uuid
  const [floors, setFloors] = useState([
    {
      id: uuidv4(),
      floorName: ''
    }
  ])

  //Change handler for Floor name
  const handleChange = (index, event) => {
    let data = [...floors];
    data[index][event.target.name] = event.target.value;
    setFloors(data);
  }

  //Add new floor by creating and adding a new id to floors.id
  const addFloor = () => {
    const newFloor = {id: uuidv4()}
    setFloors((prevFloors) => [...prevFloors, newFloor])
  }

  //Remove floor from array by using index
  const removeFloor = (index) => {
    setFloors((prevFloors) => prevFloors.filter((floor) => floor.id !== index));
  }

  //Submits the contents of inputs
  const submit = (event) => {
    event.preventDefault();
    console.log(floors);
  }

  return (
    <div className='home'>
      <h1>Create Building Surface Document</h1>
      <Form>
        {floors.map((floor, index) => (
            <Fragment key={floor.id}>
              <h3>{floor.id}</h3>
              <Form.Control
                size='lg'
                type="text"
                placeholder="Floor name"
                name="floorName"
                value={floors.floorName}
                onChange={event => handleChange(index, event)}
                />
              <Floor />
              <Button variant='secondary' onClick={() => removeFloor(floor.id)}>Remove floor</Button>
            </Fragment>
        ))}
      </Form>
      <Button variant='secondary' onClick={addFloor}>Add Floor</Button>
      <Button variant="primary" onClick={submit}>Submit</Button>
    </div>
  );
}

export default App;
