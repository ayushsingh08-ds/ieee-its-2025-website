import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !right-6 z-20 text-blue-700 hover:scale-110 transition-transform`}
      style={{ ...style, display: "block", fontSize: "28px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !left-6 z-20 text-blue-700 hover:scale-110 transition-transform`}
      style={{ ...style, display: "block", fontSize: "28px" }}
      onClick={onClick}
    />
  );
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Event photos
  const eventImages: Record<string, string[]> = {
    ai: [
      "https://source.unsplash.com/800x400/?artificial-intelligence,technology",
      "https://source.unsplash.com/800x400/?machine-learning,coding",
      "https://source.unsplash.com/800x400/?robotics,ai",
    ],
    hackathon: [
      "https://source.unsplash.com/800x400/?hackathon,coding",
      "https://source.unsplash.com/800x400/?teamwork,innovation",
      "https://source.unsplash.com/800x400/?programming,startup",
    ],
    techtalk: [
      "https://source.unsplash.com/800x400/?conference,technology",
      "https://source.unsplash.com/800x400/?presentation,tech",
      "https://source.unsplash.com/800x400/?public-speaking,seminar",
    ],
  };

  const eventTitles: Record<string, string> = {
    ai: "Workshop on AI",
    hackathon: "Hackathon",
    techtalk: "Tech Talk",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = eventImages[id || ""] || [];
  const title = eventTitles[id || ""] || "Event";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-6">
      <button
        className="mb-6 text-blue-700 font-semibold hover:underline hover:text-blue-900 transition"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-900 drop-shadow-md">
        {title}
      </h2>

      {images.length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-blue-100 hover:shadow-blue-200 transition">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-[420px] border border-gray-200 hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p className="text-center text-gray-700 font-medium">
          No photos available.
        </p>
      )}
    </div>
  );
};

export default EventDetails;
