import cg from "../../img/cg.png";

const RoomsCard = () => {
  return (
    <div className="flex shadow-lg hover:shadow-2xl hover:shadow-secondary rounded px-2 py-4">
      <div className="">
        <img
          src={cg}
          alt="cg"
          className="rounded-xl w-56 aspect-square drop-shadow-xl"
        />
      </div>
      <div className="px-2">
        <h1 className="text-xl font-bold">Title here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <ul className="flex flex-wrap text-gray-500">
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>Wifi
          </li>
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>AC
          </li>
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>Chair
          </li>
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>Kitchen
          </li>
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>Fir
            Security
          </li>
          <li className="pr-2">
            <span className="text-xl md:text-2xl lg:text-3xl">·</span>Animal
            Friendly
          </li>
        </ul>

        <div className="flex gap-2 flex-wrap py-4">
          <div className="p-2 bg-sky-400 text-blue-800 w-fit rounded-xl">
            New Building
          </div>
          <div className="p-2 bg-emerald-400 text-green-800 w-fit rounded-xl">
            Clean and neat
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">5.0</p>
            <div className="text-secondary text-lg">★★★★★</div>
            <p>(7 reviews)</p>
          </div>
          <p>
            <span className="font-bold text-xl">₹3000</span> /month
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
