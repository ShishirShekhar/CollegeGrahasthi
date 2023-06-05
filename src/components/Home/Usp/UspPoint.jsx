import CircleIcon from "./CircleIcon";

const UspPoint = ({ img, head, desc }) => {
  return (
    <div className="w-full sm:w-56 text-center">
      <CircleIcon img={img} />
      <p className="pt-10 font-semibold text-2xl">{head}</p>
      <p className="text-gray-400 pt-2">{desc}</p>
    </div>
  );
};


export default UspPoint;
