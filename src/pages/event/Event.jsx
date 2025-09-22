import React from "react";
import EventBanner from "./EventBanner";
import EventList from "../../components/EventList";

import event2 from "../../assets/event2.jpg";
import event3 from "../../assets/event3.jpg";
import event4 from "../../assets/event4.webp";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery7.jpg";
import gallery7 from "../../assets/gallery8.jpg";
import gallery8 from "../../assets/gallery9.jpg";

const staticEventImages = [
  { image: event2, id: "234" },
  { image: event3, id: "123" },
  { image: event4, id: "345" },
];

const galleryEvent = [
  { image: gallery1, id: "12" },
  { image: gallery2, id: "23" },
  { image: gallery3, id: "34" },
  { image: gallery4, id: "45" },
  { image: gallery5, id: "56" },
  { image: gallery6, id: "78" },
  { image: gallery7, id: "89" },
  { image: gallery8, id: "09" },
];

function Event() {
  return (
    <React.Fragment>
      <main>
        <EventBanner />
        <section className="px-2 md:px-8 lg:px-16 py-10 space-y-14">
          <div className="text-center">
            <h1 className="italic font-semibold text-xl md:text-2xl lg:text-3xl text-primary-900">
              Cheers to the art of living well!
            </h1>
          </div>

          <div className="bg-gray-100 py-10  rounded-md shadow-sm">
            <EventList
              images={staticEventImages}
              gridSize={3}
              heading={"Previous Events"}
            />
          </div>

          <div className="bg-gray-100 py-10 rounded-md shadow-sm">
            <EventList
              images={galleryEvent}
              gridSize={4}
              heading={"Gallery"}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Event;
