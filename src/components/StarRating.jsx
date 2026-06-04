import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function StarRating({ rate, count }) {
  const roundedRating = Math.round(rate * 2) / 2;

  return (
    <div className="flex items-center mt-2 md:mt-0 text-sm text-gray-600">
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;
        if (roundedRating >= starNumber) {
          return <FaStar key={i} color="#ffc107" />;
        }
        if (roundedRating + 0.5 >= starNumber) {
          return <FaRegStarHalfStroke key={i} color="#ffc107" />;
        }
        return <FaStar key={i} color="#e4e5e9" />;
      })}
      <span className="ml-2">{`(${count})`}</span>
    </div>
  );
}

export default StarRating;
