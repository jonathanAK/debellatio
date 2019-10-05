import React, { useState } from 'react';
import { Card, Typography} from '@material-ui/core';
import {connect} from "react-redux";
import {TroopTypesEnum} from "../../models/troopTypes";

interface IProps {
    troopId:number
    commandList:any
    territories:any
}

const CommandSheetRow: React.FC<IProps> = ({troopId, commandList,territories}) => {
    const [order, setOrder] = useState("defend");
    const [target, setTarget] = useState(troopId.toString());
    const [auxUnit, setAuxUnit] = useState("");

    commandList[troopId]={order,target,auxUnit};
    return (
        <Card>
            <img
                className={'commandSheet-image'}
                src={`${process.env.PUBLIC_URL}/img/${territories[troopId].troop === TroopTypesEnum.tank?'tank':'ship'}.png`}
                alt="Tank"
            />
            <Typography>{troopId}</Typography>

            <select value={order} onChange={e => setOrder(e.target.value)}>
                <option value={"defend"}>Defend</option>
                <option  value={"attack"}>Attack</option>
                <option  value={"assist"}>Assist</option>
                {territories[troopId].troop===TroopTypesEnum.ship && <option  value={"convoy"}>Convoy</option>}
                {territories[troopId].troop!==TroopTypesEnum.ship && <option  value={"getConvoyed"}>Get Convoyed</option>}
            </select>
            <select value={target} onChange={e => setTarget(e.target.value)}>
                <option value={troopId}>{territories[troopId].name}</option>
                {
                    territories[troopId].borders.map((border: any) => (
                    <option value={border}>{border}</option>
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