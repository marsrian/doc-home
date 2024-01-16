import person1 from "@/assets/header/person1.png";
import person2 from "@/assets/header/person2.png";
import person3 from "@/assets/header/person3.png";
import Ellipse1 from "@/assets/header/Ellipse1.png";
import tabletFull from "@/assets/header/tabletFull.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" bg-[#07332F] max-w-full h-[800px] px-20 flex gap-16 items-center">
      <div className="mt-20 max-w-full relative">
        <h3 className="text-[65px] 2xl:text-[75px] text-[#F3F3F3] font-semibold leading-[70px] 2xl:leading-[90px] mb-5">
          Your Best Medical <br /> Help Center
        </h3>
        <p className="text-lg font-semibold text-[#F3F3F3] mb-[30px]">
          Lorem Ipsum is simply dummy text they are printing typesetting <br />{" "}
          has been the industry’s stardard
        </p>
        <button className="bg-[#F7A582] hover:bg-red-500 rounded-[10px] text-white text-lg font-bold py-[18px] px-7">
          All Service
        </button>
        <Image src={tabletFull} className="absolute -bottom-24 right-0" alt="TabletFull" />
      </div>
      <div className="relative flex">
        <Image src={Ellipse1} className="absolute -top-24 left-60 z-0" alt="Ellipse1" />
        <Image src={person1} className="z-20" alt="person1" />
        <Image src={person2} className="absolute top-32 left-36 right-0 z-30" alt="person2" />
        <Image src={person3} className="absolute -top-10 left-72 z-40" alt="person3" />
      </div>
    </div>
  );
};

export default Header;
