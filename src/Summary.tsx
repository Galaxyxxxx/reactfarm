import React, { FC } from 'react';
import plantDatabase from './PlantsDatabase';
import Summaryitem from './Summaryitem';
import './Summary.css'

interface TileProps {
  harvestCounters: Record<string, number>;
}


const Summary: FC<TileProps> = ({harvestCounters}) => {
  return (
    <div>
      <div className='Summary-list'>
        {plantDatabase.map((plant) => 
          <Summaryitem harvestCount={harvestCounters[plant.plantName.toLocaleLowerCase()]} plantName={plant.plantName} moneyValue={plant.moneyValue} imagesrc={`/images/${plant.plantName}.png`}/>
        )}
      </div>
      <span className='Summary-Sum'>{`Total worth of your crops: ${harvestCounters.money}$`}</span>
    </div>
  );
}

export default Summary;
