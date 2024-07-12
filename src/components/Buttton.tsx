import { FaArrowRight } from "react-icons/fa";

type TButtonName = {
  buttonName: string;
};

const Button = ({ buttonName }: TButtonName) => {
  return (
    <>
      <button className=" text-[1.5em] inline-block font-medium text-[#056a7f] border-4 border-[#519faf] px-16 py-2 rounded-full hover:text-white hover:text-center group relative items-center text-center overflow-hidden indent-0 bg-[#cde4e8]">
        <span className="absolute left-0 w-full h-0 transition-all bg-[#06768d] opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease-in"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease-in">
          <FaArrowRight />
        </span>
        <span className="relative right-6 flex items-center justify-center  w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease-in uppercase">
          {buttonName}
        </span>
      </button>
    </>
  );
};

export default Button;
