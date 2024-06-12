import Image from "next/image";
import service1 from "../images/DSC07815.jpg"
import service2 from "../images/DSC07856.jpg"
import service3 from "../images/DSC07822.jpg"


const Services = () => {
  return (
    <div className="w-10/12 mx-auto py-40 text-center opacity-0 translate-y-10 duration-500" id="services">
      <p className="w-1/2 leading-relaxed mx-auto max-lg:w-3/4 max-md:w-full text-xl">يفهم وايت قاردن مدى توقعاتكم ومعايير الجمال التي تليق بكل اللحظات واللقاءات والمناسبات؛ ليقدم لكم تشكيلة مأكولات وقهوة صنعت بحب وتجدد عن كل لقاء لتكتشفوا أروع صور التميز والإبداع في فنون الطهي وعالم النكهات التي تناسب كل الأعمار.</p>
      <div className="grid mt-20 grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="service opacity-0 translate-y-10 duration-500 delay-500">
          <Image src={service1} alt="service1"/>
        </div>        
        <div className="service opacity-0 translate-y-10 duration-500 delay-700">
          <Image src={service2} alt="service2"/>
        </div>        
        <div className="service opacity-0 translate-y-10 duration-500 delay-1000">
          <Image src={service3} alt="service3"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
