import './App.css';
import doctor from './doctor.png';
import back from './dashicons_arrow-down-alt2.svg';
import view from './carbon_view.svg';


function App() {
  return (
    <div className="App mx-6">
      <div className="flex justify-center items-center relative mt-8">
        <img src={back} alt="view" className="mr-1 absolute left-0"/>
        <span className="text-sm text-black font-bold">UPCOMING APPOINMENTS</span>
      </div>
      <div className="bg-[#F6F6F6] py-5 px-3.5 mt-10 rounded-[9px] bg-gradient-to-r from-[#0037C5] to-[#08005F] ">
        <div className="flex justify-between items-center">
          <span className="text-sm text-white font-bold">New Booking In 2 Minutes</span>
          <button className="shadow-lg rounded-[12px] text-sm w-[86px] py-2 rounded-[50px] bg-gradient-to-r from-[#FF8412] from-10% via-[#D23758] via-60% to-[#B1008A] to-90% text-white">Book Now</button>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-5 px-1.5 rounded-[9px] mt-3.5">
        <div className="flex justify-between">
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] mr-1.5 bg-gradient-to-r from-[#FF8412] from-10% via-[#D23758] via-60% to-[#B1008A] to-90% text-white">Clinic</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] border border-[#EDEDED] mr-1.5">Test</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] border border-[#EDEDED] mr-1.5">Surgery</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] border border-[#EDEDED]">Medicine</button>
        </div>
        <div className="flex justify-start my-6">
          <img src={doctor} alt="doctor" className="mr-3.5 w-[84px] max-h-[84px]"/>
          <div>
            <p className="text-sm mb-2.5">17 september 2021, 9.30 PM</p>
            <p className="text-sm mb-2.5 text-[#E97000]">Appointment With Doctor Arun</p>
            <p className="text-sm mb-2.5">Doctor World Clinic</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="shadow-lg rounded-[12px] text-sm h-[35px] text-[10px] rounded-[50px] mr-3 bg-gradient-to-r from-[#B1008A] to-[#060D67] text-white px-2.5">RESCHEDULE</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[89px] h-[35px] text-[10px] rounded-[50px] bg-gradient-to-r from-[#B1008A] to-[#060D67] text-white mr-3">CANCEL</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[89px] h-[35px] text-[10px] rounded-[50px] border border-[#EDEDED] flex flex-wrap items-center justify-center">
            <img src={view} alt="view" className="mr-1"/>
            <span>VIEW</span>
            </button>
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-5 px-1.5 rounded-[9px] mt-3.5">
        <div className="flex justify-between">
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] mr-1.5 bg-gradient-to-r from-[#FF8412] from-10% via-[#D23758] via-60% to-[#B1008A] to-90% text-white">Clinic</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px] mr-1.5 bg-gradient-to-r from-[#FF8412] from-10% via-[#D23758] via-60% to-[#B1008A] to-90% text-white">Test</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px]border border-[#EDEDED] mr-1.5">Surgery</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[75px] h-[35px] text-[13px] rounded-[50px]border border-[#EDEDED]">Medicine</button>
        </div>
        <div className="flex justify-start my-6">
          <img src={doctor} alt="doctor" className="mr-3.5 w-[84px] max-h-[84px]"/>
          <div>
            <p className="text-sm mb-2.5">17 september 2021, 9.30 PM</p>
            <p className="text-sm mb-2.5 text-[#E97000]">Appointment With Doctor Arun</p>
            <p className="text-sm mb-2.5">Doctor World Clinic</p>
            <p className="text-sm mb-2.5">Test :  X-ray Test</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="shadow-lg rounded-[12px] text-sm h-[35px] text-[10px] rounded-[50px] mr-3 bg-gradient-to-r from-[#B1008A] to-[#060D67] text-white px-2.5">RESCHEDULE</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[89px] h-[35px] text-[10px] rounded-[50px] bg-gradient-to-r from-[#B1008A] to-[#060D67] text-white mr-3">CANCEL</button>
          <button className="shadow-lg rounded-[12px] text-sm w-[89px] h-[35px] text-[10px] rounded-[50px] border border-[#EDEDED] flex flex-wrap items-center justify-center">
            <img src={view} alt="view" className="mr-1"/>
            <span>VIEW</span>
            </button>
        </div>
      </div>
      <button className="shadow-lg bg-[#F6F6F6] rounded-[12px] text-sm w-full md:w-[100px] h-12 text-[13px] rounded-[50px] border border-[#EDEDED] my-3.5">BACK</button>
    </div>
  );
}

export default App;
