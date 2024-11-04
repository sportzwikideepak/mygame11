// app/layout.js
import { Hind_Siliguri } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ProtectedRoute from "@/components/ProtectedRoute"; // Adjust the path as necessary

const inter = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Games 11",
  description: "Games 11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className}`}>
        <StoreProvider>
          <NextTopLoader />
          <ProtectedRoute>
            {children}
          </ProtectedRoute>
        </StoreProvider>
      </body>
    </html>
  );
}
