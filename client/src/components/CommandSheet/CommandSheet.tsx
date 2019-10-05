import React from 'react';
import {List, ListItem} from '@material-ui/core';
import CommandSheetRow from "./CommandSheetRow";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendSocketMessage} from "../../store/socketMiddleware";

interface IProps {
    stage:string
    territories:any
    army:String
    submitCommands:(payload: any) => void
    season:number
}

const CommandSheet: React.FC<IProps> = ({territories,army,stage,submitCommands,season}) => {
    const commandList:any = {commands:{},season};
    const dispatchOrders = ()=>{
        submitCommands(commandList);
    };

    const view = getCommandSheetView();
    function getCommandSheetView(): JSX.Element | undefined {
        switch (stage) {
            case 'waiting':
                return(<h3>Waiting for other players</h3>);
            case 'main':
                return(
                    <div>
                        <List className={"commandSheetList"}>
                            {
                                territories.map((territory:any,territoryId:number)=>(
                            (territory.army === army && territory.troop!==null) && <ListItem><CommandSheetRow key={territoryId} troopId={territoryId} commandList ={commandList.commands}/></ListItem>
                            ))
                        }
                        </List>
                        <button onClick={dispatchOrders}>
                            Send Orders
                        </button>
                    </div>
                );
        }
        return;
    }

    return (
        <div>
            {view}
        </div>

    )
};

const mapStateToProps = (state: any) => {
    return {
        stage: state.board.stage,
        territories: state.board.territories,
        army: state.board.countryID,
        season:state.board.season
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    submitCommands: (payload:object) => {
        dispatch(sendSocketMessage('dispatchOrders',payload));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(CommandSheet);