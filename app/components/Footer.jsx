

const Footer = () => {
  return (
    <div className="p-5 bg-[var(--secondary-color)] text-white flex items-center justify-between max-md:flex-col max-md:gap-5 footer">
        <div className="text-2xl font-bold">وايت قاردن</div>
        <div className="flex items-center gap-3">
            رقم التواصل : 
            <div className="tel flex flex-row-reverse gap-2 items-center">
            +966 59 999 5576
            <i className="fa-solid fa-phone-volume"></i>
            </div>
            </div>
    </div>
);
};

export default Footer;
