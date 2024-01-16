import Header from "@/app/(with-nav-footer)/(home)/Header";
import DocInfo from "./DocInfo";
import OurServices from "./OurServices";
import ExpertDoctors from "./ExpertDoctors";
import ContactUs from "./ContactUs";
import PatientsReview from "./PatientsReview";

const Home = () => {
  return (
    <div className="">
      <Header />
      <main className="max-w-[1200px] mx-auto">
        <OurServices />
        <DocInfo />
        <PatientsReview />
        <ExpertDoctors />
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
