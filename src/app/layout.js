// import { Inter } from "next/font/google";
import { Hind_Siliguri } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/new/common/Footer";

const inter = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Games 11",
  description: "Games 11",
};

export const viewport = {
  themeColor: "#FFEEED",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        // style={{ backgroundColor: "#3e3e3e" }}
        className={`${inter.className}`}
      >
        <StoreProvider>
          <NextTopLoader />
          {/* <div className="max-w-[1280px] w-full">
            <div
              style={{ backgroundColor: "#3e3e3e" }}
              className="flex min-h-screen bg-white shadow-lg justify-center"
            >
              <div
                style={{ backgroundColor: "#F6F8FF", maxWidth: "750px" }}
                className="flex-1 lg:w-full w-5/12"
              > */}
          {children}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* <BottomNav /> */}
          {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  );
}
