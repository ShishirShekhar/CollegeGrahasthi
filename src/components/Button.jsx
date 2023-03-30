import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div className="rounded-xl bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l w-full hover:cursor-pointer">
            <p className="text-center py-4">
                <Link to={props.to}>
                    {props.value}
                </Link>
            </p>
        </div>
    )
}

export default Button;
