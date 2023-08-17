import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Filter from "../components/Rooms/Filter";
import Map from "../components/Rooms/Map";
import RoomsCard from "../components/Rooms/RoomsCard";
import Search from "../components/Search";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/rooms")
      .then((response) => {
        setRooms(response.data.rooms.rooms);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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

      <Footer />
    </div>
  );
};

export default Rooms;
