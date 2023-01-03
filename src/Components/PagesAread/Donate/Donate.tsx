import "./Donate.css";

interface DonateProps {
    bank: number;
    branch: number;
    account: number;
    owner: string;
}
function Donate(props: DonateProps): JSX.Element {
    return (
        <div className="Donate col">
            <img src="https://media.giphy.com/media/rxP6Pi3LkHJt7hmXe9/giphy.gif" alt="donate" />
            <p>We need resources, come and help us</p>
            <p>You can transfer monery right now to : <i>{props.owner}</i></p>
            <p>Bank : {props.bank} , Branch : {props.branch} , account : {props.account}</p>
        </div>
    );
}

export default Donate;
