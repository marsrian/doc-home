import "./appointment.css";

export const metadata = {
  title: "Appointment - Doc Home"
}


const AppointmentPage = () => {
  return (
    <div className=" bg-[#07332F] max-w-full h-[500px] xl:h-[500px] 2xl:h-[500px] flex items-center">
      <div className="px-20 mt-20">
        <p className="text-lg font-normal text-white">
          Home / <span className="text-lg font-semibold">Appointment</span>
        </p>
        <h1 className="font-bold text-[45px] text-white">Appointment</h1>
        <div className="absolute bottom-[143px] bgTabletFull w-[214px] h-[215px]"></div>
        <div className="absolute right-40 bottom-[230px] bgTabletBottom w-[150px] h-[170px]"></div>
        <div className="absolute right-[93px] bottom-[300px] bgTabletTop w-[150px] h-[170px]"></div>
      </div>
    </div>
  );
};

export default AppointmentPage;
