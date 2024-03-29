const CircleIcon = (props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute bg-[#2387C0] opacity-30 w-32 h-32 rounded-full -z-10"></div>
      <div className="bg-[#549FE1] w-24 h-24 rounded-full flex items-center justify-center">
        <img src={props.img} alt="verified logo" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default CircleIcon;
