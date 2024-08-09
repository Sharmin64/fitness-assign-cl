import navIcon from "../../assets/icons/muscle-icon.png";
import expIcon from "../../assets/icons/footerIcon/american-express.png";
import appleIcon from "../../assets/icons/footerIcon/apple-pay.png";
import googleIcon from "../..//assets/icons/footerIcon/google-pay.png";
import payPalIcon from "../../assets/icons/footerIcon/paypal.png";
import visaIcon from "../../assets/icons/footerIcon/visa.png";
import cardIcon from "../../assets/icons/footerIcon/card.png";
import cutIcon from "../../assets/icons/footerIcon/drink.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#666666] border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            {/* Left side */}
            <div className="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
              <ul className="list-none">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-white text-2xl font-bold hover:text-gray-800"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Shipping Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Refund Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Search
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Collab
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white hover:text-gray-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Center */}
            <div className="w-full lg:w-1/3 text-center mb-6 lg:mb-0">
              <h2 className="text-white text-2xl font-bold mb-2">CONTACT US</h2>
              <p className="text-white mb-2">Contact Form</p>
              <p className="text-white mb-2">(647)-372-5438</p>
              <p className="text-white mb-2">(786)-321-4830</p>
              <p className="text-white">support@coremusclegyms.com</p>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0">
              <div className="flex justify-center lg:justify-end mb-4">
                <img
                  src={navIcon}
                  alt="coremuscle"
                  className="inline-block w-20"
                />
              </div>
              <div className="flex justify-center lg:justify-end space-x-2">
                <img
                  src={googleIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={expIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={appleIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={payPalIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={visaIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={cardIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
                <img
                  src={cutIcon}
                  alt="Payment"
                  className="inline-block w-10"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xl text-white">
            © 2024 Mighty Fitness
          </div>
          <div className="text-center text-white text-xl">
            Powered by Shopify
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
