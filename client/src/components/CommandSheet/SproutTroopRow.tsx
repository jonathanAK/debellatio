import React, { useState } from 'react';
import {connect} from "react-redux";
import Switch from "@material-ui/core/Switch";
import {TerritoryTypeEnum} from "../../models/territoryTypes";
import './SproutTroopRow.css';

interface IProps {
    troopId:number
    commandList:any
    territories:any
    allowedActions:number
    sprout?:boolean
}

const SproutTroopRow: React.FC<IProps> = ({troopId, commandList,territories,allowedActions,sprout=false}) => {
    const actionParam = (sprout?'sprout':'destroy');
    const [order, setOrder] = useState(false);

    const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked && commandList.commandCount<allowedActions){
            setOrder(true);
            commandList.commandCount++;
            commandList.commands[troopId]=actionParam;
        }else if(!event.target.checked){
            setOrder(false);
            commandList.commandCount--;
            delete commandList.commands[troopId];
        }

    };
    return (
        <div className={'SproutTroopRow'}>
            <img
                className={'SproutTroopRow_image'}
                src={`${process.env.PUBLIC_URL}/img/${territories[troopId].type === TerritoryTypeEnum.Land?'tank':'ship'}.png`}
                alt="Tank"
            />
            {territories[troopId].name}
            <div className={'SproutTroopRow_Switch'}>
                <Switch
                    checked={order}
                    onChange={handleOrderChange}
                />
            </div>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        territories: state.board.territories,
    }
};

export default connect(mapStateToProps)(SproutTroopRow);