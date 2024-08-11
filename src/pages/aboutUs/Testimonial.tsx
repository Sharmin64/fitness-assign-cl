// import gsap from "gsap";
import { useEffect, useState } from "react";

type TTestimonial = {
  image: string;
  name: string;
  testimonial: string;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TTestimonial[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) =>
        console.error("Error fetching the testimonials:", error)
      );
  }, [testimonials]);

  return (
    <>
      <h1 className="text-center text-7xl sm:mb-[1.3em] lg:mb-9 uppercase font-serif bg-gradient-to-r from-[#044755] to-[#9bc8d1] text-transparent bg-clip-text border-t-4 border-b-4">
        Testimonial of Satisfied Customers
      </h1>

      <div className="carousel w-full mx-auto h-full">
        {testimonials.map((testimonial, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full flex flex-col items-center text-center bg-[#e6e6e6]"
            key={index}
          >
            <img
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {testimonials.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
