import React from 'react';

interface IProps {
    name:string|number
    id:number
    army:number
    capital:string|null
    troop:number|null
}

const SingleTerritory: React.FC<IProps> = ({name, id,army,capital,troop}) => {
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
    const armyId = (armyClasses[army]?armyClasses[army]:'armySea');

    const classes = 'singleTerritoryBox '+ armyId;
    const troopImg = (troop!==null?troopType[troop]:null);
    return (
        <div className={classes} style={{gridArea: gridRow}}>
            <div className={'singleTerritoryBox_name'}>{name}</div>
            <div className={'singleTerritoryBox_troop'}>{troopImg&&<img src={`img/${troopImg}.png`}/>}</div>
            <div className={'singleTerritoryBox_capital'}>{capital&&<img src={'img/crane.png'}/>}</div>
        </div>
    )
};

export default SingleTerritory;