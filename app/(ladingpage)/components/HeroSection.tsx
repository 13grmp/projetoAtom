import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
type CustomHeroSectionProps = {
  imageSrc: string;
}

const HeroSection = ({ imageSrc }: CustomHeroSectionProps) => {
  return (
    <div className="bg-[#290742] text-[#9E6DC2] max-sm:py-3 md:py-8 flex justify-between items-center max-sm:gap-8 max-2xl:gap-1">
      <div className="max-w-md max-sm:[100%]  md:w-[100%] lg:w-[50%] xl:w-[80%]">
        <h1 className="max-sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-10xl font-bold mb-4">
          Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
        </h1>
        <p className="max-sm:text-lg mb-6 xl:text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique placerat hac.
        </p>
        <Link
          href="#"
          className="text-[#9E6DC2] flex items-center text-xl font-semibold hover:underline"
        >
          Veja mais
          <div className="ms-2">
            <IoMdArrowForward className="text-2xl text-[#4FFF4B]" />
          </div>
        </Link>
      </div>
      <div className="hidden lg:block w-[50%]">
        <div className="flex rounded-lg justify-end bg-gradient-to-r from-fuchsia-300 via-violet-400 to-indigo-400">
          <img src={imageSrc} alt="Code on screen" className="rounded-lg lg:w-[100%] lg:h-[35vh] xl:h-[40vh] 2xl:h-[32vh] mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
