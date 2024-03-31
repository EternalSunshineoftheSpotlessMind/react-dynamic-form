// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      saleableArea: [{ id: 1, value: '' }] // Initial saleableArea
    },
    // ... other data objects
  ]);

  const handleInputChange = (parentId, childId, newValue) => {
    const updatedData = data.map(parent => {
      if (parent.id === parentId) {
        return {
          ...parent,
          saleableArea: parent.saleableArea.map(child =>
            child.id === childId ? { ...child, value: newValue } : child
          )
        };
      }
      return parent;
    });
    setData(updatedData);
  };

  const addInput = (parentId) => {
    const updatedData = data.map(parent => {
      if (parent.id === parentId) {
        const newId = parent.saleableArea.length + 1;
        return {
          ...parent,
          saleableArea: [...parent.saleableArea, { id: newId, value: '' }]
        };
      }
      return parent;
    });
    setData(updatedData);
  };

  const removeInput = (parentId, childId) => {
    const updatedData = data.map(parent => {
      if (parent.id === parentId) {
        return {
          ...parent,
          saleableArea: parent.saleableArea.filter(child => child.id !== childId)
        };
      }
      return parent;
    });
    setData(updatedData);
  };

  const handleSubmit = () => {
    console.log('Data submitted:', data);
    // Handle the form submission here
  };

  return (
    <div>
      {data.map(parent => (
        <ChildComponent
          key={parent.id}
          parentId={parent.id}
          saleableArea={parent.saleableArea}
          handleInputChange={handleInputChange}
          addInput={addInput}
          removeInput={removeInput}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ParentComponent;
