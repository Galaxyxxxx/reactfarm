import React, { FC } from 'react';
import './Summaryitem.css';

interface Summaryitemprops {
    plantName: string;
    moneyValue: number;
    imagesrc: string;
    harvestCount: number;
}

const Summaryitem: FC<Summaryitemprops> = ({plantName, moneyValue, imagesrc, harvestCount}) => {
    return (
      <div>
        <div className='Summary-item'>
            <img src={imagesrc} alt='JP'></img>
            <span className='Summary-HarvestCount'>{harvestCount}</span>
            <span className='Summary-ItemName'>{plantName}</span>

        </div>
        <hr />
      </div>
    )
}
export default Summaryitem;