import UspPoint from "./UspPoint";
import verified from "../../img/verified.png";

const Usp = () => {
  return (
    <div className="p-24 flex justify-evenly">
      <UspPoint
        img={verified}
        head={"Verified Rooms"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
        }
      />
      <UspPoint
        img={verified}
        head={"Verified Rooms"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
        }
      />
      <UspPoint
        img={verified}
        head={"Verified Rooms"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, molestiae!"
        }
      />
    </div>
  );
};

export default Usp;
