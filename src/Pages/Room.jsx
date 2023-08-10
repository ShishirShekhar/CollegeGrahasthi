import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import ImageCarousel from "../components/Room/ImageCarousel";

const Room = () => {
  return (
    <div>
      <Nav />
      <div className="px-10 py-4 bg-slate-100 flex justify-center">
        <ImageCarousel />
        <div className="px-10 py-5">
          <h1>Title here</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            nihil.
          </p>

          <div className="flex gap-2 items-center">
            <p className="font-semibold">5.0</p>
            <div className="text-secondary text-lg">★★★★★</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Room;
