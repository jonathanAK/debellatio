import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from '@material-ui/core';
import {TroopType} from '../../data/troop/troop.types';

interface IProps {
    troop: any;
    neighbors:any;
}

const CommandSheetRow: React.FC<IProps> = ({troop,neighbors}) => {
    return (
        <Card>
            <img
                className={'commandSheet-image'}
                src={`${process.env.PUBLIC_URL}/img/${troop.type===TroopType.Infantry?'tank':'ship'}.png`}
                alt="Tank"
            />
            <Typography>{troop.location}</Typography>

            <select>
                <option>Defend</option>
                <option>Attack</option>
                <option>Assist</option>
                {troop.type===TroopType.Naval&& <option>Convoy</option>}
            </select>
            <select>
                <option>{troop.location}</option>
                {
                    neighbors.map((neighbor: any) => (
                    <option>{neighbor}</option>
                    ))
                }
            </select>
        </Card>
    )
};

export default CommandSheetRow;