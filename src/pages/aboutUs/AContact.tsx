import Button from "../../components/Buttton";

const AContact = () => {
  return (
    <>
      <div
        className="hero min-h-screen my-[2em]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/pXmBLPfL/istockphoto-497259852-170667a.webp)",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Get in Touch with Us!</h1>
            <p className="mb-5">
              We love hearing from our customers! Whether you have a question,
              need assistance with an order, or just want to share feedback, our
              team is here to help. Don't hesitate to get in touch!
            </p>
            <p className="mb-5">
              <strong>Phone:</strong> (123) 456-7890
              <br />
              <strong>Email:</strong> support@fitnessshop.com
              <br />
              <strong>Address:</strong> 123 Wellness Blvd, Suite 456, Fitness
              City, Fit State, 78901
            </p>
            <p className="mb-5">
              Connect with us on social media or visit our website to chat with
              our support team. Your feedback helps us improve!
            </p>
            {/* <button className="btn bg-[#519faf] text-[#000000] tex">
              Contact Us
            </button> */}
            <Button buttonName="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AContact;
