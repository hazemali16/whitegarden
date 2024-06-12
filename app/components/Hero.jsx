

const Hero = () => {
  return (
  <div className="h-screen flex items-center justify-center" id="hero">
    <div className="relative z-10 text-center w-1/2 max-md:w-11/12 text-white overflow-hidden">
    <h1 className="text-5xl font-bold max-md:text-4xl text-[var(--heading-color)] mb-10">وايت قاردن</h1>
    <p className="text-lg leading-relaxed max-md:text-base"> تجربة باقية ولحظات تلامس الحواس تجمع العائلة والأصدقاء والفصول الأربعة بلطف ولذة النكهات وعبق المبخرة والدلة السعودية من أجل أوقات ممتعة تفوق الأماني، ومجموعة جديدة من التجارب والفعاليات الاستثنائية لعشاق الأطباق الشهية.</p>
    </div>
  </div>
);
};

export default Hero;
