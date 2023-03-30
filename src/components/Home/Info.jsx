import Button from "../Button";


const Info = (props) => {
    return (
        <div className={`h-screen text-black px-24 flex items-center justify-between ${props.left ? "" : "flex-row-reverse"}`}>
            <div className="">
                <img src={props.img} alt="College Grahasthi" className="shadow-2xl rounded-xl" />
            </div>

            <div className="w-3/6">
                <div className="w-24 h-2 bg-gradient-to-r from-secondary to-primary"></div>
                <h1 className="text-5xl font-semibold w-4/5 pt-5">{props.title}</h1>
                <p className=" text-gray-300 font-semibold tracking-wider py-8">
                    {/* Add breaks to content */}
                    {props.content}
                </p>

                {
                    props.button &&
                    <div className="flex items-center">
                        <div className="w-52 text-white">
                            <Button value={props.button} to="/other" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Info;
