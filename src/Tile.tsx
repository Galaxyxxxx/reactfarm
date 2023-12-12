import React, { FC } from 'react';
import FarmApp from './FarmApp';
import'./Tile.css';

interface TileProps {
    farmTile: FarmApp.FarmTile;
    xIndex: number;
    yIndex: number;
    clickTile: (xIndex: number, yIndex: number) => void;
}

const Tile: FC<TileProps> = ({farmTile, xIndex, yIndex, clickTile}) => {

  return (
    <div className="farm-tile" onClick={() => {clickTile(yIndex, xIndex)}}>
        <span>{farmTile.plant?.plantName}</span><br/>
        <span>{farmTile.plant?.weekCount}{farmTile.plant?.plantName !== undefined && '/'}{farmTile.plant?.timeOfGrowth}</span>
    </div>
  );
}

export default Tile;
