import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import image from "../../img/hero.png";

const images = [];

for (let i = 0; i < 10; i++) {
  images.push(image);
}

const ImageCarousel = () => {
  const { scrollRef, next, prev } = useSnapCarousel({
    itemsToShow: 1, // Display only one item at a time
  });

  return (
    <div className="flex justify-center bg-slate-200 rounded-xl w-9/12">
      <button
        onClick={() => prev()}
        className="btn btn-primary bg-slate-200 rounded-xl px-4"
      >
        {"<"}
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-auto h-96 scroll-snap-x mandatory"
      >
        {images.map((img, i) => (
          <img
            src={img}
            alt="room"
            key={i}
            className="aspect-[7/3] scroll-snap-start"
          />
        ))}
      </div>

      <button
        onClick={() => next()}
        className="btn btn-primary bg-slate-200 rounded-xl px-4"
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;
