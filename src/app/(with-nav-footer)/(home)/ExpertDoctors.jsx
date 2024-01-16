import getDoctors from "@/utils/getDoctors";
import SingleDoctor from "./SingleDoctor";

const ExpertDoctors = async () => {
  const doctors = await getDoctors();
  return (
    <div className="mt-32">
      <h1 className="text-[40px] text-[#0A0808] font-bold text-center  mb-5">
        Our Expert Doctors
      </h1>
      <p className="text-[#3B3A3A] leading-[26px] w-full md:w-[909px] mx-auto px-4 md:px-0 mb-16 text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px]">
        {doctors.map((doctor) => (
          <SingleDoctor doctor={doctor} key={doctor._id} />
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctors;
