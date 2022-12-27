import { Component } from "react";
import "./HelloClass.css";
interface HelloClassProps {
    txt: string;
}
class HelloClass extends Component<HelloClassProps> {

    public constructor(props: HelloClassProps) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <div className="HelloClass cc">
                <p>{this.props.txt}</p>
            </div>
        );
    }
}

export default HelloClass;
