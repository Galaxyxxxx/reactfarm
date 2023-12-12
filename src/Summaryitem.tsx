import React, { FC } from 'react';
import './Summaryitem.css';

interface Summaryitemprops {
    plantName: string;
    moneyValue: number;
    imagesrc: string;
}

const Summaryitem: FC<Summaryitemprops> = ({plantName, moneyValue, imagesrc}) => {
    return (
      <div>
        <div className='Summary-item'>
            <img src={imagesrc} alt='JP'></img>
            <span>{plantName}</span>
        </div>
        <hr />
      </div>
    )
}
export default Summaryitem;