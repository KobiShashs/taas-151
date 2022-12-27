import { useState } from "react";
import "./PlayerFunction.css";

interface PlayerFunctionProps {
    name: string;
    goals: number;
}


function PlayerFunction(props: PlayerFunctionProps): JSX.Element {
    const [goals, setGoals] = useState(props.goals);

    const add = () => {
        setGoals(x => x + 1);
    }

    const minus = () => {
        setGoals(x => x - 1);
    }
    return (
        <div className="PlayerFunction box col fc">

            <span>{props.name}</span>

            <div className="row">
                <button onClick={add}>+</button>
                <span>{goals}</span>
                <button onClick={minus}>-</button>
            </div>

        </div>
    );
}

export default PlayerFunction;
