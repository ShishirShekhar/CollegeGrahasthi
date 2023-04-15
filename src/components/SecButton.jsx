import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div className="rounded-xl border-2 hover:cursor-pointer hover:bg-primary hover:border-primary hover:text-white">
            <p className="text-center px-10 py-4 font-semibold">
                <Link to={props.to}>
                    {props.value}
                </Link>
            </p>
        </div>
    )
}

export default Button;
