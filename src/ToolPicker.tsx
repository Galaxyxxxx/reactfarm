import React, { FC } from 'react';
import plantDatabase from './PlantsDatabase';
import './ToolPicker.css'

interface ToolPickerProps {
    changeTool: (toolName: string) => void;
    currentTool: string;
}

const getPlant = (currentTool = 'None'): any => {
  return plantDatabase.find((plant) => plant.plantName === currentTool)
}


const ToolPicker: FC<ToolPickerProps> = ({changeTool, currentTool}) => {
  return (
    <div>
      <div className='Toolbar'>
          <button className='button-deselect' onClick={() => {changeTool("None")}}>Deselect</button>
          <button className='button-delete' onClick={() => {changeTool("Delete")}}>Delete</button>
          {plantDatabase.map((plant => <button className='button' onClick={() => {changeTool(plant.plantName)}}>{plant.plantName}</button>))}
          <button className='button-harvest'onClick={() => {changeTool("Harvest")}}>Harvest</button>
      </div>
          <span className='Tool-Status'>{currentTool}</span>
          {getPlant(currentTool) !== undefined &&
          <span className='Tool-Value'>{getPlant(currentTool).moneyValue + '$'}</span>
          }
          {getPlant(currentTool) !== undefined &&
          <span className='Tool-Growth'>{getPlant(currentTool).timeOfGrowth + ' Weeks'}</span>
          }
    </div>
  );
}

export default ToolPicker;


