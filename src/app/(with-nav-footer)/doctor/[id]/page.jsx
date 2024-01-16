import Image from "next/image";
// import { AiOutlineStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import getSingleDoctor from "@/utils/getSingleDoctor";
import DoctorTab from "@/components/DoctorTab/DoctorTab";
import "./doctor.css";

export const metadata = {
  title: "Doctor - Doc Home",
};

const page = async ({ params: { id } }) => {
  const doctor = await getSingleDoctor(id);
  const { imageUrls, name, title, place, speciality, ratings } = doctor;
  return (
    <div className="bg-[#F3F3F3]">
      <div className="bg-[#07332F] max-w-full h-[500px]  px-20">
        <p className="text-lg font-normal text-white pt-[250px]">
          Home / <span className="text-lg font-semibold">Doctor Profile</span>
        </p>
        <h1 className="font-bold text-[45px] text-white">Doctor Profile</h1>
        <div className="absolute bottom-[143px] bgTabletFull w-[214px] h-[215px]"></div>
        <div className="absolute right-40 bottom-[230px] bgTabletBottom w-[150px] h-[170px]"></div>
        <div className="absolute right-[93px] bottom-[300px] bgTabletTop w-[150px] h-[170px]"></div>
      </div>
      <div className="max-w-[1140px] mx-auto my-32">
        <div className="flex flex-col md:flex-row items-center gap-[30px] bg-white rounded-[10px]">
          <Image
            className="py-[35px] pl-[35px] h-[378px]"
            src={imageUrls[0]}
            width={350}
            height={378}
            alt={name}
          />
          <div>
            <h3 className="text-[#0A0808] text-[40px] font-bold mb-[5px]">
              {name}
            </h3>
            <p className="text-[#6C6B6B] text-lg leading-[26px]">{title}</p>
            <div className="flex gap-1 my-3">
              {[...Array(Math.round(ratings)).keys()].map((i) => (
                <FaStar key={i} className="w-6 h-6 text-[#F2871D]" />
              ))}
            </div>
            <div className="flex gap-5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5V10.5Z"
                  stroke="#6C6B6B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5V10.5Z"
                  stroke="#6C6B6B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#6C6B6B] leading-[26px] mt-[11px]">
                {place} -{" "}
                <span className="text-[#F7A582] font-bold leading-[26px]">
                  Get Directions
                </span>
              </p>
            </div>
            <ul className="flex gap-[15px] mt-5">
              {speciality.map((special, i) => (
                <li
                  className="text-[#6C6B6B] text-xl font-semibold py-[10px] px-[20px] border border-[#6C6B6B] rounded-[10px]"
                  key={i}
                >
                  {special}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-[10px] mt-[50px] p-[35px]">
          <DoctorTab doctor={doctor} />
        </div>
      </div>
    </div>
  );
};

export default page;
