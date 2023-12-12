import React from 'react';
import plantDatabase from './PlantsDatabase';
import Summaryitem from './Summaryitem';
import './Summary.css'

function Summary() {
  return (
    <div className='Summary-list'>
      {plantDatabase.map((plant) => 
      <Summaryitem plantName={plant.plantName} moneyValue={plant.moneyValue} imagesrc={`/images/${plant.plantName}.png`}/>
      )}
    </div>
  );
}

export default Summary;
