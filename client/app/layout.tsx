import { Nunito } from "next/font/google";


import "@/styles/index.scss";



const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Goals Web Application",
  description: "Welcome to Goals Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
