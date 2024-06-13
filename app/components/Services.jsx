import Image from "next/image";
import service1 from "../images/DSC07815.jpg"
import service3 from "../images/DSC07822.jpg"
import service5 from "../images/services2.jpg"
import service6 from "../images/services3.jpg"
import service7 from "../images/services4.jpg"
import service8 from "../images/services5.jpg"
import service9 from "../images/services6.jpg"



const Services = () => {
  return (
    <div className="w-10/12 mx-auto py-40 text-center opacity-0 translate-y-10 duration-500" id="services">
      <p className="w-1/2 leading-relaxed mx-auto max-lg:w-3/4 max-md:w-full text-xl text-[var(--heading-color)]">يفهم وايت قاردن مدى توقعاتكم ومعايير الجمال التي تليق بكل اللحظات واللقاءات والمناسبات؛ ليقدم لكم تشكيلة مأكولات وقهوة صنعت بحب وتتجدد عن كل لقاء لتكتشفوا أروع صور التميز والإبداع في فنون الطهي وعالم النكهات التي تناسب كل الأعمار.</p>
      <div className="grid mt-20 grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="service opacity-0 translate-y-10 duration-500 delay-500">
          <Image src={service1} alt="service1"/>
        </div>        
        <div className="service opacity-0 translate-y-10 duration-500 delay-1000">
          <Image src={service3} alt="service3"/>
        </div>    
        <div className="service opacity-0 translate-y-10 duration-500 delay-[1.5s]">
          <Image src={service5} alt="service5"/>
        </div>        
        <div className="service opacity-0 translate-y-10 duration-500 delay-[1.7s]">
          <Image src={service6} alt="service6"/>
        </div>
        <div className="service opacity-0 translate-y-10 duration-500 delay-[2s]">
          <Image src={service7} alt="service7"/>
        </div>        
        <div className="service opacity-0 translate-y-10 duration-500 delay-[2.3s]">
          <Image src={service8} alt="service8"/>
        </div>
        <div className="service opacity-0 translate-y-10 duration-500 delay-[2.5s]">
          <Image src={service9} alt="service9"/>
        </div>          
      </div>
    </div>
  );
};

export default Services;

