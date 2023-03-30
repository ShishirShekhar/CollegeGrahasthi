import CircleIcon from "./CircleIcon";

const UspPoint = (props) => {
  return (
    <div className=" w-56 text-center">
      <CircleIcon img={props.img} />
      <p className="pt-10 font-semibold text-2xl">{props.head}</p>
      <p className=" text-gray-400 pt-2">{props.desc}</p>
    </div>
  );
};

export default UspPoint;
