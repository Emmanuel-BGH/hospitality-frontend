import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card.jsx";
import { cardsData } from "../../utils/cardsData.js";

const CardCarousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = cardsData.length - cardsPerView;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / cardsPerView)}%)` }}
        >
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="shrink-0 p-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <Card image={card.image} place={card.place} fee={card.fee} />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT */}
      <button
        onClick={() => setIndex((i) => Math.max(i - 1, 0))}
        className="absolute top-1/2 -left-7 -translate-y-1/2 z-20"
      >
        <FaChevronLeft
          size={30}
          className="bg-white rounded-full p-2 shadow cursor-pointer"
        />
      </button>

      {/* RIGHT */}
      <button
        onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
        className="absolute top-1/2 -right-7 -translate-y-1/2 z-20"
      >
        <FaChevronRight
          size={30}
          className="bg-white rounded-full p-2 shadow cursor-pointer"
        />
      </button>
    </div>
  );
};

export default CardCarousel;
