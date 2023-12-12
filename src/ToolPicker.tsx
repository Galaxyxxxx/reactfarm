import React, { FC } from 'react';
import plantDatabase from './PlantsDatabase';
import './ToolPicker.css'

interface ToolPickerProps {
    changeTool: (toolName: string) => void;
    currentTool: string;
}


const ToolPicker: FC<ToolPickerProps> = ({changeTool, currentTool}) => {
  return (
    <div>
      <div className='Toolbar'>
          <button onClick={() => {changeTool("None")}}>Deselect</button>
          <button onClick={() => {changeTool("Delete")}}>Delete</button>
          {plantDatabase.map((plant => <button onClick={() => {changeTool(plant.plantName)}}>{plant.plantName}</button>))}
          <button onClick={() => {changeTool("Harvest")}}>Harvest</button>
      </div>
          <span className='Tool-Status'>{currentTool}</span>
    </div>
  );
}

export default ToolPicker;


