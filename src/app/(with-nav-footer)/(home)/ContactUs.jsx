const ContactUs = () => {
  return (
    <div className="mt-32 px-4 md:px-0">
      <div className="bg-[#07332F] grid grid-cols-1 md:grid-cols-2 gap-6 p-16 md:p-[100px] rounded-[10px] w-full h-[528px] items-center">
        <div className="text-[white]">
          <h3 className="text-[40px] font-bold mb-5">Contact With Us</h3>
          <p className="leading-[26px] mb-[30px] md:w-[361px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <p className="flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M25.3125 4.6875V10.3125M25.3125 4.6875H19.6875M25.3125 4.6875L17.8125 12.1875M21.5625 27.1875C11.2075 27.1875 2.8125 18.7925 2.8125 8.4375V5.625C2.8125 4.87908 3.10882 4.16371 3.63626 3.63626C4.16371 3.10882 4.87908 2.8125 5.625 2.8125H7.34C7.985 2.8125 8.5475 3.25125 8.70375 3.8775L10.0863 9.40625C10.2238 9.95625 10.0187 10.5337 9.565 10.8725L7.94875 12.085C7.71741 12.2525 7.54625 12.4901 7.46068 12.7626C7.37511 13.035 7.37969 13.3278 7.47375 13.5975C8.22609 15.6439 9.41426 17.5023 10.956 19.044C12.4977 20.5857 14.3561 21.7739 16.4025 22.5262C16.9537 22.7287 17.5625 22.5213 17.915 22.0513L19.1275 20.435C19.2935 20.2134 19.5211 20.0458 19.782 19.9531C20.0428 19.8604 20.3252 19.8467 20.5938 19.9137L26.1225 21.2963C26.7475 21.4525 27.1875 22.015 27.1875 22.66V24.375C27.1875 25.1209 26.8912 25.8363 26.3637 26.3637C25.8363 26.8912 25.1209 27.1875 24.375 27.1875H21.5625V27.1875Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            +88 01750 14 14 14
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M18.75 13.125C18.75 14.1196 18.3549 15.0734 17.6517 15.7767C16.9484 16.4799 15.9946 16.875 15 16.875C14.0054 16.875 13.0516 16.4799 12.3483 15.7767C11.6451 15.0734 11.25 14.1196 11.25 13.125C11.25 12.1304 11.6451 11.1766 12.3483 10.4733C13.0516 9.77009 14.0054 9.375 15 9.375C15.9946 9.375 16.9484 9.77009 17.6517 10.4733C18.3549 11.1766 18.75 12.1304 18.75 13.125V13.125Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.375 13.125C24.375 22.0525 15 27.1875 15 27.1875C15 27.1875 5.625 22.0525 5.625 13.125C5.625 10.6386 6.61272 8.25403 8.37087 6.49587C10.129 4.73772 12.5136 3.75 15 3.75C17.4864 3.75 19.871 4.73772 21.6291 6.49587C23.3873 8.25403 24.375 10.6386 24.375 13.125V13.125Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{/* Input: Name */}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
			{/* Input: Email */}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
			{/* Input: Mobile */}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
            />
			{/* Input: Doctor Name */}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="text"
              name="doctorName"
              id="doctorName"
              placeholder="Doctor Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
			{/* Input: Date */}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="date"
              name="date"
              id="date"
            />
			{/* Input: Time*/}
            <input
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="rounded-[10px] p-[19px] leading-[26px]"
              type="time"
              name="time"
              id="time"
            />
          </div>
          <button type="submit" className="bg-[#F7A582] py-[18px] text-xl font-bold text-white w-full rounded-[10px] mt-6">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
