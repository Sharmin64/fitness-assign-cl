const AboutHistory = () => {
  return (
    <>
      <div className="w-1/2 mx-auto mt-60">
        <div className="collapse collapse-plus bg-[#e6f1f4] bg-transparent">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-4xl font-medium text-white">
            Company History!
          </div>
          <div className="collapse-content">
            <p className="text-white text-xl font-medium leading-2">
              Founded in 2015 by a passionate fitness enthusiast, [Your Business
              Name] began as a small, local gym. Driven by a desire to help
              people achieve their health goals, we quickly expanded our
              services to include online training and nutrition coaching. Today,
              we're proud to be a leading fitness destination for individuals of
              all fitness levels
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#e6e6e6] bg-transparent">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-4xl font-medium text-white">
            Mission!
          </div>
          <div className="collapse-content">
            <p className="text-white text-xl font-medium leading-2">
              Our mission is to inspire and empower individuals to reach their
              full potential through personalized fitness programs and a
              supportive community. We are committed to providing exceptional
              experiences that transform lives
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#e6f1f4] bg-transparent">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-4xl font-medium text-white ">
            Vision!
          </div>
          <div className="collapse-content">
            <p className="text-white text-xl font-medium leading-2">
              We envision a world where everyone has access to the tools and
              support needed to live a healthy and fulfilling life. [Your
              Business Name] will be the leading provider of innovative fitness
              solutions, inspiring and empowering countless individuals to
              achieve their wellness goals
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHistory;
