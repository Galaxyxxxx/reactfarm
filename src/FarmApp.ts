declare module FarmApp {

    interface Plant {
        plantName: string;
        weekCount: number;
        timeOfGrowth: number;
    }

    interface FarmTile {
        plant?: Plant;
        isReady: boolean;
    }

    interface PlantPattern {
        plantName: string;
        timeOfGrowth: number;
        moneyValue: number;
    }
}

export default FarmApp