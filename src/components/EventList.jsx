/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";

function EventList({ images = [], gridSize = 3, heading }) {
  // Compute grid based on prop
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[gridSize] || "grid-cols-2 md:grid-cols-3";

  return (
    <>
        <p className=" text-center text-2xl capitalize">{heading}</p>
      <div className={``}>
        <div className={` px-4 py-2 grid ${gridClass} gap-6`}>
          {images.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No events yet — check back soon.
            </p>
          ) : (
            images.map((img) => <ImageWithLoader key={img.id} src={img.image || img.img} />)
          )}
        </div>
      </div>
    </>
  );
}


function ImageWithLoader({ src }) {
  const [loaded, setLoaded] = useState(false);

  // Handle cached images
  useEffect(() => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <section className="flex flex-col items-center justify-center relative">
      {/* Loader skeleton */}
      {!loaded && (
        <div className="w-56 sm:w-56 md:w-64 h-60 bg-gray-300 rounded-lg animate-pulse" />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt="Event"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // hide skeleton even if image fails
        className={`rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-44 sm:w-56 md:w-64 h-60 object-cover ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
}

export default EventList;
