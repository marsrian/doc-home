// import ReviewAll from "@/components/ReviewAll/ReviewAll";
import PatientsReviewAll from "./PatientsReviewAll";

const PatientsReview = () => {
  return (
    <div className="mt-32">
      <h1 className="text-[#0A0808] text-[40px] text-center font-bold mb-5">
        What Our Patients Says
      </h1>
      <p className="text-[#3B3A3A] text-center leading-[26px] mb-[50px] md:w-[909px] mx-auto px-4 md:px-0">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <PatientsReviewAll />
    </div>
  );
};

export default PatientsReview;
