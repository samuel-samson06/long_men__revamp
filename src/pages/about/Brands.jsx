import { useEffect, useState } from "react";
import balvenie from "../../assets/balvenie.jpg";
import { gettingPartners } from "../admin/firebase";

function Brands() {
  const [partnersList, setPartnersList] = useState([]);

  useEffect(() => {
    const partner_data = async () => {
      try {
        const data = await gettingPartners();
        setPartnersList(data);
      } catch (error) {
        console.log(error);
      }
    };
    partner_data();
  }, []);

  const defaultPartners = [
    {
      brand_name: "The Balvenie",
      imageUrl: balvenie,
      description:
        "Savor the rich flavors of our single malt scotch whisky, expertly crafted by William Grant & Sons. Please enjoy in moderation.",
    },
  ];

  const partners = [...defaultPartners, ...partnersList];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1  gap-10">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg px-6 py-8 shadow-sm hover:shadow-lg transition duration-300"
        >
          <h2 className="text-center text-lg md:text-xl font-semibold mb-4">
            {partner.brand_name}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <img
              className="rounded-md w-52 md:w-56 lg:w-64 object-cover"
              loading="lazy"
              src={partner.imageUrl}
              alt={partner.brand_name}
            />
            <p className="md:w-60 lg:w-72 md:text-base lg:text-lg leading-7 text-sm font-medium italic">
              {partner.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Brands;
