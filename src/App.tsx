import React, { useState } from 'react';
import './App.css';
import ToolPicker from './ToolPicker';
import Farm from './Farm';
import Summary from './Summary';
import FarmApp from './FarmApp';
import plantDatabase from './PlantsDatabase';

function App() {
  const [weekCount, setWeekCount] = useState<number>(1);
  const [currentTool, setCurrentTool] = useState<string>("None");
  const [farmTiles, setFarmTiles] = useState<FarmApp.FarmTile[][]>([
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}],
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}],
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}],
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}],
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}],
      [{isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}, {isReady: false}]
    ])

  const modifyElement = (xIndex: number, yIndex: number, newValue: FarmApp.FarmTile): void => {
    const rowToModify = farmTiles[xIndex];
    const modifiedRow: FarmApp.FarmTile[] = [];
    rowToModify.forEach((element, index) => {
      if (index === yIndex) {
        modifiedRow.push(newValue);
      } else {
        modifiedRow.push(element)
      }
    })
    const newFarmState = [...farmTiles];
    newFarmState.splice(xIndex, 1, modifiedRow);

    setFarmTiles(newFarmState);
  }

  const clickTile = (xIndex: number, yIndex: number): void => {
    console.log("TEST", xIndex, yIndex, currentTool);
    makeAction(xIndex, yIndex);
  }

  const makeAction = (xIndex: number, yIndex: number): void => {
    if (currentTool === "Delete") {
      modifyElement(xIndex, yIndex, {isReady: false});
    } else if (currentTool === "Harvest") {

    } else if (currentTool === "None") {
      console.log(farmTiles[xIndex][yIndex])
    } else { 
      plantDatabase.forEach((plant) => {
        if (plant.plantName === currentTool) {
          modifyElement(xIndex, yIndex, {plant: {plantName: plant.plantName, weekCount: 0, timeOfGrowth: plant.timeOfGrowth}, isReady: false});
          console.log(xIndex, yIndex)
        }
      })
    }
  }

  const addWeek = (): void => {
    setWeekCount(weekCount + 1);
    //growPlant();
  }

  const growPlant = (): void => {
    farmTiles.forEach((farm) => {
      let copy = farm.forEach(element => {
      
      }); 
    });;
  }
  return (
    <div>
      <ToolPicker 
      currentTool={currentTool}
      changeTool={setCurrentTool}
      />
      <Farm 
        farmTiles={farmTiles} 
        clickTile={clickTile} 
      />
      <div>
        <button onClick={addWeek}>
          Next week
        </button>
        <p>{weekCount}</p>
      </div>
      <Summary />
    </div>
  );
}


export default App;
