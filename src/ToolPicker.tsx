import React, { FC } from 'react';
import plantDatabase from './PlantsDatabase';

interface ToolPickerProps {
    changeTool: (toolName: string) => void;
    currentTool: string;
}


const ToolPicker: FC<ToolPickerProps> = ({changeTool, currentTool}) => {
  return (
    <div>
        <button onClick={() => {changeTool("None")}}>Deselect</button>
        <button onClick={() => {changeTool("Delete")}}>Delete</button>
        {plantDatabase.map((plant => <button onClick={() => {changeTool(plant.plantName)}}>{plant.plantName}</button>))}
        <button onClick={() => {changeTool("Harvest")}}>Harvest</button>
        {currentTool}
    </div>
  );
}

export default ToolPicker;


