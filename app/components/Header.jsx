import Image from "next/image";
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className="absolute z-10 text-white max-md:flex-col w-10/12 top-0 left-1/2 -translate-x-1/2 flex justify-between items-center">
        <div className="">
            <Image width={200} src={logo} alt="logo" />
        </div>
        <nav>
            <ul className="flex items-center gap-5">
                <li><a href="">الرئيسية</a></li>
                <li><a href="">خدماتنا</a></li>
                <li><a href="">المنيو</a></li>
                <li><a href="">فروعنا</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
