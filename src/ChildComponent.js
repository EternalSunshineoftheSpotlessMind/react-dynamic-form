// ChildComponent.js
import React from 'react';

const ChildComponent = ({ parentId, saleableArea, handleInputChange, addInput, removeInput }) => {
  return (
    <div>
      {saleableArea.map(child => (
        <div key={child.id}>
          <input
            type="text"
            value={child.value}
            onChange={(e) => handleInputChange(parentId, child.id, e.target.value)}
          />
          <button type="button" onClick={() => removeInput(parentId, child.id)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => addInput(parentId)}>Add Input</button>
    </div>
  );
};

export default ChildComponent;
