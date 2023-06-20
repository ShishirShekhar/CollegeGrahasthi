import Nav from "../components/Nav";
import Filter from "../components/Rooms/Filter";
import Map from "../components/Rooms/Map";
import RoomsCard from "../components/Rooms/RoomsCard";
import Search from "../components/Search";

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <Nav />

      <div className="md:hidden drop-shadow-xl py-4 px-2">
        <Search value="Search by city name, area, or property" />
      </div>

      <div className="lg:flex justify-between px-10 mt-8 w-full">
        <div className="">
          <Filter />
          <div className="flex flex-col gap-10 pb-10">
            <RoomsCard />
            <RoomsCard />
            <RoomsCard />
            <RoomsCard />
            <RoomsCard />
          </div>
        </div>

        <div className="hidden lg:block w-1/3">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
