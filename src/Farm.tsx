import React, { FC } from 'react';
import FarmApp from './FarmApp';
import Tile from './Tile';

interface FarmProps {
    farmTiles: FarmApp.FarmTile[][];
    clickTile: (xIndex: number, yIndex: number) => void;
}

const Farm: FC<FarmProps> = ({farmTiles, clickTile}) => {

  return (
    <div className="farm-zone">
        {farmTiles.map((lineOfTiles, indexY) => (
            <div className="farm-row"> 
                {lineOfTiles.map((tile, indexX) => (
                    <Tile farmTile={tile} xIndex={indexX} yIndex={indexY} clickTile={clickTile} />
                ))}
            </div>
        ))}
    </div>
  );
}

export default Farm;
