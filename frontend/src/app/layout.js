import { Roboto } from "next/font/google";
import "../scss/Main.scss";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Corso di inglese",
  description: "Corso gratuito di inglese",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
