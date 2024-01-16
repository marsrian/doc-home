export const metadata = {
  title: "About - Doc Home"
}


const AboutPage = () => {
  return (
    <div className=" bg-[#07332F] max-w-full h-[500px] flex items-center">
      <div className="px-20">
        <p className="text-lg font-normal text-white">
          Home / <span className="text-lg font-semibold">About</span>
        </p>
        <h1 className="font-bold text-[45px] text-white">About</h1>
      </div>
    </div>
  );
};

export default AboutPage;
