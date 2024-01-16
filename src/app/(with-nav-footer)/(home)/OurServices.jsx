import Image from "next/image";
import doctor from "@/assets/services/doctor.png";
import TabAll from "@/components/TabAll/TabAll";

const OurServices = () => {
  return (
    <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Image src={doctor} alt="doctor" />
      </div>
      <div>
        <h3 className="text-[#0A0808] text-[40px] font-bold mb-4">
          Our Services
        </h3>
        <p className="text-[#0A0808] leading-[26px] md:w-[438px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <TabAll />
      </div>
    </div>
  );
};

export default OurServices;
