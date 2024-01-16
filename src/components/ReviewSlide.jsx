import Image from "next/image";

const ReviewSlide = ({reviewOne}) => {
	const {name, title, review, imageUrl} = reviewOne;
  return (
      <div className="border border-[#E6E6E6] p-[45px] rounded-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Image className="rounded-full" src={imageUrl} width={66} height={66} alt="person" />
            <div className="">
              <h5 className="text-[#3B3A3A] text-xl font-bold leading-[26px]">
                {name}
              </h5>
              <p className="text-[#6C6B6B] leading-[26px]">{title}</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="42"
            viewBox="0 0 54 42"
            fill="none"
          >
            <path
              d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
              fill="#F7A582"
            />
            <path
              d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
              fill="#F7A582"
            />
          </svg>
        </div>
        <p className="text-[#6C6B6B] text-lg leading-[26px] mt-5">
          {review}
        </p>
      </div>
  );
};

export default ReviewSlide;
