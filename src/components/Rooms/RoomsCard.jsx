import cg from "../../img/cg.png";

const RoomsCard = ({ room }) => {
  return (
    <div className="flex shadow-lg hover:shadow-2xl hover:shadow-secondary rounded px-2 py-4">
      <div className="">
        <img
          src={room.image || cg}
          alt="cg"
          className="rounded-xl w-56 aspect-square drop-shadow-xl"
        />
      </div>
      <div className="px-2">
        <h1 className="text-xl font-bold">{room.name}</h1>
        <p>{room.description}</p>

        <ul className="flex flex-wrap text-gray-500">
          {room.facilities.map((facility) => {
            return (
              <li className="pr-2" key={facility}>
                <span className="text-xl md:text-2xl lg:text-3xl">·</span>
                {facility}
              </li>
            );
          })}
        </ul>

        <div className="flex gap-2 flex-wrap py-4">
          {room.features.map((feature) => {
            return (
              <div className="p-2 bg-sky-400 text-blue-800 w-fit rounded-xl">
                {feature}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between pt-4">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">{room.rating}</p>
            <div className="text-secondary text-lg">★★★★★</div>
            <p>({room.reviews} reviews)</p>
          </div>
          <p>
            <span className="font-bold text-xl">₹{room.price}</span> /month
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
