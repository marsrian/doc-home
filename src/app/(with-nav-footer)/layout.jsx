import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Providers from "@/providers";

const WithNavFooterLayout = ({ children }) => {
  return (
    <div>
      {/* <Providers> */}
        <Navbar />
        <div className="min-h-[calc(100vh-100px)]">{children}</div>
        <Footer />
      {/* </Providers> */}
    </div>
  );
};

export default WithNavFooterLayout;
