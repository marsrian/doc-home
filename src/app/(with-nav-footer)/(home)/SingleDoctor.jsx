import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from "react-icons/fa";

const SingleDoctor = ({ doctor }) => {
  const { _id, imageUrls, name, title, place, time, fee, ratings } = doctor;
  return (
    <div className="border border-[#E6E6E6] rounded-[10px] p-5 ">
      <Image
        className="mb-5"
        src={imageUrls[0]}
        width={324}
        height={200}
        priority={true}
        alt={name}
      />
      <h1 className="text-[#3B3A3A] text-xl font-bold leading-[26px]">
        {name}
      </h1>
      <p className="text-[#6C6B6B] leading-[26px]">{title}</p>
      <div className="flex gap-1 mt-[10px] mb-5">
        {[...Array(Math.round(ratings)).keys()].map((i) => (
          <FaStar key={i} className="w-6 h-6 text-[#F2871D]" />
        ))}
      </div>
      <hr className="" />
      <p className="text-[#6C6B6B] leading-[26px] mt-[39px] flex items-center gap-5">
        <FaMapMarkerAlt className="w-6 h-6" />
        {place}
      </p>
      <p className="text-[#6C6B6B] leading-[26px] mt-[39px] my-[10px] flex items-center gap-5">
        <FaCalendarAlt className="w-6 h-6" />
        {time}
      </p>
      <p className="text-[#6C6B6B] leading-[26px] mt-[39px] mb-5 flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="#6C6B6B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        ${fee}
      </p>
      <Link href={`/doctor/${_id}`}>
        <button className="text-[#F7A582] text-xl font-bold px-[109px] py-[14px] border border-[#F7A582] rounded-[10px] hover:bg-[#F7A582] hover:text-white hover:border-0">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default SingleDoctor;
