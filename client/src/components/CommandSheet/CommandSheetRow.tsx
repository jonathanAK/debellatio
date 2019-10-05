import React, { useState } from 'react';
import { Card, Typography} from '@material-ui/core';
import {connect} from "react-redux";
import {TroopTypesEnum} from "../../models/troopTypes";

interface IProps {
    troopId:number
    troop: any
    neighbors:any
    commandList:any
    territories:any
}

const CommandSheetRow: React.FC<IProps> = ({troopId, troop,neighbors,commandList,territories}) => {
    const [order, setOrder] = useState("defend");
    const [target, setTarget] = useState(troop.location.toString());
    const [auxUnit, setAuxUnit] = useState("");

    commandList[troopId]={order,target,auxUnit};
    return (
        <Card>
            <img
                className={'commandSheet-image'}
                src={`${process.env.PUBLIC_URL}/img/${troop.type===TroopTypesEnum.tank?'tank':'ship'}.png`}
                alt="Tank"
            />
            <Typography>{troop.location}</Typography>

            <select value={order} onChange={e => setOrder(e.target.value)}>
                <option value={"defend"}>Defend</option>
                <option  value={"attack"}>Attack</option>
                <option  value={"assist"}>Assist</option>
                {troop.type===TroopTypesEnum.ship && <option  value={"convoy"}>Convoy</option>}
                {troop.type!==TroopTypesEnum.ship && <option  value={"getConvoyed"}>Get Convoyed</option>}
            </select>
            <select value={target} onChange={e => setTarget(e.target.value)}>
                <option value={troop.location}>{territories[troop.location].name}</option>
                {
                    neighbors.map((neighbor: any) => (
                    <option value={neighbor}>{neighbor}</option>
                    ))
                }
            </select>

            {(order ==="assist" || order === "convoy")&&<select value={auxUnit} onChange={e => setAuxUnit(e.target.value)}>
                {
                    territories[parseInt(target)].borders.map((neighbor: any) => (
                        <option value={neighbor}>{neighbor}</option>
                    ))
                }
            </select>}
        </Card>
    )
};

const mapStateToProps = (state: any) => {
    return {
        territories: state.board.territories,
    }
};

export default connect(mapStateToProps)(CommandSheetRow);