const Button = (props) => {
    return (
        <div className="rounded-xl bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l w-full hover:cursor-pointer">
            <p className="text-center py-4">
                {props.value}
            </p>
        </div>
    )
}

export default Button;
