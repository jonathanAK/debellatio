import React from 'react';
import {connect} from "react-redux";
import './GameMap.css';
import SingleTerritory from "./subComponents/SingleTerritory";
interface IProps {
    territories:[any]
}

const GameMap: React.FC<IProps> = ({territories}) => {
    return (
        <div className={'GameMap'}>
            {territories.map((territory)=>(<SingleTerritory
                key={territory.id}
                name={territory.name}
                id={territory.id}
                army={territory.army}
                capital={territory.capital}
                troop={territory.troop}
                type={territory.type}
            />))}
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        territories: state.board.territories
    }
};

export default connect(mapStateToProps)(GameMap);