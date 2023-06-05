import StatCard from "./StatCard";

const Stat = () => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8 py-20">
        <StatCard
          value="150+"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          color="text-cyan-500"
        />
        <StatCard
          value="3M"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          color="text-pink-500"
        />
      </div>
      <div className="flex flex-col gap-8">
      <StatCard
          value="80K+"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          color="text-orange-500"
        />
        <StatCard
          value="90+"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          color="text-lime-500"
        />
      </div>
    </div>
  );
};

export default Stat;
