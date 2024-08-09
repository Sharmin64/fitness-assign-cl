const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Left side */}
            <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Shipping Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Refund Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Search
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Collab
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Center */}
            <div className="w-full lg:w-1/3 text-center mb-6 lg:mb-0">
              <h2 className="text-gray-800 text-lg mb-2">CONTACT US</h2>
              <p className="text-gray-600 mb-2">Contact Form</p>
              <p className="text-gray-600 mb-2">(647)-372-5438</p>
              <p className="text-gray-600 mb-2">(786)-321-4830</p>
              <p className="text-gray-600">support@mightgyms.com</p>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
              <div className="flex justify-center lg:justify-end mb-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Mighty"
                  className="inline-block"
                />
              </div>
              <div className="flex justify-center lg:justify-end space-x-2">
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
                <img
                  src="https://via.placeholder.com/30"
                  alt="Payment"
                  className="inline-block"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © 2024 Mighty Fitness
          </div>
          <div className="text-center text-gray-600">Powered by Shopify</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
