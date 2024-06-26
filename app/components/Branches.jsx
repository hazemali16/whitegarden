import Image from "next/image";
import branch1 from "../images/branch1.jpg"
import branch2 from "../images/branch2.png"
import branch3 from "../images/branch3.jpg"
import branch4 from "../images/branch4.jpg"

const Branches = () => {
    return (
        <div className="w-10/12 mx-auto pb-40 text-center opacity-0 translate-y-10 duration-500" id="branches">
          <h2 className="mb-8 text-3xl font-bold text-[var(--main-color)]">فروعنا</h2>
          <div className="grid mt-20 grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            <a href="https://goo.gl/maps/R9dvSiUDLYUDBHLh9" target="_blank" alt="العليا" className="branch shadow-xl opacity-0 translate-y-10 duration-500 delay-500 h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">العليا</div>
              <Image src={branch1} alt="branch1" className="w-full h-full object-cover"/>
            </a>        
            <a href="https://goo.gl/maps/FkDmu1UKjDdHTAKc7"  target="_blank" alt="واجهة الرياض" className="branch shadow-xl opacity-0 translate-y-10 duration-500 delay-700 h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">واجهة الرياض</div>

              <Image src={branch2} alt="branch2" className="w-full h-full object-cover"/>
            </a>        
            <a href="https://goo.gl/maps/AVJcAHhv4KoSoTXV7" target="_blank" alt="روبين بلازا" className="branch shadow-xl opacity-0 translate-y-10 duration-500 delay-1000 h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">روبين بلازا</div>

              <Image src={branch3} alt="branch3" className="w-full h-full object-cover"/>
            </a>
            <a href="https://goo.gl/maps/EiwLP2jqKVk3nq8t8" alt="ذا فيو" target="_blank" className="branch shadow-xl opacity-0 translate-y-10 duration-500 delay-[1.3s] h-96">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-20">ذا فيو</div>

              <Image src={branch4} alt="branch4" className="w-full h-full object-cover"/>
            </a>
          </div>
        </div>
      );
};

export default Branches;
