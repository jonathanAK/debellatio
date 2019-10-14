import React, { useState } from 'react';
import { Card, Typography} from '@material-ui/core';
import {connect} from "react-redux";
import Switch from "@material-ui/core/Switch";

interface IProps {
    troopId:number
    commandList:any
    territories:any
    allowedActions:number
}

const SproutTroopRow: React.FC<IProps> = ({troopId, commandList,territories,allowedActions}) => {
    const [order, setOrder] = useState(false);

    const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked && commandList.commandCount<allowedActions){
            setOrder(true);
            commandList.commandCount++;
            commandList.commands[troopId]='sprout';
        }else if(!event.target.checked){
            setOrder(false);
            commandList.commandCount--;
            delete commandList.commands[troopId];
        }

    };
    return (
        <Card>
            <Typography>{territories[troopId].name}</Typography>

            <Switch
                checked={order}
                onChange={handleOrderChange}
            />
        </Card>
    )
};

const mapStateToProps = (state: any) => {
    return {
        territories: state.board.territories,
    }
};

export default connect(mapStateToProps)(SproutTroopRow);