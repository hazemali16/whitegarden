import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "وايت قاردن",
  description: "وايت قاردن تجربة باقية ولحظات تلامس الحواس تجمع العائلة والأصدقاء والفصول الأربعة بلطف ولذة النكهات وعبق المبخرة والدلة السعودية من أجل أوقات ممتعة تفوق الأماني، ومجموعة جديدة من التجارب والفعاليات الاستثنائية لعشاق الأطباق الشهية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
