import React from 'react';
import {List, ListItem} from '@material-ui/core';
import CommandSheetRow from "./CommandSheetRow";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendSocketMessage} from "../../store/socketMiddleware";
import {debellatioUpdateBoard} from "../../store/gameBoard.reducer";
import SproutTroopRow from "./SproutTroopRow";

interface IProps {
    stage: string
    territories: any
    army: String
    submitCommands: (payload: any) => void
    submitSprout: (payload: any) => void
    waitForPlayers: () => void
    season: number
    armyBalance: number
}

const CommandSheet: React.FC<IProps> = ({territories, army, stage, submitCommands, submitSprout, waitForPlayers, season, armyBalance}) => {
    const commandList: any = {commands: {}, season,commandCount:0};

    const dispatchOrders = () => {
        submitCommands(commandList);
    };
    const dispatchSprout = () => {
        submitSprout(commandList);
    };

    const view = getCommandSheetView();

    function getCommandSheetView(): JSX.Element | undefined {
        switch (stage) {
            case 'waiting':
                return (<h3>Waiting for other players</h3>);
            case 'main':
                return (
                    <div>
                        <List className={"commandSheetList"}>
                            {
                                territories.map((territory: any, territoryId: number) => (
                                    (territory.army === army && territory.troop !== null) &&
                                    <ListItem><CommandSheetRow key={territoryId} troopId={territoryId}
                                                               commandList={commandList.commands}/></ListItem>
                                ))
                            }
                        </List>
                        <button onClick={dispatchOrders}>
                            Send Orders
                        </button>
                    </div>
                );
            case 'sprout':
                if (armyBalance === 0) waitForPlayers();
                const buildNew = armyBalance>0 ;
                const allowedActions = Math.abs(armyBalance);
                return (
                    <div>
                        <h2>{(buildNew?`Build New ${allowedActions} Troop${(allowedActions>1?'s':'')}`:`Disband ${allowedActions} Unit${(allowedActions>1?'s':'')}`)}</h2>
                        <List className={"sproutCommandList"}>
                            {buildNew ?(
                                territories.map((territory:any,territoryId:number)=>(
                                    (territory.army === army && territory.troop===null && territory.capital !== null) && <ListItem><SproutTroopRow key={territoryId} troopId={territoryId} commandList ={commandList} allowedActions={allowedActions}/></ListItem>
                                ))
                            ):(
                                <h2>mismis</h2>
                            )}
                        </List>
                        <button onClick={dispatchSprout}>
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
        season: state.board.season,
        armyBalance: state.board.armies[state.board.countryID - 1].balance
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    submitCommands: (payload: object) => {
        dispatch(sendSocketMessage('dispatchOrders', payload));
    },
    submitSprout: (payload: object) => {
        dispatch(sendSocketMessage('sproutOrders', payload));
    },
    waitForPlayers: () => {
        dispatch(debellatioUpdateBoard({stage: 'waiting'}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandSheet);