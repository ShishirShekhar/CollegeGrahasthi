import UspPoint from "./UspPoint";
import verified from "../../../img/verified.png";

const uspPoints = [
  {
    img: verified,
    head: "Verified Rooms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
  },
  {
    img: verified,
    head: "Verified Rooms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
  },
  {
    img: verified,
    head: "Verified Rooms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
  }
];

const Usp = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-wrap justify-between">
      {uspPoints.map((uspPoint, index) => (
        <div key={index} className="text-center mb-8">
          <UspPoint img={uspPoint.img} head={uspPoint.head} desc={uspPoint.desc} />
        </div>
      ))}
    </div>
  );
};

export default Usp;
