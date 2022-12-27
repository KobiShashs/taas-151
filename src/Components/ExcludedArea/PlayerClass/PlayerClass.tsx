import { Component } from "react";
import "./PlayerClass.css";

interface PlayerClassProps {
    name: string;
    goals: number;
}

interface PlayerClassState {
    goals: number;
}
class PlayerClass extends Component<PlayerClassProps, PlayerClassState> {

    private add = () => {
        this.setState({ goals: this.state.goals + 1 });
    }

    private minus = () => {
        this.setState({ goals: this.state.goals - 1 });

    }
    public constructor(props: PlayerClassProps) {
        super(props);
        this.state = { goals: props.goals };
    }
    public render(): JSX.Element {
        return (
            <div className="PlayerClass box col cc">

                <span>{this.props.name}</span>

                <div className="row">
                    <button onClick={this.add}>+</button>
                    <span>{this.state.goals}</span>
                    <button onClick={this.minus}>-</button>
                </div>

            </div>
        );
    }
}

export default PlayerClass;
