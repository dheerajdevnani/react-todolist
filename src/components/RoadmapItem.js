// RoadmapItem.js
import React from 'react';
import './RoadmapItem.css';

const RoadmapItem = ({ id, step, deleteStep }) => {
  return (
    <li>
      {step.text}
      <button onClick={() => deleteStep(id)}>Delete</button>
    </li>
  );
};

export default RoadmapItem;
