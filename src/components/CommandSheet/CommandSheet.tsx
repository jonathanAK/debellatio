import React from 'react';
import {Fab, Grid, List, ListItem} from '@material-ui/core';
import CommandSheetRow from "./CommandSheetRow";

interface IProps {
    troops:any
    territory:any
    army:String
    commandSubmit:Function

}

const CommandSheet: React.FC<IProps> = ({troops, territory,army,commandSubmit}) => {
    return (
        <Grid container spacing={3}>
            <List className={"commandSheetList"}>

            {
                troops.map((troop:any)=>(
                    (troop.army === army) && <ListItem><CommandSheetRow troop={troop} neighbors={territory[troop.location].borders}/></ListItem>
                ))
            }
            </List>
            <Fab variant="extended" aria-label="delete">
                Send Orders
            </Fab>
        </Grid>
    )
};

export default CommandSheet;