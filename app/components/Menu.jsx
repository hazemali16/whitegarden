import Image from "next/image";
import product1 from "../images/DSC07804.jpg"
import product2 from "../images/DSC07814.jpg"
import product3 from "../images/DSC07825.jpg"
import product4 from "../images/DSC07829.jpg"
import product5 from "../images/DSC07832.jpg"
import product6 from "../images/DSC07833.jpg"
import product8 from "../images/DSC07852.jpg"
import product7 from "../images/DSC07892.jpg"
import product9 from "../images/DSC07893.jpg"


const Menu = () => {
  return (
    <div className="pb-40 text-center opacity-0 translate-y-10 duration-500" id="menu">
        <div className="w-10/12 mx-auto">
        <p className="w-1/2 leading-relaxed mx-auto max-lg:w-3/4 max-md:w-full text-xl">نجهز بعناية في وايت قادرن احتياجاتكم من السعرات الحرارية للمحافظة على نضارتكم ونشاطكم من خلال المكونات وطرق التحضير كما تعد مأكولاتنا لغة عالمية لها القدرة على التقريب بين الأحبة عبر أشهى الأطباق لإرضاء جميع الأذواق.</p></div>
    <div className="relative mt-20">
    <div className="absolute left-btn left-5 top-1/2 cursor-pointer -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white shadow-xl">
        <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="absolute right-5 right-btn cursor-pointer top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white shadow-xl">
        <i className="fa-solid fa-arrow-right"></i>
        </div>
    <div className="mb-20 overflow-hidden slider">
        <div className="before"></div>
            <div className="flex gap-[2%] items-center duration-300 py-5">
                <div className="product shadow-xl">
                    <Image src={product1} alt="product1"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product2} alt="product2"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product3} alt="product3"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product4} alt="product4"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product5} alt="product5"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product6} alt="product6"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product7} alt="product7"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product8} alt="product8"/>
                </div>
                <div className="product shadow-xl">
                    <Image src={product9} alt="product9"/>
                </div>
            </div>
        </div>
    </div>
  </div>
);
};

export default Menu;
