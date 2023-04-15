import { Link } from 'react-router-dom';

const InfoLinks = (props) => {
    return (
        <div className="px-10">
            <h1 className="font-semibold pb-10">{props.title}</h1>
            <ol className=" text-gray-200 text-sm font-semibold">
                {
                    props.items.map((item) => (
                        <Link to={item.link}>
                            <li className="py-2">{ item.value }</li>
                        </Link>
                    ))
                }

            </ol>
        </div>
    );
}

export default InfoLinks;
