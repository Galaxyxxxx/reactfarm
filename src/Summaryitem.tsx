import React, { FC } from 'react';
import './Summaryitem.css';

interface Summaryitemprops {
    plantName: string;
    moneyValue: number;
    imagesrc: string;
}

/*const pathToImage = (plantName = 'None'): string => {
    return `./${plantName}.png`;
}*/

const Summaryitem: FC<Summaryitemprops> = ({plantName, moneyValue, imagesrc}) => {
    return (
        <div className='Summary-item'>
            <img src={imagesrc} alt='JP'></img>
            <span>{plantName}</span>
            <span>{moneyValue}</span>
        </div>
    )
}
export default Summaryitem;