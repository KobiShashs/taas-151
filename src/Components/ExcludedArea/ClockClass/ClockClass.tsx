import { Component } from "react";
import "./ClockClass.css";
import moment from "moment";

interface ClockClassState {
    time: Date;
}
class ClockClass extends Component<{}, ClockClassState> {

    private timerId: any = null;

    // Mounting
    public componentDidMount(): void {
        this.timerId = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    // UnMounting
    public componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    public constructor(props: {}) {
        super(props);
        this.state = { time: new Date() };
    }
    public render(): JSX.Element {
        return (
            <div className="ClockClass">
                <p>{moment(this.state.time).format("HH:mm:ss")}</p>
            </div>
        );
    }
}

export default ClockClass;