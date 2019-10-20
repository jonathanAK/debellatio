import React from 'react';
import {TerritoryTypeEnum} from "../../../models/territoryTypes";
import './SingleTerritory.css';

interface IProps {
    name:string|number
    id:number
    army:number
    capital:string|null
    troop:number|null
    type:TerritoryTypeEnum
}

const SingleTerritory: React.FC<IProps> = ({name, id,army,capital,troop,type}) => {
    const gridRow=(id<26?'a'+(id+10).toString(36):'b'+(id-16).toString(36));//mark to location in the grid to display the block
    //convert arrays to values
    const troopType = [
        'tank',
        'ship'
    ];
    const armyClasses= [
        'armyNon',
        'armyA',
        'armyB',
        'armyC',
        'armyD',
        'armyE',
        'armyF',
        'armyG'
    ];
    const armyId = (type === TerritoryTypeEnum.Sea ? 'armySea':armyClasses[army]);
    const capitals = {'City':'SingleTerritory_capital-city','Port':'SingleTerritory_capital-port'};
    // @ts-ignore
    const classes = 'singleTerritoryBox '+ armyId + (capital ? ' ' + capitals[capital] : '');
    const troopImg = (troop!==null?troopType[troop]:null);
    return (
        <div className={classes} style={{gridArea: gridRow}}>
            <div className={'singleTerritoryBox_name'}>{name}</div>
            <div className={'singleTerritoryBox_troop'}>{troopImg&&<img src={`img/${troopImg}.png`} alt={""}/>}</div>
        </div>
    )
};

export default SingleTerritory;