const AFeature = () => {
  return (
    <div className="mt-12 container h-[20em] mx-auto md:h-[25em] z-10">
      <div className="bg-base-200 collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#b3b3b3] text-[#055364] peer-checked:bg-[#1f8498] peer-checked:text-[#ffffff] text-6xl">
          Watch our feature about Fitness here...
        </div>
        <div className="collapse-content text-primary-content peer-checked:bg-[#cde4e8] peer-checked:text-[#01181c] flex flex-1">
          <section className="mb-8">
            <h2 className="text-5xl font-semibold mb-4">
              Our Fitness Philosophy
            </h2>
            <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
              Our core values are health, wellness, community, and
              results-oriented progress
            </p>
            <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
              Our mission is to empower individuals to achieve their optimal
              health and fitness goals through personalized guidance, supportive
              community, and innovative training methods.
            </p>
            <p className="min-w-full w-1/2 break-words text-ellipsis font-sans text-3xl list-disc">
              What sets us apart is our unwavering commitment to creating a
              transformative fitness experience that goes beyond physical
              results. We focus on holistic well-being, fostering a positive
              mindset, and building long-lasting relationships with our clients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AFeature;
