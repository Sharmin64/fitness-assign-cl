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
      <div className="flex flex-col md:flex-row bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={imageUrl}
            alt={`${name}`}
            className="rounded-lg object-cover w-full md:w-3/4"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-4xl font-bold mb-4">Customers Say</h2>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-400 mb-4">{title}</p>
          <p className="text-lg leading-relaxed">"{quote}"</p>
          <div className="flex mt-8 space-x-4">
            <img src="/path/to/logo1.png" alt="Logo 1" className="h-8" />
            <img src="/path/to/logo2.png" alt="Logo 2" className="h-8" />
            <img src="/path/to/logo3.png" alt="Logo 3" className="h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraFeature;
