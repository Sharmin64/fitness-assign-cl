import logoA from "../../assets/logos/logo-life-fitness.png";
import logoB from "../../assets/logos/Esprit_logo_PNG1.png";
import logoC from "../../assets/logos/cybex-png.png";
import logoD from "../../assets/logos/pngwing.com.png";
import logoE from "../../assets/logos/Burberry_logo_PNG1.png";
import logoF from "../../assets/logos/precor.jpg";

interface CustomerTestimonialProps {
  name: string;
  title: string;
  quote: string;
  imageUrl: string;
}

const ExtraFeature: React.FC<CustomerTestimonialProps> = ({
  name,
  title,
  quote,
  imageUrl,
}) => {
  return (
    <>
      <div className=" min-h-screen bg-[#a39a9a]  items-center justify-centerh-[40em] flex flex-col md:flex-row text-[#000000] p-8 rounded-lg shadow-lg mb-14">
        <div className=" relative  md:w-1/2 flex justify-center md:justify-start">
          <img
            src={imageUrl}
            alt={`${name}`}
            className=" absolute z-30 -inset-56 left-6 rounded-lg object-cover w-[30em] md:w-3/4"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-4xl font-bold mb-4">Our Sponsors Group</h2>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-[#000000] mb-4">{title}</p>
          <p className="text-lg leading-relaxed">"{quote}"</p>
          <div className="flex flex-row mt-8 space-x-4">
            <img src={logoA} alt="Logo 1" className="h-14" />
            <img src={logoB} alt="Logo 2" className="h-8 w-20" />
            <img src={logoC} alt="Logo 3" className="h-8 w-20" />
            <img src={logoD} alt="Logo 1" className="h-8 w-24" />
            <img src={logoE} alt="Logo 2" className="h-8 w-32" />
            <img src={logoF} alt="Logo 3" className="h-8 w-20" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraFeature;
