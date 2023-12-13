import React, { useState } from 'react';
import './App.css';
import ToolPicker from './ToolPicker';
import Farm from './Farm';
import Summary from './Summary';
import FarmApp from './FarmApp';
import plantDatabase from './PlantsDatabase';

function App() {
  const [weekCount, setWeekCount] = useState<number>(1);
  const color = useState<string>("#573535");
  const [currentTool, setCurrentTool] = useState<string>("None");
  const [harvestCounters, setHarvestCounters] = useState<Record<string, number>>({        
    wheat: 0,
    tomato: 0,
    cucumber: 0,
    potato: 0,
    sunflower: 0,
    money: 0
  });
  const [farmTiles, setFarmTiles] = useState<FarmApp.FarmTile[][]>([
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}],
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}],
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}],
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}],
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}],
      [{isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}, {isReady: false, color: '#573535'}]
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
    console.log("TEST", xIndex, yIndex, currentTool, color);
    makeAction(xIndex, yIndex);
  }

  const makeAction = (xIndex: number, yIndex: number): void => {
    if (currentTool === "Delete") {
      modifyElement(xIndex, yIndex, {isReady: false, color: '#573535'});
    } else if (currentTool === "Harvest") {
      let tileToHarvest: FarmApp.FarmTile = farmTiles[xIndex][yIndex];
      if (tileToHarvest.isReady === true && tileToHarvest.plant !== undefined) {
        addToCounter(tileToHarvest.plant.plantName);
        modifyElement(xIndex, yIndex, {isReady: false, color: '#573535'});
      } else {
      }
    } else if (currentTool === "None") {
      console.log(farmTiles[xIndex][yIndex])
    } else { 
      plantDatabase.forEach((plant) => {
        if (plant.plantName === currentTool) {
          modifyElement(xIndex, yIndex, {plant: {plantName: plant.plantName, weekCount: 0, timeOfGrowth: plant.timeOfGrowth}, color: changeColor(plant.plantName),  isReady: false});
            
        }
      })
    }
  }
  
  const changeColor = (plant = 'None'): string => {
    switch(plant) {
      case 'Wheat':
        return '#cccf7e';
      case 'Tomato':
        return '#9e1321';
      case 'Potato':
        return '#8c5b22';
      case 'Sunflower':
        return '#d4b428';
      case 'Cucumber':
        return '#297a18';
      default:
        return '#573535';
    }
  }

  const addToCounter = (plant: string): void => {
    const previousCount = harvestCounters[plant.toLocaleLowerCase()];
    const previousMoney = harvestCounters.money;
    const valueOfPlant = plantDatabase.find((plantFromBase) => plantFromBase.plantName === plant)?.moneyValue || 0
    setHarvestCounters({
      ...harvestCounters,
      [plant.toLocaleLowerCase()]: previousCount + 1,
      money: previousMoney + valueOfPlant
    })
    console.log(harvestCounters)
  }

  const addWeek = (): void => {
    setWeekCount(weekCount + 1);
    growPlant();
  }

  const growPlant = (): void => {
    farmTiles.forEach((farm) => {
      farm.forEach(element => {
        if (element.plant !== undefined && element.plant.weekCount !== element.plant.timeOfGrowth) element.plant.weekCount += 1;
        if (element.plant !== undefined && element.plant.weekCount === element.plant.timeOfGrowth) element.isReady = true;
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
      <div className='week-btn'>
        <button className='button' onClick={addWeek}>
          Next week
        </button>
        </div>
        <div className='week-count'>
        <span>Week: {weekCount}</span>
      </div>
      <Summary harvestCounters={harvestCounters} />
    </div>
  );
}


export default App;
